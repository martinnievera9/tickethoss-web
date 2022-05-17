import React from "react"
import styled from "styled-components"
import PitPayLogo from "../../images/biglogo.png"

const Hero = styled.div`
  background: #c0ff02;
  color: white;
  padding-top: 30px;
  padding-bottom: 1px;

  .container {
    max-width: 880px;
    display: block;
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (min-width: 940px) {
    padding-top: 105px;
    padding-bottom: 40px;
    overflow: hidden;

    .container {
      max-width: 880px;
      display: block;
      margin: 0 auto;
      padding: 0 20px;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .my-image {
    width: 200px;
    margin: 0 auto;

    @media screen and (min-width: 940px) {
      width: 480px;
    }
  }

  .my-title {
    color: white;
    font-weight: 500;
    padding: 0px 20px;
    font-size: 40px;
    margin-bottom: 24px;
    font-family: Barlow Condensed;
    text-align: left;
    line-height: 1.3;

    @media screen and (min-width: 940px) {
      font-size: 63px;
    }
  }

  .hero-list {
    color: white;
    list-style: disc;
    list-style-position: inside;
    margin-bottom: 40px;

    li {
      font-size: 28px;
      text-align: left;
      font-family: Barlow Condensed;
      font-weight: 500;

      @media screen and (min-width: 940px) {
        font-size: 32px;
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: 940px) {
      li {
        font-size: 32px;
        text-align: left;
        font-family: Barlow Condensed;
        font-weight: 500;
      }
    }
  }

  .my-image {
    .gatsby-image-wrapper {
      width: 250px;
      margin-bottom: -7px;
      display: block;
      margin: 0 auto;

      @media screen and (min-width: 940px) {
        width: 380px;
        margin: 0;
      }
    }
  }

  .my-desc {
    @media screen and (min-width: 940px) {
      max-width: 500px;
      margin-left: 50px;
    }
  }
`

export default () => {
  return (
    <Hero>
      <div className="container">
        <div className="my-image">
          <img src={PitPayLogo} alt="Pit Pay Logo" />
        </div>
        <div className="my-desc">
          <div className="my-title">Organizes Your Pit Pass Process</div>

          <ul className="hero-list">
            <li>Get Your Participants in Faster</li>
            <li>Sell Pit Passes in Advance</li>
            <li>Securely Stored Waivers</li>
            <li>Minimize Direct Human Contact</li>
          </ul>
        </div>
      </div>
    </Hero>
  )
}
