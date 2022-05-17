import React from "react"
import Container from "./container"
import styled from "@emotion/styled"

const Styles = styled.div`
  color: #00001f;
  margin: 0 20px;

  @media (min-width: 600px) {
    margin: 0 20px 40px 20px;
  }

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 2.5em;
  }

  .section-title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 34px;
    font-weight: 600;
    margin-top: 40px;
  }

  .download-title {
    font-family: Barlow Condensed;
    font-weight: 500;
    color: #00001f;
    font-size: 22px;
    line-height: 20px;

    @media (min-width: 600px) {
      font-size: 26px;
      line-height: 24px;
    }
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: calc(100% - 20px);
      margin: 20px;

      @media (min-width: 630px) {
        width: calc(50% - 40px);
        margin: 40px 20px 20px 0;
      }
    }

    .download-title {
      font-family: Barlow Condensed;
      font-weight: 500;
      color: #00001f;
      font-size: 24px;
      line-height: 26px;
      margin-bottom: 10px;
    }

    .download-description {
      font-family: "Roboto";
      font-weight: 400;
      color: #00001f;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 15px;
    }

    .button-download {
      background-color: #c0ff02;
      font-family: Barlow Condensed;
      font-weight: 600;
      color: #fff;
      display: block;
      padding: 0 10px;
      border-radius: 5px;
      font-size: 24px;
      width: 200px;
      text-align: center;
    }
  }
`

const downloads = [
  {
    title: "Onboarding and Account Setup Resources",
    downloads: [
      {
        url: "https://pitpay.box.com/v/accountsetup-eventguide",
        title: "Pit Pay Account Setup – Track and Event Guide",
        description:
          "Promoter Onboarding/Stripe Account Setup Instructions; Assets Needed for Getting Your Track, Series and Events into the App",
      },
      {
        url: "https://pitpay.box.com/v/addingdashboardicon",
        title: "Adding the Pit Pay Dashboard Icon to Your Home Screen",
        description:
          "Instructions on How to Add the Pit Pay Dashboard Icon to Your Mobile Device's Home Screen for Easy Access",
      },
    ],
  },
  {
    title: "Pit Pay Process and Experience",
    downloads: [
      {
        url: "https://pitpay.box.com/v/understandingpitpay",
        title: "Pit Pay’s Technology – Process – Experience",
        description:
          "Important Information for Promoters Who Want to Learn About Pit Pay and How It Works for You",
      },
    ],
  },
]

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Styles>
        <Container>
          {downloads.map(section => (
            <>
              <h2 className="section-title">{section.title}</h2>
              <div className="wrapper">
                {section.downloads.map(item => (
                  <div className="item">
                    {item.title ? (
                      <p className="download-title">{item.title}</p>
                    ) : null}
                    {item.description ? (
                      <p className="download-description">{item.description}</p>
                    ) : null}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="button-download"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </>
          ))}
        </Container>
      </Styles>
    )
  }
}
