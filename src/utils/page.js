import React from "react"
import { Link } from "gatsby"
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
        <SEO title="" />
        <Styles>
          <Container>
            <div className="title">Page</div>
          </Container>
        </Styles>
      </Layout>
    )
  }
}


