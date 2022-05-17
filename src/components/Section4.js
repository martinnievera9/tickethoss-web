import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import styled from "styled-components"
import GlobeIcon from "../images/GlobeIcon.svg"
import PhoneTouchIcon from "../images/PhoneTouchIcon.svg"
import MessageIcon from "../images/MessageIcon.svg"
import SignYourWaiver from "../images/SignYourWaiver.svg"
import SecurityIcon from "../images/SecurityIcon.svg"
import QRCodeIcon from "../images/QRCodeIcon.svg"

const Section4 = styled.div`
  background: white;
  color: black;
  position: relative;
  padding-top: 68px;
  text-align: center;
  max-width: 600px;
  display: block;
  margin: 0 auto;
  padding-bottom: 68px;

  @media screen and (min-width: 940px) {
    max-width: 1080px;
  }

  .my-title {
    font-size: 2rem;
    margin-bottom: 14px;
    font-family: Barlow Condensed;
    font-weight: bold;
  }

  .my-feature {
    font-size: 1.5rem;
    margin-bottom: 14px;
    font-family: Barlow Condensed;
    font-weight: bold;

    img {
      height: 42px;
      margin-right: 8px;
      position: relative;
      top: 12px;
    }
  }

  .my-secondary {
    font-size: 1rem;
    margin-bottom: 24px;
    color: #676779;
    padding: 0px 20px;

    @media screen and (min-width: 940px) {
      padding: 0px;
    }
  }

  .my-left {
    margin-bottom: 36px;
    padding-top: 24px;

    @media screen and (min-width: 940px) {
      width: 27%;
      display: inline-block;
      text-align: right;
      position: relative;
      bottom: 46px;

      .my-feature img {
        float: right;
        margin-left: 10px;
        position: relative;
        top: 0px;
      }
    }
  }

  .my-center {
    margin: 24px 0px;
    width: 250px;
    display: block;
    margin: 0 auto;

    img {
      width: 250px;
    }
    

    @media screen and (min-width: 940px) {
      width: 46%;
      display: inline-block;
      max-width: 387px !important;
      padding: 0px 32px;
      position: relative;
      bottom: 33px;
      
    }

  }

  .my-right {
    margin-bottom: 36px;
    padding-top: 24px;
    @media screen and (min-width: 940px) {
      width: 27%;
      display: inline-block;
      text-align: left;
    }
  }
`

export default () => {
  
  const PitPayApp = useStaticQuery(graphql`
   {
     PitPayApp: file(relativePath: { eq: "PitPayApp.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).PitPayApp.childImageSharp.fluid 
  
  return (
  <Section4>
    <div className="my-left">
      <div className="my-title">Payment Features</div>

      <div className="my-secondary">
        Sed vestibulum vitae lacus vitae posuere. Donec fermentum consectetur
        ipsum, sit amet venenatis milo.
      </div>

      <div className="my-feature">
        <img src={GlobeIcon} alt="Globe Icon" />
        Feature lorem
      </div>

      <div className="my-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat
        orci sederos sodales, ac iaculis tortor pretium.
      </div>

      <div className="my-feature">
        <img src={PhoneTouchIcon} alt="Phone Touch Icon" />
        Feature lorem
      </div>

      <div className="my-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat
        orci sederos sodales, ac iaculis tortor pretium.
      </div>

      <div className="my-feature">
        <img src={MessageIcon} alt="Message Icon" />
        Feature lorem
      </div>

      <div className="my-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat
        orci sederos sodales, ac iaculis tortor pretium.
      </div>
    </div>

    <div className="my-center">
      <Img fluid={PitPayApp} alt="Pit Pay App" />
    </div>

    <div className="my-right">
      <div className="my-title">Waiver Features</div>

      <div className="my-secondary">
        Sed vestibulum vitae lacus vitae posuere. Donec fermentum consectetur
        ipsum, sit amet venenatis milo.
      </div>

      <div className="my-feature">
        <img src={SignYourWaiver} alt="Waiver Icon" />
        Sign Your Waiver
      </div>

      <div className="my-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat
        orci sederos sodales, ac iaculis tortor pretium.
      </div>

      <div className="my-feature">
        <img src={SecurityIcon} alt="Security Icon" />
        Sign Your Waiver
      </div>

      <div className="my-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat
        orci sederos sodales, ac iaculis tortor pretium.
      </div>

      <div className="my-feature">
        <img src={QRCodeIcon} alt="QRCode Icon" />
        Quick Entry Event
      </div>

      <div className="my-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat
        orci sederos sodales, ac iaculis tortor pretium.
      </div>
    </div>
  </Section4>
)}
