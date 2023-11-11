import React from "react"

export default function MainContent(props) {
    return (

        <div className="container">
            <div className="images">
                <img src={`/${props.img}`} alt="img-error" className="content-pic" />
            </div>
            <div className="main">
                <div className="content-details">
                    <h4>{props.country}</h4>
                    <span className="maps">View on Google Maps</span>
                </div>
                <div>
                    <h1 className="content-summary">{props.title}</h1>
                    <h4>{props.date}</h4>
                    <p className="main-text">{props.summary}</p>
                </div>
            </div>
        </div>

    )
}