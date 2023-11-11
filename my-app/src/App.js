import React from "react"
import "./App.css"
import Navbar from "./Navbar"
import MainContent from "./MainContent"



export default function App() {
  return (
    <div>
      <Navbar />
      <MainContent
        img="japan-pic.jpg"
        country="Japan"
        title="Mount Fuji"
        date="1st Jan, 2021 -- 30th Jan, 2021"
        summary="Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south"
      />
    </div >

  )
}