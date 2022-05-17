import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section6 from "../components/Section6"
import Section7 from "../components/Section7"
import SmartBanner from "react-smartbanner"
import "../../node_modules/react-smartbanner/dist/main.css"

const IndexPage = () => {
  return (
    <Layout maxHeight={true}>
      <SmartBanner title={"Ticket Hoss"} />
      <SEO title="Ticket Hoss" />

      {/* <Section1 /> */}
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
    </Layout>
  )
}

export default IndexPage
