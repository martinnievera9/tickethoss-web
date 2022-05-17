import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Badge = styled.div`
  width: 180px;
  display: block;
  margin: 0 auto;
  margin-bottom: 14px;
  display: inline-block;
  margin: 0px 7px;
  cursor: pointer;

  @media screen and (min-width: 940px) {
    width: 220px;
  }
`
export default () => {
  const GoogleBadge = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "GoogleBadge.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).file.childImageSharp.fluid

  return (
    <Badge>
      <a
        href="https://play.google.com/store/apps/details?id=com.tickethoss.tickethoss"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={GoogleBadge} alt="Google Download Icon" loading="eager" />
      </a>
    </Badge>
  )
}
