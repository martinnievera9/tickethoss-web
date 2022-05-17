import React from "react"
import styled from "styled-components"

const Separator = styled.div`
  background-color: #00001f;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: Barlow Condensed;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    color: #fff;
    /* line-height: 1.2; */
    display: block;
    padding: 5px 0;
  }

  @media screen and (min-width: 940px) {
    h3 {
      padding: 20px 0;
      font-size: 50px;
      /* line-height: 40px; */
    }
  }
`

export default ({ text, borderBottom = false }) => {
  return borderBottom ? (
    <Separator
      style={{
        borderBottom: "7px",
        borderBottomColor: "#e6e5e5",
        borderBottomStyle: "solid",
      }}
    >
      <h3>{text}</h3>
    </Separator>
  ) : (
    <Separator
      style={{
        borderTop: "7px",
        borderTopColor: "#e6e5e5",
        borderTopStyle: "solid",
      }}
    >
      <h3>{text}</h3>
    </Separator>
  )
}
