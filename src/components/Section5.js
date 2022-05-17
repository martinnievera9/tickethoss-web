import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Section5 = styled.div`
  background: #00001f;
  color: white;
  position: relative;
  padding: 68px 0px;
  padding-bottom: 58px;
  text-align: center;

  @media screen and (min-width: 940px) {
    text-align: left;
  }

  .container {
    @media screen and (min-width: 940px) {
      max-width: 880px;
      display: block;
      margin: 0 auto;
    }
  }

  .my-title {
    color: white;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 24px;

    font-family: Barlow Condensed;

    @media screen and (min-width: 940px) {
      width: 200px;
      display: inline-block;
      float: left;
      margin-right: 24px;
      position: relative;
      top: 24px;
    }
  }

  .partner {
    max-width: 275px;
    display: block;
    margin: 0 auto;
    margin-bottom: 34px;
  }

  .sponsors {
    margin: 0 auto;

    .partner {
      justify-content: center;
      width: 140px;
    }

    @media screen and (min-width: 940px) {
      max-width: 800px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      grid-gap: 34px;

      .partner {
        display: inline-block;
        justify-content: center;
        width: 200px;

        margin-right: 34px;

        &.needs-offset {
          position: relative;
          top: 32px;
        }
      }
    }
  }
`
export default () => {
  const data = useStaticQuery(graphql`
    {
      Nos: file(relativePath: { eq: "Nos.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      MortonBuildings: file(relativePath: { eq: "MortonBuildings.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      SuperDirtcarSeries: file(relativePath: { eq: "SuperDirtcarSeries.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Nos = data.Nos.childImageSharp.fluid
  const MortonBuildings = data.MortonBuildings.childImageSharp.fluid
  const SuperDirtcarSeries = data.SuperDirtcarSeries.childImageSharp.fluid
  return (
    <Section5>
      <div className="container">
        <div className="my-title">Just a few of our partners</div>

        <div className="sponsors">
          <div className="partner">
            <Img fluid={Nos} alt="Nos Energy Drink Sponsor" />
          </div>

          <div className="partner">
            <Img fluid={MortonBuildings} alt="Morton Buildings Sponsor" />
          </div>

          <div className="partner needs-offset">
            <Img
              fluid={SuperDirtcarSeries}
              alt="Super Dirtcar Series Sponsor"
            />
          </div>
        </div>
      </div>
    </Section5>
  )
}
