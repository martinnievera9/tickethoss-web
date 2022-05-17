import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import KartPassLogo from "../images/kartpass-logo.svg"
import AppleBadge from "../components/AppleBadge"
import GoogleBadge from "../components/GoogleBadge"

const Section1 = styled.div`
  background: #c0ff02;
  color: white;
  position: relative;
  padding-top: 68px;
  text-align: center;
  min-height: 70vh;
  overflow: hidden;

  @media screen and (min-width: 940px) {
    /* text-align: left; */
    padding-top: 55px;
    overflow: hidden;
  }
  .container {
    max-width: 880px;
    display: block;
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (min-width: 940px) {
    /* text-align: left; */
    padding-top: 105px;
    overflow: hidden;

    .container {
      max-width: 880px;
      display: block;
      margin: 0 auto;
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: flex-end;
      flex-direction: row-reverse;
      justify-content: center;
    }
  }

  .my-logo {
    /* @media screen and (min-width: 940px) {
      display: flex;
      justify-content: center;
    } */

    img {
      width: 220px;

      @media screen and (min-width: 940px) {
        width: 274px;
      }
    }
  }

  .my-title {
    color: white;
    font-weight: bold;
    padding: 0px 20px;
    font-size: 1.5rem;
    margin-bottom: 24px;
    margin-top: 24px;
    font-family: Barlow Condensed;

    @media screen and (min-width: 940px) {
      padding: 0;
      margin-top: 40px;
    }
  }

  .my-secondary {
    color: white;
    font-size: 1rem;
    margin-bottom: 24px;
    padding: 0px 20px;

    @media screen and (min-width: 940px) {
      padding: 0;
      font-size: 1.2rem;
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

  .my-badges {
    @media screen and (min-width: 940px) {
      display: flex;
    }

    margin-bottom: 24px;
  }

  .my-desc {
    @media screen and (min-width: 940px) {
      max-width: 500px;
      margin-left: 50px;
    }
  }
`

export default () => {
  const EventDetail = useStaticQuery(graphql`
    query {
      EventDetail: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).EventDetail.childImageSharp.fluid

  return (
    <Section1>
      <div className="container">
        <div className="my-desc">
          <div className="my-logo">
            <img src={KartPassLogo} alt="Kart Pass Logo" />
          </div>

          <div className="my-title">
            Save time, buy your Pit Pass before you get to the track!
          </div>

          <div className="my-badges">
            <AppleBadge />
            <GoogleBadge />
          </div>

          <div className="my-secondary">
            Choose your mobile platform and download FREE!
          </div>
        </div>

        <div className="my-image">
          <Img fluid={EventDetail} alt="Event Detail" />
        </div>
      </div>
    </Section1>
  )
}
