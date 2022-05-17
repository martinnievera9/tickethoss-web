import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import AppleBadge from "./AppleBadge"
import GoogleBadge from "./GoogleBadge"
import { Icon } from "antd"
import LastSlide from "./Section6B"

// import Swiper from "swiper"
// import "../../node_modules/swiper/css/swiper.css"
import Carousel from "nuka-carousel"

const MyRightButton = styled.div`
  background: #00001f;
  border-radius: 50%;
  padding: 12px 16px;
  color: #fff;
  text-align: center;
  padding-top: 14px;
  padding-left: 20px;
  font-size: 25px;
  padding-bottom: 8px;
  margin: 9px;
  opacity: 0.95;
  cursor: pointer;
`

const MyLeftButton = styled.div`
  background: #00001f;
  border-radius: 50%;
  padding: 12px 16px;
  color: #fff;
  text-align: center;
  padding-top: 14px;
  padding-right: 20px;
  opacity: 0.95;
  font-size: 25px;
  padding-bottom: 8px;
  margin: 9px;
  cursor: pointer;
`

const Section3 = styled.div`
  color: #00001f;
  position: relative;
  padding: 50px 0;
  height: auto;

  @media screen and (min-width: 940px) {
    height: 600px;
    overflow: hidden;
    padding: 0;
  }

  .my-title {
    font-size: 2rem;
    margin-bottom: 14px;
    font-family: Barlow Condensed;
    font-weight: 700;

    @media screen and (min-width: 940px) {
      img {
        width: 60%;
      }
    }
  }

  .my-secondary {
    font-size: 1.25rem;
    margin-bottom: 24px;
    color: #000;
  }

  .my-badges {
    margin-bottom: 14px;

    div {
      width: 189px;
    }
  }

  .paging-item .paging-dot {
    width: 30px !important;
    height: 7px !important;
    border-radius: 4px !important;
    background-color: #c0ff02 !important;
  }

  .paging-item button {
    opacity: 1 !important;
  }

  .slider-control-bottomcenter {
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: -40px !important;
  }

  .slide {
    margin: 0 20px;

    .desc {
      text-align: center;
    }

    @media screen and (min-width: 940px) {
      display: flex;
      align-items: center;
      height: 600px;

      .desc {
        text-align: left;
        width: 57%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .desc-wrapper {
        width: 60%;
      }

      .my-image {
        width: 40%;
      }

      .last-slide-desc {
        padding: 0 20px;
      }

      .last-slide-image {
        margin-left: 20px;
      }
    }

    .my-image {
      display: flex;
      justify-content: center;

      @media screen and (min-width: 940px) {
        justify-content: flex-start;
      }
    }

    .slider-image {
      width: 45%;

      @media screen and (min-width: 940px) {
        width: 40%;
      }
    }
  }

  .swiper-container {
    width: 100%;
    min-height: 620px;
  }

  .slider-control-bottomcenter {
    @media screen and (min-width: 940px) {
      display: none;
    }

    .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }

  .slider-control-centerleft {
    display: none;

    @media screen and (min-width: 940px) {
      display: block;
    }
  }

  .slider-control-centerright {
    display: none;

    @media screen and (min-width: 940px) {
      display: block;
    }
  }

  .paging-item.active {
    .paging-dot {
      background: #00001f !important;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      Slide1Img: file(relativePath: { eq: "Slide1ImgTracks.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Slide2Img: file(relativePath: { eq: "Slide2Img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Slide3Img: file(relativePath: { eq: "Slide3ImgEvents.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Slide4Img: file(relativePath: { eq: "Slide4Img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Slide5Img: file(relativePath: { eq: "Slide5Img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Slide6Img: file(relativePath: { eq: "Slide6Img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let slides = [
    {
      title: "Find Your Favorite Tracks",
      secondary:
        "Keep your go to tracks at the top by favoriting them, and discover new tracks when traveling.",
      img: data.Slide1Img.childImageSharp.fluid,
      offset: true,
      alt: "Slide1Img",
    },
    {
      title: "Find Your Favorite Series",
      secondary:
        "Star your favorite Series, to add them to your favorites and never miss an event!",
      img: data.Slide2Img.childImageSharp.fluid,
      offset: true,
      alt: "Slide2Img",
      buttons: false,
    },
    {
      title: "Events are Easy to Find",
      secondary:
        "See events for your favorite series, or at your favorite tracks quickly, or discover with easy event filtering.",
      img: data.Slide3Img.childImageSharp.fluid,
      alt: "Slide3Img",
    },

    {
      title: "Sign the Release Agreement",
      secondary:
        "The RELEASE and WAIVER of LIABILITY AGREEMENT is easy to read and electronically sign with a few clicks.",
      img: data.Slide4Img.childImageSharp.fluid,
      alt: "Slide4Img",
      shrink: "shrink",
    },
    {
      title: "Purchase Your Pit Pass",
      secondary:
        "Your credit or debit card is securely stored, allowing you to select your pass, and complete your purchase in just a couple of clicks.",
      img: data.Slide5Img.childImageSharp.fluid,
      alt: "Slide5Img",
      shrink: "shrink",
    },
    {
      title: "Mobile Pit Pass",
      secondary:
        "Your Mobile Pit Passes are easy to find under My Passes in the App.",
      img: data.Slide6Img.childImageSharp.fluid,
      alt: "Slide6Img",
      shrink: "shrink",
    },
  ]

  function slide(el) {
    let buttons

    if (el.buttons) {
      buttons = (
        <div className="my-badges">
          <AppleBadge />
          <GoogleBadge />
        </div>
      )
    }
    return (
      <div key={el.alt} className="slide">
        <div className="desc">
          <div className="desc-wrapper">
            <div className="my-title">{el.title}</div>

            <div className="my-secondary">{el.secondary}</div>

            {buttons}
          </div>
        </div>

        <div className={"my-image "}>
          <Img fluid={el.img} alt={el.alt} className="slider-image" />
        </div>
      </div>
    )
  }

  return (
    <Section3>
      <Carousel
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <MyLeftButton onClick={previousSlide}>
            <Icon type="left" />
            <i className="fa fa-arrow-left" />
          </MyLeftButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <MyRightButton onClick={nextSlide}>
            <Icon type="right" />
          </MyRightButton>
        )}
        easing="easeCubicOut"
      >
        {slides.map(slide)}
        <div key={"last"}>
          <LastSlide />
        </div>
      </Carousel>
    </Section3>
  )
}
