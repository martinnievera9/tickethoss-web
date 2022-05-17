import React from "react"
import styled from "styled-components"
import Banner from "./banner"

const Section = styled.div`
  background: #c0ff02;
  color: white;
  position: relative;
  padding: 20px;
  text-align: center;
  max-width: 880px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 940px) {
    padding: 40px 20px 68px 20px;
  }

  .container {
    max-width: 880px;
    display: block;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const List = styled.ul`
  color: #00001f;
  list-style: disc;
  margin: 0 20px 0;

  li {
    font-size: 25px;
    text-align: left;
    font-family: Barlow Condensed;
    font-weight: 500;
    color: #fff;
    line-height: 1.3;
  }

  @media screen and (min-width: 940px) {
    list-style-position: inside;
    width: 880px;
    margin: 0 auto 50px;

    li {
      font-size: 42px;
      text-align: left;
      font-family: Barlow Condensed;
      font-weight: 500;
    }
  }
`

// const Title = styled.p`
//   font-family: Barlow Condensed;
//   font-weight: 500;
//   color: #00001f;
//   text-align: center;
//   font-size: 40px;
//   margin-bottom: 30px;

//   @media screen and (min-width: 940px) {
//     font-size: 55px;
//   }
// `

const Text = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;

  margin-top: 20px;

  @media screen and (min-width: 940px) {
    font-size: 30px;
  }
`

export default () => {
  return (
    <div style={{ background: "#C0FF02" }}>
      <Banner text={"What else does Pit Pay do?"} />

      <Section>
        <Text style={{ marginTop: 0 }}>Additional Features</Text>
        <List>
          <li>Generate Push Notifications to Participants</li>
          <li>Use Promo Codes for Sponsors and VIP Guests</li>
          <li>Sends Marketing Emails to Participants</li>
        </List>

        <Text>Additional Benefits</Text>
        <List>
          <li>Receive Participant Data for Marketing</li>
          <li>Reduce Risk with Pit Pay Waiver Storage</li>
          <li>Enable Participants to Attend & Compete</li>
        </List>
      </Section>
    </div>
  )
}
