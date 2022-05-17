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
      max-width: 530px;
      margin-left: 50px;
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

const Text = styled.ul`
  font-size: 30px;
  font-weight: 500;
  font-family: Barlow Condensed;
  color: #fff;

  @media screen and (min-width: 940px) {
    font-size: 40px;
    line-height: 1.2;
  }
`

const LargeText = styled.ul`
  font-size: 35px;
  font-weight: 600;
  font-family: Barlow Condensed;
  color: #fff;
  margin-top: 40px;

  @media screen and (min-width: 940px) {
    font-size: 50px;
  }
`

export default () => {
  const AdminScreen = useStaticQuery(graphql`
    query {
      AdminScreen: file(relativePath: { eq: "admin-screen.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).AdminScreen.childImageSharp.fluid

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
          <Img fluid={AdminScreen} alt="Admin Screen" />
        </div>

        <div className="my-desc">
          <Title> No Special Equipment Needed.</Title>
          <Text>Scan and Check-in Participants</Text>
          <Text>with the Pit Pay Dashboard</Text>
          <Text>from any connected</Text>
          <Text>Smart Phone, Tablet or Laptop.</Text>
          {/* <Text>
            Scan and Check-in Participants with the Pit Pay Admin Platform{" "}
            <Text>from any connected</Text> Smart Phone, Tablet or Laptop.
          </Text> */}
          <LargeText>Super Easy to Use!</LargeText>
        </div>
      </div>
    </Section>
  )
}
