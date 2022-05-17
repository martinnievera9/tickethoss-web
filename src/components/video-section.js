import React from "react"
import styled from "@emotion/styled"

const Styles = styled.div`
  color: #00001f;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 34px;

    @media (min-width: 768px) {
      width: 25%;
      font-size: 2.5em;
    }
  }

  .title-wrapper {
    display: flex;
    align-items: center;

    img {
      width: 40%;
      display: block;

      @media (min-width: 768px) {
        width: 25%;
        display: block;
      }
    }
  }

  .section-title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 34px;
    font-weight: 600;
    margin-top: 40px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;

    .video-wrapper {
      width: calc(100% - 20px);
      margin: 20px 10px;

      @media (min-width: 600px) {
        width: calc(50% - 20px);
      }

      @media (min-width: 550px) {
        width: calc(33.33% - 20px);
      }
    }

    .video-title {
      font-family: "Roboto";
      font-weight: 500;
      color: #00001f;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
    }
  }
`

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { videos, title } = this.props
    return (
      <Styles>
        <h3 className="section-title">{title}</h3>
        <div className="wrapper">
          {videos.map(item => (
            <div className="video-wrapper">
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "26.25%" /* 16:9 */,
                  paddingTop: 90,
                  height: 0,
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={`https://player.vimeo.com/video/${item.id}?badge=0&autopause=0&player_id=0&app_id=151623`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={item.title}
                />
              </div>
              <p className="video-title">{item.title}</p>
            </div>
          ))}
        </div>
      </Styles>
    )
  }
}
