import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import Loading from "../components/Loading"
import styled from "@emotion/styled"
import qs from "qs"

const Styles = styled.div`
  padding-top: 40px;
  color: #00001f;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 2.5em;
  }

  .my-section {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d8d8d8;

    div {
      color: #727279;
      font-size: 19px;

      a {
        color: #727279;
        font-weight: 500;
      }

      .label {
        font-size: 19px;
        color: #727279;
        font-weight: 500;
      }
    }
  }

  .row {
    margin-bottom: 15px;
    display: flex;
  }

  .icon-wrapper {
    width: 25px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
  }

  .social-icon {
    background-color: #c0ff02;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 4px;
    margin-right: 20px;
  }

  .social {
    display: flex;
  }
`

const Title = styled.h3`
  color: #00001f;
  font-family: Barlow Condensed;
  font-size: 2.5em;
  line-height: 1;
  margin-bottom: 20px;
`

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    let { user_id, transaction } = qs.parse(window.location.search.substring(1))

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    var urlencoded = new URLSearchParams()
    urlencoded.append("user_id", user_id)

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    }

    const url =
      "1" === transaction
        ? process.env.GATSBY_REST_URL_PRODUCTION
        : process.env.GATSBY_REST_URL_STAGING

    fetch(`${url}/favorites-email-unsubscribe`, requestOptions)
      .then(response => response.json())
      .then(result =>
        setTimeout(() => this.setState({ isLoading: false }), 2000)
      )
      .catch(error => console.log("error", error))
  }

  render() {
    const { isLoading } = this.state

    return (
      <Layout>
        <SEO title="Unsubscribe" />
        <Styles>
          <Container>
            {isLoading ? (
              <Loading />
            ) : (
              <div>
                <Title>You have successfully unsubscribed.</Title>
                <p>
                  You have unsubscribed from the weekly email of upcoming events
                  from your favorite tracks/series. If you did this in error or
                  you change your mind at any time, you may resubscribe within
                  the Pit Pay App. Go to Notifications -> Allow -> Weekly
                  Favorites Email.
                </p>
              </div>
            )}
          </Container>
        </Styles>
      </Layout>
    )
  }
}
