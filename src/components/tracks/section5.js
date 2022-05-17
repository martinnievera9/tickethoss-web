import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Section = styled.div`
  background: #c0ff02;
  color: white;
  position: relative;
  text-align: center;
  padding: 20px;

  @media screen and (min-width: 940px) {
    padding: 68px 20px;

    .container {
      max-width: 980px;
      display: block;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .my-image {
    .gatsby-image-wrapper {
      width: 250px;
      display: block;
      margin: 0 auto;

      @media screen and (min-width: 940px) {
        width: 310px;
        margin: 0;
      }
    }
  }

  .my-desc {
    @media screen and (min-width: 940px) {
      max-width: 620px;
      margin-left: 30px;
    }
  }
`

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 24px;
  font-family: Barlow Condensed;
  color: #fff;
  margin-top: 20px;

  @media screen and (min-width: 940px) {
    margin-top: 0;
    font-size: 50px;
  }
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
  font-family: Barlow Condensed;
  color: #fff;
  line-height: 1.2;

  @media screen and (min-width: 940px) {
    font-size: 32px;
  }
`

export default () => {
  const WaiverScreen = useStaticQuery(graphql`
    query {
      WaiverScreen: file(relativePath: { eq: "waiver-screen.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).WaiverScreen.childImageSharp.fluid

  return (
    <Section
      style={{
        borderTop: "7px",
        borderTopColor: "#e6e5e5",
        borderTopStyle: "solid",
      }}
    >
      <div className="container">
        <div className="my-image">
          <Img fluid={WaiverScreen} alt="Event Detail" />
        </div>

        <div className="my-desc">
          <Title> The Waiver and Release Agreement</Title>
          <Text>
            Pit Pay uses the documents required by your insurance company and
            securely stores the executed documents for future access.
          </Text>
          <Text>
            When the participant executes the Waiver and Release Agreement, a
            copy is immediately emailed to them and Pit Pay receives a copy to
            be archived.
          </Text>
        </div>
      </div>
    </Section>
  )
}
