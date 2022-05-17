import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import UserIcon from "../images/UserIcon.svg"

const Styles = styled.div`
  background: #00001f;
  color: white;
  position: relative;
  padding: 42px 0px;

  @media screen and (min-width: 940px) {
    padding: 32px 0px;
  }

  .my-footer {
    display: block;
    background: #00001f;
    max-width: 740px;
    margin: 0 auto;

    .item {
      background: #00001f;
      text-align: center;
      margin-bottom: 14px;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      font-family: Barlow Condensed;
      span {
        cursor: pointer;
      }

      display: inline-block;
      padding: 0px 10px;
      width: 100%;

      @media screen and (min-width: 940px) {
        width: 25%;
      }
    }
  }
`
export default () => (
  <Styles>
    <div className="my-footer">
      <a href="https://dashboard.tickethoss.com" className="item">
        <span>
          <img
            src={UserIcon}
            alt="User Icon"
            style={{ marginRight: 12, position: "relative", top: 2 }}
          />
          Dashboard
        </span>
      </a>

      <Link to="/privacy" className="item">
        <span>Privacy</span>
      </Link>

      <Link to="/terms" className="item">
        <span>Terms</span>
      </Link>

      <a href="https://help.tickethoss.com" className="item">
        <span>Support</span>
      </a>
    </div>
  </Styles>
)
