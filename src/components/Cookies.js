import React from "react"
import Container from "../components/container"
import styled from "@emotion/styled"
import Safari1 from "../images/safari-1.png"
import Safari2 from "../images/safari-2.png"
import Safari3 from "../images/safari-3.png"
import Chrome1 from "../images/android-1.png"
import Chrome2 from "../images/android-2.png"
import Chrome3 from "../images/android-3.png"
import Chrome4 from "../images/android-4.png"
import Chrome5 from "../images/android-5.png"

const Styles = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 2.5em;
  }

  .section-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 22px;
    color: #00001f;

    @media screen and (min-width: 940px) {
      margin: 60px 0 10px 0;
    }
  }

  .sub-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 26px;
    text-decoration: underline;
  }

  .paragragh {
    margin-bottom: 10px;
    margin-top: 20px;

    @media screen and (min-width: 940px) {
      font-size: 24px;
    }
  }

  .red {
    color: red;
  }

  ul {
    list-style: disc;
    padding-left: 15px;
    margin-left: 15px;
  }

  .image-wrapper {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  img {
    width: 80%;
    height: auto;
    margin: 0 auto;
    display: block;

    @media screen and (min-width: 940px) {
      width: 50%;
      margin: 0;
    }
  }
`

export default () => {
  return (
    <Styles>
      <Container>
        <div className="title">Enable Cookies</div>
        <p className="paragragh">
          This page contains information on how to enable cookies for the Safari
          and Chrome Browsers.
        </p>
        <p className="paragragh">Choose your browser:</p>
        <ul>
          <li>
            <a href="#safari">iPhone - Safari</a>
          </li>
          <li>
            <a href="#chrome">Android - Chrome</a>
          </li>
        </ul>
        <div id="safari" className="section-title">
          Enable Cookies on iPhone (Safari)
        </div>
        <p className="paragragh">
          <strong>Step 1:</strong> Tap on the Apple Settings Icon on Your Home
          Screen
        </p>
        <div className="image-wrapper">
          <img src={Safari1} alt="Safari Screenshot 1" />
        </div>
        <p className="paragragh">
          <strong>Step 2:</strong> Scroll Down to Find Safari and Tap to Open
          Safari Settings
        </p>
        <div className="image-wrapper">
          <img src={Safari2} alt="Safari Screenshot 2" />
        </div>
        <p className="paragragh">
          <strong>Step 3:</strong> Scroll down to the "Privacy & Security"
          section. You will need to toggle off "Prevent Cross-Site Tracking" and
          "Block All Cookies".
        </p>
        <div className="image-wrapper">
          <img src={Safari3} alt="Safari Screenshot 3" />
        </div>
        <p className="paragragh red">
          <strong>Step 4:</strong> Refresh the Browser.
        </p>
        <div id="chrome" className="section-title">
          Enable Cookies on Android (Chrome)
        </div>
        <p className="paragragh">
          <strong>Step 1:</strong> Open Your Chrome Internet Browser and Tap the
          Three Dots Icon ￼in the Top Right Corner of Your Screen
        </p>
        <div className="image-wrapper">
          <img src={Chrome1} alt="Chrome Screenshot 1" />
        </div>
        <p className="paragragh">
          <strong>Step 2:</strong> Select “Settings” in the Menu
        </p>
        <div className="image-wrapper">
          <img src={Chrome2} alt="Chrome Screenshot 2" />
        </div>
        <p className="paragragh">
          <strong>Step 3:</strong> Select “Site Settings” in the Settings Menu
        </p>
        <div className="image-wrapper">
          <img src={Chrome3} alt="Chrome Screenshot 3" />
        </div>
        <p className="paragragh">
          <strong>Step 4:</strong> Select “Cookies” in the List of Site Settings
        </p>
        <div className="image-wrapper">
          <img src={Chrome4} alt="Chrome Screenshot 4" />
        </div>
        <p className="paragragh">
          <strong>Step 5:</strong> Change the Setting to “Allow Cookies”
        </p>
        <div className="image-wrapper">
          <img src={Chrome5} alt="Chrome Screenshot 5" />
        </div>
        <p className="paragragh red" style={{ marginBottom: 80 }}>
          <strong>Step 6:</strong> Refresh the Browser.
        </p>
      </Container>
    </Styles>
  )
}
