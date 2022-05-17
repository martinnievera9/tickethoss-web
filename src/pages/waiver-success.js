import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Styles = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 2.5em;

    strong {
      font-weight: 800;
    }
  }

  .section-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 22px;
  }

  .sub-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 26px;
    text-decoration: underline;
  }

  .paragragh {
    margin-bottom: 10px;
  }

  ul {
    list-style: disc;
    padding-left: 15px;
    margin-left: 15px;
  }
`

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout margin={"50px"}>
        <SEO title="Waiver Success" />
        <Styles>
          <Container>
            <div className="title">
              <strong>Success!</strong> Your signature has been captured
              successfully
            </div>
            <p class="paragragh">
              If there is an orange bar across the pass date & a blurred QR code
              on the Minor's Pass in the App, the Agreement is still waiting on
              the other party's signature (Minor OR Parent/Guardian #2).
            </p>
            <p class="paragragh">
              The links to the Agreement are only good for six hours. To resend
              a new Agreement link to all parties, tap the orange bar on the
              Minor's Pass. You can find the Minor Pass in the "My Passes"
              section of the Pass Purchaser's App.
            </p>
            <p class="paragragh">
              Once all parties have signed the Agreement, the orange bar will be
              removed and the Minor Pass will be scannable.
            </p>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
