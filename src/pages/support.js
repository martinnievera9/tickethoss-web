import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Phone from "../images/phone.svg"
import Email from "../images/email.svg"
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

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title="Support" />
        <Styles>
          <Container>
            <div className="title">Support</div>
            <div className="my-section">
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
                <a href="mailto:support@pitpay.com">support@pitpay.com</a>
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
                <a href="phone:8557487292">(855) 748-7292</a>
              </div>
            </div>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
