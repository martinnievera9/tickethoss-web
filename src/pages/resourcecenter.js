import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import PitPayLogo from "../images/pitpaylogoorangeline.png"
import VideoSection from "../components/video-section"
import DownloadSection from "../components/downloads"

const Styles = styled.div`
  padding-top: 40px;
  color: #00001f;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 34px;

    @media (min-width: 768px) {
      width: 25%;
      font-size: 2.5em;
    }
  }

  .title-wrapper {
    display: flex;
    align-items: center;

    img {
      width: 40%;
      display: block;

      @media (min-width: 768px) {
        width: 25%;
        display: block;
      }
    }
  }

  .section-title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 36px;
    font-weight: 600;
    margin-top: 40px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;

    .video-wrapper {
      width: calc(100% - 20px);
      margin: 20px 10px;

      @media (min-width: 600px) {
        width: calc(50% - 20px);
      }

      @media (min-width: 550px) {
        width: calc(33.33% - 20px);
      }
    }
  }
`

const process_videos = [
  {
    id: "420394505",
    title: "Breaking Down the Pit Pay Mobile Pit Pass",
  },
  {
    id: "422936710",
    title: "Scanning the Pit Pay Mobile Pit Pass",
  },
  {
    id: "425131260",
    title: "Checking Participants in Using the",
  },
  {
    id: "430127709",
    title: "Share, Export or Print the Participant List",
  },
]

const promoter_videos = [
  {
    id: "427009133",
    title: "Adding a Staff Member",
  },
  {
    id: "431800456",
    title: "Cancelling or Postponing Events",
  },
  {
    id: "434709293",
    title: "Sending a Push Notification",
  },
]

const payout_videos = [
  {
    id: "420399093",
    title: "Stripe Payments and Pit Pay Payout Procedures",
  },
]

const setup_videos = [
  {
    id: "416079639",
    title: "Adding the Pit Pay Dashboard Icon to Your Home Screen",
  },
  {
    id: "418441036",
    title: "Promoter Onboarding",
  },
  {
    id: "430109265",
    title: "Staff Onboarding Guide",
  },
]

const experience_videos = [
  {
    id: "414045799",
    title: "Pit Pay Teams - Team Purchases",
  },
]

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title="Resources" />
        <Styles>
          <Container>
            <div className="header-wrapper">
              <div className="title-wrapper">
                <img src={PitPayLogo} alt="Pit Pay Logo" />
                <h1 className="title">Resource Center</h1>
              </div>
            </div>
            <div>
              <h2 className="section-title">VIDEOS</h2>
              <VideoSection videos={process_videos} title="Primary Processes" />
              <VideoSection
                videos={promoter_videos}
                title="Promoter Functions"
              />
              <VideoSection videos={payout_videos} title="Payouts" />
              <VideoSection videos={setup_videos} title="Setup" />
              <VideoSection videos={experience_videos} title="Experience" />
            </div>
            <div>
              <h2 className="section-title">DOWNLOADS</h2>
              <DownloadSection />
            </div>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
