import React from "react"
import Layout from "../components/layout"
import Location from "../images/location.svg"
import Facebook from "../images/facebook.svg"
import LinkedIn from "../images/linkedin.svg"
import Twitter from "../images/twitter.svg"
import Instagram from "../images/instagram-white.svg"
import Phone from "../images/phone.svg"
import Email from "../images/email.svg"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"

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
    background-color: #fa4616;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 4px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
    }
  }

  .social {
    display: flex;
  }

  .note {
    font-family: Roboto;
    font-weight: 700;
    font-size: 15px;
    color: #00001f;
  }
`

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <Styles>
          <Container>
            <div className="title">Get In Touch</div>
            <div className="my-section">
              <div
                style={{
                  fontSize: "22px",
                  marginBottom: 12,
                  fontWeight: "500",
                  color: "#00001F",
                  fontFamily: "Roboto",
                }}
              >
                Headquarters
              </div>

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
                <a href="mailto:info@pitpay.com">info@pitpay.com</a>
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
                <a href="phone:8557487291">
                  (855) 748-7291 <span className="note">Text or Call</span>
                </a>
              </div>
            </div>
            <div className="my-section">
              <div
                style={{
                  fontSize: "22px",
                  marginBottom: 12,
                  fontWeight: "500",
                  color: "#00001F",
                  fontFamily: "Roboto",
                }}
              >
                Business Inquiries
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
                <a href="mailto:partners@pitpay.com">partners@pitpay.com</a>
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
                <a href="phone:7044289020">
                  (704) 428-9020 <span className="note">Text or Call</span>
                </a>
              </div>
            </div>

            <div className="title">Follow Us</div>
            <ul className="social">
              <li className="social-icon">
                <a
                  href="https://www.facebook.com/TicketHoss/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Facebook} alt="facebook-logo" />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.instagram.com/tickethoss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="instagram-logo" />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://twitter.com/tickethoss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitter} alt="twitter-logo" />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.linkedin.com/company/pitpay"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkedIn} alt="linkedin-logo" />
                </a>
              </li>
            </ul>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
