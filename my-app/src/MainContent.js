import React from "react"

export default function MainContent() {
    return (
      
            <div className="container">
                <div className="images">
                    <img src="/japan-pic.jpg" alt="img-error" className="content-pic" />
                </div>
                <div className="content-details">
                    <h4>Japan</h4>
                    <span className="maps">View on Google Maps</span>
                </div>
                <div>
                    <h1 className="content-summary">Mount Fuji</h1>
                    <h4>1st Jan, 2021 -- 30th Jan, 2021</h4>
                    <p className="main-text">Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south</p>
                </div>
            </div>
        
    )
}