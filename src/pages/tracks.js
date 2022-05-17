import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/tracks/hero"
import Section2 from "../components/tracks/section2"
import Section3 from "../components/tracks/section3"
import Section4 from "../components/tracks/section4"
import Section5 from "../components/tracks/section5"
import Section6 from "../components/tracks/section6"
import Section7 from "../components/tracks/section7"
import Section8 from "../components/tracks/section8"
import Section9 from "../components/tracks/section9"
import Banner from "../components/tracks/banner"

const Tracks = () => {
  return (
    <Layout>
      <SEO title="Tracks" />
      <Hero />
      <Banner
        text={"FREE for Tracks and Event Promoters to Use!"}
        borderBottom={true}
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </Layout>
  )
}

export default Tracks
