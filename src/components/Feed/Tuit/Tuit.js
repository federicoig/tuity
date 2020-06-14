import React from "react"
import "./Tuit.scss"
import comment from "./svg/comment.svg"
import like from "./svg/like.svg"
import retuit from "./svg/retuit.svg"
import share from "./svg/share.svg"

export function Tuit({ content }){
    return(
        <div className="tuit">
            <article className="article">
                <div className="post-info">
                    <div className="poster-info">
                        <img className="avatar" alt="Avatar of an user." src={content.avatar} />  
                        <div className="who-when-what">
                            <span className="name">{content.name}</span>
                            <span className="username">{content.username}</span>
                            <span className="when"><span>·</span>{content.when}</span>
                            <div className="content">
                                <div className="tuit-content">
                                    <p>{content.tuit}</p>
                                </div>
                                <div className="tuit-buttons">
                                    <img alt="" src={comment}></img>
                                    <img alt="" src={retuit}></img>
                                    <img alt="" src={like}></img>
                                    <img alt="" src={share}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </article>  
        </div>
    )
}