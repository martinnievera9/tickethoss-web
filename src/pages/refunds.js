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
        <SEO title="Refund Policy" />
        <Styles>
          <Container>
            <div className="title">Refund Policy</div>
            <p class="paragragh">
              As you know, Pit Passes typically aren’t refundable. Each track
              sets their own refund and exchange policy.
            </p>
            <p class="paragragh">
              When you purchase a pass via the Pit Pay App, you are purchasing
              directly from the track or promoter hosting the event; Pit Pay is
              just the technology that make it possible to purchase in advance.
            </p>
            <p class="paragragh">
              Pit Pay, Inc. does not issue refunds when events are cancelled.
              The event venue or event promoter is responsible for any refunds,
              credits or exchanges.
            </p>
            <p class="paragragh">Pit Pay transaction fees are nonrefundable.</p>
            <p class="paragragh">
              In the event that a track or promoter issues a refund for a
              purchase, allow 7-10 days to receive those funds back on the
              payment method you used to make the purchase, minus the
              transaction fee.
            </p>
            <p class="paragragh">
              Always check the track’s refund policy in advance. You can usually
              find the track’s refund policy in the track’s FAQ section in the
              app or on their website.
            </p>
            <p class="paragragh">
              Tracks and promoters manage this process, so please watch for
              communication from the track or promoter in the “Notifications”
              tab in the app or reach out to them with questions.
            </p>

            <h3 class="sub-title">Event Reschedule / Cancellation Policy </h3>
            <p class="paragragh">
              Tracks and promoters manage their individual policies for Event
              Rescheduling and Event Cancellations
            </p>

            <p class="paragragh">
              Typically, if an event is postponed, your pass is only good for
              the rescheduled date, and if an event is cancelled, your pass may
              be good for the next comparable event scheduled.
            </p>
            <p class="paragragh">
              If you purchase a pass for an event that is rescheduled, the new
              date will appear in the app, your pass will appear in the “My
              Passes” section of the app, and you will show up on the
              participant’s list for that event at the track.
            </p>
            <p class="paragragh">
              Tracks and promoters manage this process, so please watch for
              communication from the track or promoter in the “Notifications”
              tab in the app or reach out to them with questions.
            </p>
            <p class="paragragh">
              As with refunds, always check the track’s
              rescheduling/cancellation policy in advance. You can usually find
              the track’s policy in the track’s FAQ section in the app or on
              their website.
            </p>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
