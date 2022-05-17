/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Location } from "@reach/router"
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import KartPassImage from "../images/ticketHossLogo.svg"

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image
  return (
    <Location>
      {({ location }) => (
        <div>
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title ? title : "Kart Pass powered by Pit Pay"}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)}
          />
          {location.pathname !== "/minor-waiver-signing/" && (
            <Helmet>
              <meta name="apple-itunes-app" content="app-id=1605673660" />
              <meta
                name="google-play-app"
                content="app-id=com.tickethoss.tickethoss"
              />
            </Helmet>
          )}
          <Helmet>
            <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
            <link rel="android-touch-icon" href="/icons/icon-512x512.png" />
          </Helmet>
        </div>
      )}
    </Location>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Mobile Pit Pass App`,
  image: KartPassImage,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
