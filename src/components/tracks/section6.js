import React from "react"
import styled from "styled-components"
import Banner from "./banner"

const Section = styled.div`
  background: #fff;
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
  margin: 0 20px 40px;
  line-height: 1.3;

  li {
    font-size: 25px;
    text-align: left;
    font-family: Barlow Condensed;
    font-weight: 500;
    color: #00001f;
  }

  @media screen and (min-width: 940px) {
    list-style-position: inside;
    width: 700px;
    margin: 0 auto 50px;

    li {
      font-size: 42px;
      text-align: left;
      font-family: Barlow Condensed;
      font-weight: 500;
    }
  }
`

const Title = styled.p`
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #00001f;
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;
  line-height: 1.3;

  @media screen and (min-width: 940px) {
    font-size: 50px;
  }
`

const Text = styled.p`
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #00001f;
  text-align: center;
  font-size: 25px;

  @media screen and (min-width: 940px) {
    font-size: 44px;
  }
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default () => {
  return (
    <div>
      <Banner text={"Set Up and Support"} />

      <Section>
        <Title>White-Glove Support from the Pit Pay team.</Title>
        <ListWrapper>
          <List>
            <li>We Create Your Track Profile in the App</li>
            <li>We Enter Your Events into the App</li>
            <li>We Set Up and Manage the App for You</li>
            <li>We Train and Support You for Success</li>
          </List>
        </ListWrapper>

        <Text>Setup is quick!</Text>
        <Text>You don’t have to be “Tech Savvy.”</Text>
        <Text>Pit Pay is Super Easy to Use!</Text>
      </Section>
    </div>
  )
}
