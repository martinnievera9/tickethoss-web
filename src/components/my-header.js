import React from "react"
import Twitter from "../images/twitter-white.svg"
import Instagram from "../images/instagram-white.svg"
import Facebook from "../images/facebook-white.svg"
import LinkedIn from "../images/linkedin-white.svg"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"

const Styles = styled.div`
    .header {
      position: fixed;
      background: #00001F;
      width 100%;
      padding: 22px;
      z-index: 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .login-button {
      position: relative;
      font-size: 22px;
      font-family: Barlow Condensed;
      color: #fff;
      margin-right: 5px;
      margin-bottom: 3px;

      @media screen and (min-width: 940px) {
        margin-right: 8px;
        }

      &:hover {
        color: #00001F;
      }
    }

    .socials {
      /* float: right;
      margin-right: 39px; */
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 30px;
        margin: 0px 5px;
        cursor: pointer;

        @media screen and (min-width: 940px) {
          margin: 0px 8px;
        }
      }
    }

    .sidebar { 
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      background: #FA4616;
      width: 0px;
      z-index: 40;
      transition: all 0.2s ease;

      &.active {
        width: 55vw;

        @media screen and (min-width: 940px) {
          width: 20vw;
        }

        .links {
          display: grid;
        }
      }

      .links {
        display: none;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        padding-top: 100px;

        a {
          font-size: 22px;
          padding: 12px 40px;
          color: white;
          display: block;
          width: 100%;
          font-family: Barlow Condensed;
          font-weight: 500;

          &:hover {
            background: #00001F;
          }
        }
      }
    }
    
    .hamburger {
      z-index: 1000;
      cursor: pointer;

    }

    .background {
      transition: all 0.1s ease;
      z-index: -1px;

      &.active {
        position: fixed;
        z-index: 39;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #7f7f82fc;

        
      }
    }
`

export default class Header extends React.Component {
  constructor(props) {
    super()
    this.state = {}
    this.state.open = false
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    let { open } = this.state
    return (
      <Styles>
        <div className="header" style={{ height: this.props.height }}>
          <div className="hamburger">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.toggleMenu.bind(this)}
              width={20}
              height={14}
              strokeWidth={3}
              rotate={0}
              color="#fff"
              borderRadius={4}
              animationDuration={0.1}
              style={{ position: "absolute" }}
            />
          </div>
          <div className="socials">
            <a
              href="https://www.facebook.com/TicketHoss/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="Facebook Icon" />
            </a>
            <a
              href="https://www.instagram.com/tickethoss/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram Icon" />
            </a>
            <a
              href="https://twitter.com/tickethoss"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Twitter Icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/pitpay/about/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>

        <div
          role="menu"
          className={`background ${open ? " active" : ""}`}
          onClick={this.toggleMenu.bind(this)}
          onKeyDown={event => {
            // insert your preferred method for detecting the keypress
            if (event.keycode === 13) this.toggleMenu.bind(this)
          }}
        ></div>

        <div className={`sidebar ${open ? " active" : ""}`}>
          <div
            className="links"
            onClick={() =>
              this.setState({
                open: false,
              })
            }
          >
            <div>
              <Link to="/">Home</Link>
            </div>
            {/* <div>
              <Link to="/tracks">Tracks</Link>
            </div> */}
            {/* <div>
              <Link to="/faq">FAQ</Link>
            </div> */}
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <a
              href="https://help.tickethoss.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>Support</div>
            </a>
            {/* <div>
              <Link to="/news">News</Link>
            </div> */}
            <div>
              <Link to="/privacy">Privacy</Link>
            </div>
            <div>
              <Link to="/terms">Terms</Link>
            </div>
            <a
              href="https://dashboard.tickethoss.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>Dashboard</div>
            </a>
          </div>
        </div>
      </Styles>
    )
  }
}
