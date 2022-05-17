import { Location } from "@reach/router"
import React from "react"
import "./layout.scss"

import Header from "../components/my-header"

const Layout = ({ children, margin = 0, maxHeight = false }) => {
  return (
    <Location>
      {({ location }) => {
        const isWaiverSigningPage =
          location.pathname === "/minor-waiver-signing/"
        const height = isWaiverSigningPage ? 0 : 60
        return (
          <div style={{ height: "100%" }}>
            {!isWaiverSigningPage && <Header height={height} />}
            <div style={{ height }} />
            <main
              style={
                maxHeight
                  ? { marginTop: margin, height: "100%" }
                  : { marginTop: margin }
              }
            >
              {children}
            </main>
          </div>
        )
      }}
    </Location>
  )
}

export default Layout
