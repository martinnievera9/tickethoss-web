import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Collapsible from "react-collapsible"
import Arrow from "../images/arrow-right.svg"

const Styles = styled.div`
  padding-top: 40px;
  color: #00001f;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 2.5em;
  }

  .item {
    border-bottom: 1px solid #d8d8d8;
    padding: 20px 0;

    @media screen and (min-width: 940px) {
      padding: 20px;
    }
  }
  .question-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    cursor: pointer;
  }
  .question {
    font-family: "Roboto";
    font-weight: 500;
    color: #00001f;
    font-size: 22px;
    line-height: 32px;
    display: inline-block;
  }

  .answer {
    font-family: "Roboto";
    font-weight: 500;
    color: #727279;
    font-size: 20px;
    line-height: 32px;
    padding-left: 20;
    padding-bottom: 20;
    padding-right: 20;
    margin-top: 20px;
    a {
      color: #00001f;
    }
  }
`

const faqs = [
  {
    question: "What is Pit Pay?",
    answer:
      "Pit Pay™️ is the only Mobile Pit Pass app for the motorsports industry. At Pit Pay, we are committed to providing you with a simple, hassle-free experience in the app and at the track. Hundreds of tracks, thousands of events...quickly purchase your pit passes in advance using the app. It's easy - once you're set up, all it takes is a few clicks and you're ready to go. At the track, go to the Pit Pay window, present your mobile pit pass and receive your armband or credential.",
  },
  {
    question: "How do I download the app and what does it cost?",
    answer: `The app is free to download from the Apple App <a href="https://getPitPay.com/1gq">https://getPitPay.com/1gq</a> and Google Play <a href="https://getPitPay.com/axc">https://getPitPay.com/axc</a> stores.   There will be a small convenience fee associated with each transaction.`,
  },
  {
    question: "Why does Pit Pay ask me to enable location services?",
    answer:
      "Pit Pay uses your location to show you the tracks and events closest to you to help ensure that you have the best in-app experience possible. With hundreds of tracks in the app, filtering by your location can help you find tracks in your area quickly and easily.",
  },
  {
    question: "Why does Pit Pay scan my driver’s license?",
    answer:
      "Pit Pay uses the ID scan feature to get your account set up quickly, as well as to verify your age and identity.",
  },
  {
    question:
      "I have a racetrack and want to discuss partnering with Pit Pay, what is the best way to get in touch?",
    answer: `Email us at <a href="mailto:partners@PitPay.com">partners@PitPay.com</a>
   or call <a href="phone: (855) 748-7291"> (855) 748-7291</a>`,
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
        <SEO title="FAQ" />
        <Styles>
          <Container>
            <div className="title">FAQ</div>
            {faqs.map(item => (
              <div className="item">
                <Collapsible
                  trigger={
                    <div className="question-wrapper">
                      <span className="question">{item.question}</span>
                      <img
                        src={Arrow}
                        alt="Faq Button"
                        style={{
                          width: 18,
                          height: 18,
                          position: "relative",
                        }}
                      />
                    </div>
                  }
                >
                  <div
                    className="answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />

                  {/* <p className="answer" dangerouslySetInnerHTML={item.answer)}/> */}
                </Collapsible>
              </div>
            ))}
          </Container>
        </Styles>
      </Layout>
    )
  }
}
