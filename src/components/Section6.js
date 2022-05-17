import React from "react"
import styled from "styled-components"
import Logo from "../images/ticketHossLogo.svg"
import AppleBadge from "../components/AppleBadge"
import GoogleBadge from "../components/GoogleBadge"

const Section6 = styled.div`
  background: #fa4616;
  color: white;
  position: relative;
  padding-top: 68px;
  padding-bottom: 68px;
  text-align: center;
  height: calc(100% - 174px);
  display: flex;
  align-items: center;

  .container {
    max-width: 580px;
    display: block;
    margin: 0 auto;
  }

  .my-logo {
    img {
      width: 300px;

      @media screen and (min-width: 940px) {
        width: 550px;
      }
    }
  }

  .my-title {
    color: #ffffff;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 14px;
    font-family: Barlow Condensed;
  }

  .my-secondary {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 24px;
    padding: 0px 20px;
  }

  .my-image {
    img {
      width: 450px;
      margin-bottom: -7px;
    }
  }

  .my-badges {
    margin-bottom: 24px;
  }
`

export default () => (
  <Section6>
    <div className="container">
      <div className="my-desc">
        <div className="my-logo">
          <img src={Logo} alt="Pit Pay App Icon" />
        </div>

        <div className="my-title">Get The App NOW!</div>

        <div className="my-secondary">
          Choose your mobile platform and download FREE!
        </div>

        <div className="my-badges">
          <AppleBadge />
          <GoogleBadge />
        </div>
      </div>
    </div>
  </Section6>
)
