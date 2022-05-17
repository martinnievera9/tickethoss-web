import React from "react"
import styled from "styled-components"

const Section2 = styled.div`
  background: white;
  color: black;
  position: relative;
  padding-top: 68px;
  text-align: center;
  padding-bottom: 88px;

  .my-title {
    font-size: 2rem;
    margin-bottom: 14px;
    font-family: Barlow Condensed;
    font-weight: bold;
  }

  .my-secondary {
    font-size: 1rem;
    margin-bottom: 24px;
    color: #676779;
  }

  .my-video {
    padding: 0px 20px;
    max-width: 820px;
    display: block;
    min-height: 260px;
    margin: 0 auto;
  }
`

export default () => {
  return (
    <Section2>
      <div className="my-logo"></div>

      <div className="my-title">About Pit Pay</div>

      <div className="my-secondary">
        lorem ipsum venstrol un somales mastre cum est lomas curam
      </div>

      <div className="my-video">
        <iframe
          src="https://player.vimeo.com/video/367628993"
          style={{ height: 381, width: "100%" }}
          title="About Pit Pay"
        ></iframe>
      </div>
    </Section2>
  )
}
