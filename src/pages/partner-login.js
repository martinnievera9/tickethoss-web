import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Styles = styled.div``

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title="Dashboard" />
        <Styles>
          <Container>
            <div className="title">Dashboard</div>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
