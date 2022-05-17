import React from "react"
import styled from "styled-components"
import StripeLogo from "../../images/stripe-logo.png"
import Mastercard from "../../images/Mastercard.png"
import AMEX from "../../images/AMEX.png"
import DiscoverLogo from "../../images/discover_logo.png"
import ApplePay from "../../images/Apple_Pay.png"
import GooglePay from "../../images/Google_Pay.png"
import Visa from "../../images/visa.png"
import Banner from "./banner"

const Section = styled.div`
  background: #fff;
  color: white;
  position: relative;
  padding: 0 20px 38px 20px;
  text-align: center;
  max-width: 780px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 940px) {
    padding: 0 20px 68px 20px;
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

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  color: #00001f;
  list-style: disc;
  margin: 20px 20px 30px;

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
    width: 650px;
    margin: 40px auto;

    li {
      font-size: 42px;
      text-align: left;
      font-family: Barlow Condensed;
      font-weight: 600;
    }
  }
`

const FeeTitle = styled.span`
  font-family: Barlow Condensed;
  font-weight: 600;
  font-size: 26px;
  text-align: center;
  color: #00001f;
  margin: 0 auto 20px;
  display: block;

  @media screen and (min-width: 940px) {
    font-size: 30px;
  }
`

const PriceList = styled.ul`
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #00001f;

  @media screen and (min-width: 940px) {
    display: flex;
    justify-content: space-between;
  }
`

const PriceTitle = styled.p`
  font-family: Barlow Condensed;
  font-weight: 600;
  color: #00001f;
  text-align: center;
  font-size: 25px;
  margin: 0;

  @media screen and (min-width: 940px) {
    font-size: 30px;
  }
`

const Price = styled.p`
  font-family: Barlow Condensed;
  font-weight: 700;
  text-align: center;
  font-size: 50px;
  text-shadow: 2px 2px 20px #c4c4c4;
  display: flex;
  color: #c0ff02;
  line-height: 1.2;
  justify-content: center;
  margin-bottom: 20px;

  span {
    font-family: Barlow Condensed;
    font-weight: 700;
    color: #c0ff02;
    text-align: center;
    font-size: 38px;
    display: inline-block;
    margin-right: 5px;
  }

  @media screen and (min-width: 940px) {
    font-size: 70px;

    span {
      font-size: 43px;
    }
  }
`
const Stripe = styled.p`
  font-family: Barlow Condensed;
  font-weight: 700;
  color: #00001f;
  text-align: center;
  font-size: 24px;
  margin: 40px auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    margin-left: 20px;

    @media screen and (min-width: 940px) {
      width: 140px;
    }
  }

  @media screen and (min-width: 940px) {
    font-size: 34px;
  }
`

const CreditCardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  li {
    margin: 10px;
  }
`

const CreditCardFees = styled.p`
  font-family: Barlow Condensed;
  font-weight: 600;
  color: #000;
  text-align: center;
  font-size: 26px;
  margin-top: 40px;

  @media screen and (min-width: 940px) {
    font-size: 36px;
  }
`

export default () => {
  return (
    <div>
      <Banner text={"How do the payments work?"} />
      <Section>
        <ListWrapper>
          <List>
            <li>You Receive 100% of Pass Price</li>
            <li>You Get Paid Quickly via Stripe</li>
            <li>Participants Pay Transaction Fee</li>
          </List>
        </ListWrapper>
        <FeeTitle>Typical Fee Structure</FeeTitle>
        <PriceList>
          <li style={{ display: "flex", flexDirection: "column" }}>
            <PriceTitle>Pit Pass Price</PriceTitle>
            <Price>
              <span>$</span>30.00
            </Price>
          </li>

          <li style={{ display: "flex", flexDirection: "column" }}>
            <PriceTitle>Transaction Fee</PriceTitle>
            <Price>
              <span>$</span>3.75
            </Price>
          </li>

          <li style={{ display: "flex", flexDirection: "column" }}>
            <PriceTitle>Track Receives</PriceTitle>
            <Price>
              <span>$</span>30.00
            </Price>
          </li>
        </PriceList>

        <Stripe>
          Payment Processing via
          <img src={StripeLogo} alt="Stripe" />
        </Stripe>

        <CreditCardList>
          <li className="visa">
            <img src={Visa} alt="Visa" style={{ width: "80px" }} />
          </li>
          <li className="mastercard">
            <img src={Mastercard} alt="Mastercard" style={{ width: "60px" }} />
          </li>
          <li className="discover">
            <img src={DiscoverLogo} alt="Discover" style={{ width: "125px" }} />
          </li>
          <li className="amex">
            <img src={AMEX} alt="AMEX" style={{ width: "65px" }} />
          </li>
          <li className="googleplay">
            <img src={GooglePay} alt="Google Pay" style={{ width: "80px" }} />
          </li>
          <li className="appleplay">
            <img src={ApplePay} alt="Apple Pay" style={{ width: "80px" }} />
          </li>
        </CreditCardList>

        <CreditCardFees>You Incur NO Credit Card Fees!</CreditCardFees>
      </Section>
    </div>
  )
}
