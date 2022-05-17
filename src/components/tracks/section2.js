import React from "react"
import styled from "styled-components"

const Section = styled.div`
  background: #fff;
  color: white;
  position: relative;
  padding: 20px;
  text-align: center;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 940px) {
    padding: 68px 20px;
  }
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 24px;
  font-family: Barlow Condensed;
  color: #00001f;

  @media screen and (min-width: 940px) {
    font-size: 50px;
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
    color: #00001f;
    line-height: 1.3;
  }

  @media screen and (min-width: 940px) {
    list-style-position: inside;
    margin: 0 0 40px 0;

    li {
      font-size: 42px;
      text-align: left;
      font-family: Barlow Condensed;
      font-weight: 500;
    }
  }
`

export default () => {
  return (
    <Section>
      <Title>How will Pit Pay Help?</Title>
      <List>
        <li>Create a Better Experience for Participants</li>
        <li>Get Your Participants in the Track Faster</li>
        <li>Sell Pit Passes in Advance</li>
        <li>Reduce Manpower at Events</li>
        <li>Fewer Employees Handling Cash</li>
        <li>Allows Participants to Pay How They Want</li>
        <li>Collect Data on Participants</li>
        <li>Secure Long-Term Waiver Storage</li>
      </List>
    </Section>
  )
}
