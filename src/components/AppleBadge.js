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
  const AppleBadge = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "AppleBadge.png" }) {
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
        href="https://apps.apple.com/us/app/pit-pay/id1605673660?ls=1"
        target="_blank"
        rel="noreferrer"
      >
        <Img fluid={AppleBadge} alt="Apple Download Icon" loading="eager" />
      </a>
    </Badge>
  )
}
