import React from "react"
import Layout from "../components/layout"
import Cookies from "../components/Cookies"
import SEO from "../components/seo"

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout margin={"50px"}>
        <SEO title="Enable Cookies" />
        <Cookies />
      </Layout>
    )
  }
}
