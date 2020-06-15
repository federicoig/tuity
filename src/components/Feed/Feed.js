import React from "react"
import { Tuit } from "./Tuit/Tuit.js"
import sparks from "./svg/sparks.svg"
import gallery from "./svg/gallery.svg"
import gif from "./svg/gif.svg"
import poll from "./svg/poll.svg"
import emoji from "./svg/emoji.svg"
import schedule from "./svg/schedule.svg"
import "./Feed.scss"

export function Feed(props){
    const { userAvatar, tuit } = props
    return(
        <div className="feed">
            <div className="feed-wrapper">
                <header>
                    <div className="wrapper">
                        <span>Home</span>
                        <img className="sparks" alt="sparks" src={sparks}/>
                    </div>
                    <div className="user-input">
                        <img className="avatar" alt="avatar" src={userAvatar}></img>
                        <div className="input">
                            <input placeholder="What's happening?"></input>
                            <div className="input-buttons">
                                <img alt="" src={gallery} />
                                <img alt="" src={gif} />
                                <img alt="" src={poll} />
                                <img alt="" src={emoji} />
                                <img alt="" src={schedule} />
                                <button className="tuit-button" type="button">Tuit</button> 
                            </div>
                        </div>
                    </div>
                </header>
                <div className="tuit">
                    {tuit}
                </div>
            </div>
        </div>
    )
}