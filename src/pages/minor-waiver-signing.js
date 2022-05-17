import React, { useCallback, useEffect, useState } from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Styles = styled.div`
  color: #00001f;
  height: 100vh;

  @media screen and (max-device-width: 480px) and (orientation: portrait),
    (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: portrait) {
    padding-bottom: 100px;
  }

  .container {
    height: 100%;
  }

  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-top: 70vh;
    -webkit-overflow-scrolling: touch;
  }

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .settings-wrapper {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #00001f;
    font-family: Barlow Condensed;
    font-weight: 500;

    ul {
      list-style: disc;
      list-style-position: inside;
    }

    .gif {
      height: 200px;
      display: block;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .settings-button {
      background-color: #fa4616;
      border-radius: 5px;
      margin: 10px 0 0 0;
      padding: 10px;
      font-family: Barlow Condensed;
      font-weight: 800;
      font-size: 16px;
      color: #fff;
      border: 0;
      text-transform: uppercase;
    }
  }
`

const getSigningToken = async (waiver_id, role, platform) => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded")
  myHeaders.append(
    "Authorization",
    `Basic ${process.env.GATSBY_REST_USER}:${process.env.GATSBY_REST_PASSWORD}`
  )

  const urlencoded = new URLSearchParams()
  urlencoded.append("waiver_id", waiver_id)
  urlencoded.append("signer", role)

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  }

  return fetch(`${platform}/signing-token`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log("error", error))
}

const getSigningRole = transaction => {
  if ("1" === transaction || "3" === transaction) {
    return "parent"
  }

  if ("5" === transaction || "6" === transaction) {
    return "purchaser"
  }

  return "minor"
}

const MinorWaiver = () => {
  const [sessions, setSessions] = useState()
  const [domain, setDomain] = useState()

  const receiveMessage = useCallback(event => {
    var origin = event.origin || event.originalEvent.origin
    var data = event.data

    switch (data) {
      case "ESL:MESSAGE:REGISTER":
        event.source.postMessage("ESL:MESSAGE:ACTIVATE_EVENTS", origin)
        break
      case "ESL:MESSAGE:SUCCESS:DOCUMENT_CONFIRM":
        event.source.postMessage("ESL:MESSAGE:SUCCESS:DOCUMENT_CONFIRM", origin)
        setSessions(false)
        window.location.href = "https://www.pitpay.com/waiver-success"
        break
      default:
        break
    }
  }, [])

  useEffect(() => {
    window.addEventListener("message", receiveMessage, false)
    return () => window.removeEventListener("message", receiveMessage)
  }, [receiveMessage])

  const setRequestParams = useCallback(
    async (session, transaction) => {
      const results = await getSigningToken(
        session,
        getSigningRole(transaction),
        "1" === transaction || "2" === transaction || "5" === transaction
          ? process.env.GATSBY_REST_URL_PRODUCTION
          : process.env.GATSBY_REST_URL_STAGING
      )
      setSessions(results.token)
      setDomain(
        "3" === transaction || "4" === transaction || "6" === transaction
          ? "sandbox.esignlive.com"
          : "apps.esignlive.com"
      )
    },
    [setSessions, setDomain]
  )

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const transaction = urlParams.get("transaction")
    const session = urlParams.get("session")
    if (session) {
      setRequestParams(session, transaction)
    } else {
      window.location.href = "/"
    }
  }, [setRequestParams])

  return (
    <Layout>
      <SEO title="Minor Waiver Signing" />
      <Styles>
        <Container className="container">
          {sessions && domain ? (
            <div className="iframe-container">
              <iframe
                className="responsive-iframe"
                src={encodeURI(
                  `https://${domain}/access?sessionToken=${sessions}`
                )}
                title="Minor Waiver Signing"
              />
            </div>
          ) : null}
        </Container>
      </Styles>
    </Layout>
  )
}

export default MinorWaiver
