import React from "react"
import styled from "styled-components"
import Banner from "./banner"

const Section = styled.div`
  background: #fff;
  color: white;
  position: relative;
  padding: 20px;
  text-align: center;
  max-width: 980px;
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

const Title = styled.p`
  font-family: Barlow Condensed;
  font-weight: 600;
  color: #00001f;
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;
  line-height: 1.3;

  @media screen and (min-width: 940px) {
    font-size: 48px;
    margin-bottom: 60px;
  }
`

const Text = styled.p`
  font-family: Barlow Condensed;
  color: #00001f;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 20px;

  @media screen and (min-width: 940px) {
    font-size: 35px;
  }
`

export default () => {
  return (
    <div>
      <Banner text={"Marketing Fund"} />

      <Section>
        <Title>
          You Receive an Additional 1% of Total Yearly Transactions{" "}
        </Title>

        <Text>
          Our unique marketing program enables Pit Pay to give back to your
          track or events. 1% of your total yearly transactions goes into the
          Pit Pay Marketing Fund. The fund grows all season as your participants
          use the Pit Pay app.
        </Text>

        <Text>
          At season’s end, we reach out, discuss a marketing asset for the
          following season, and pay you your marketing fund balance.
        </Text>
      </Section>
    </div>
  )
}
