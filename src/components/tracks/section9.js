import React from "react"
import Location from "../../images/location.svg"
import Facebook from "../../images/facebook.svg"
import LinkedIn from "../../images/linkedin.svg"
import Twitter from "../../images/twitter.svg"
import Instagram from "../../images/instagram.svg"
import Phone from "../../images/phone.svg"
import Email from "../../images/email.svg"
import styled from "@emotion/styled"
import Orangelogo from "../../images/orangelogo.png"

const Section = styled.div`
  background: #fff;
  color: white;
  position: relative;
  padding: 20px 20px 38px 20px;
  max-width: 580px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 940px) {
    padding: 40px 20px 68px 20px;
  }
`

const Styles = styled.div`
  color: #00001f;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 30px;

    @media screen and (min-width: 940px) {
      font-size: 60px;
    }
  }

  .my-section {
    padding-bottom: 20px;

    div {
      color: #727279;

      a {
        color: #727279;
        font-weight: 500;
        font-size: 20px;

        @media screen and (min-width: 940px) {
          font-size: 25px;
        }
      }

      .label {
        color: #727279;
        font-weight: 500;
        font-size: 20px;

        @media screen and (min-width: 940px) {
          font-size: 25px;
        }
      }
    }
  }

  .header {
    font-size: 28px;
    display: block;
    font-weight: 500;
    color: #00001f;
    font-family: Roboto;
    margin-bottom: 15px;
  }

  .container {
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 940px) {
      width: 400px;
    }
  }

  .wrapper {
    .pitpay-logo {
      width: 50%;
      margin: 0 20px 20px 0;
      display: block;
    }

    @media screen and (min-width: 940px) {
      display: flex;

      .pitpay-logo {
        width: 30%;
        margin: 0 auto;
      }
    }
  }

  .track-footer-logo {
    width: 100%;
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
    background-color: #fa4616;
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

const SocialRow = styled.div`
  width: 100%;

  @media screen and (min-width: 940px) {
    width: 60%;
  }
`

const ImgWrapper = styled.div`
  width: 50%;

  @media screen and (min-width: 940px) {
    width: 40%;
    margin-right: 20px;

    img {
      width: 100%;
      display: block;
    }
  }
`

export default () => {
  return (
    <div
      style={{
        borderTop: "7px",
        borderTopColor: "#e6e5e5",
        borderTopStyle: "solid",
      }}
    >
      <Styles>
        <Section>
          <div className="container">
            <div className="title" style={{ fontSize: 36 }}>
              Get In Touch
            </div>
            <div className="my-section">
              <span className="header" style={{ fontSize: 24 }}>
                Headquarters
              </span>

              <div className="row" style={{ color: "grey" }}>
                <div className="icon-wrapper">
                  <img
                    src={Location}
                    alt="Location Icon"
                    style={{
                      width: 24,
                      height: 24,
                      position: "relative",
                    }}
                  />
                </div>
                <div class="label">Pit Pay Inc. Charlotte, NC</div>
              </div>

              <div className="row">
                <div className="icon-wrapper">
                  <img
                    src={Email}
                    alt="Email Icon"
                    style={{
                      width: 24,
                      height: 24,
                      position: "relative",
                    }}
                  />
                </div>
                <a
                  href="mailto:partners@pitpay.com"
                  style={{ fontWeight: "600", textDecoration: "underline" }}
                >
                  Partners@pitpay.com
                </a>
              </div>

              <div className="row">
                <div className="icon-wrapper">
                  <img
                    src={Phone}
                    alt="Phone Icon"
                    style={{
                      width: 17,
                      height: 24,
                      position: "relative",
                    }}
                  />
                </div>
                <a href="phone:8557487291">(855) 748-7291</a>
              </div>
            </div>
          </div>
          <div className="wrapper track-footer-logo">
            <ImgWrapper>
              <img
                className="pitpay-logo-img"
                src={Orangelogo}
                alt="Pit Pay Logo"
              />
            </ImgWrapper>
            <SocialRow>
              <div className="title">Follow Us</div>
              <ul className="social">
                <li className="social-icon">
                  <a
                    href="https://www.facebook.com/TicketHoss/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} alt={"facebook-icon"} />
                  </a>
                </li>
                <li className="social-icon">
                  <a
                    href="https://www.instagram.com/tickethoss/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt={"instagram-icon"} />
                  </a>
                </li>
                <li className="social-icon">
                  <a
                    href="https://twitter.com/tickethoss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt={"twitter-icon"} />
                  </a>
                </li>
                <li className="social-icon">
                  <a
                    href="https://www.linkedin.com/company/pitpay"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedIn} alt={"linkedin-icon"} />
                  </a>
                </li>
              </ul>
            </SocialRow>
          </div>
        </Section>
      </Styles>
    </div>
  )
}
