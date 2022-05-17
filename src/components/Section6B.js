import React from "react"
import PitPayLine from "../images/PitPayLine.svg"
import PitPayWindow from "../images/PitPayWindow.svg"

export default () => (
  <div key={7} className="slide">
    <div className="desc">
      <div className="desc-wrapper last-slide-desc">
        <div className="my-title">
          <img src={PitPayWindow} alt="Pit Pay Window" />
        </div>

        <div className="my-secondary">
          When you go to the track, go right to the Pit Pay Window, Show your
          Mobile Pit Pass, and get your wristband. <br /> Yep, It's that easy!
        </div>
      </div>
    </div>

    <div className="my-image last-slide-image">
      <img src={PitPayLine} alt="Pit Pay Line" className="my-line-image" />
    </div>
  </div>
  // <Styles>
  //   <div className="container">
  //     <div className="line-wrapper">
  //       <div className="my-box">
  //         <img
  //           src={PitPayWindow}
  //           alt="Pit Pay Window"
  //           style={{ marginBottom: 12 }}
  //         />

  //         <div className="my-text">
  //           When you go to the track, go right to the Pit Pay Window, Show your
  //           Mobile Pit Pass, and get your wristband. Yep, It's that easy!
  //         </div>
  //       </div>

  //       <div className="line-image-wrapper">
  //         <img src={PitPayLine} alt="Pit Pay Line" className="my-line-image" />
  //       </div>
  //     </div>
  //   </div>
  // </Styles>
)
