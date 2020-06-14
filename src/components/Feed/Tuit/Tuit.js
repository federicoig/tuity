import React from "react"
import "./Tuit.scss"
import comment from "./svg/comment.svg"
import like from "./svg/like.svg"
import retuit from "./svg/retuit.svg"
import share from "./svg/share.svg"

export function Tuit(props){
    const tuit = props.input
    return(
        <div className="tuit">
            <article className="article">
                <div className="post-info">
                    <div className="poster-info">
                        <img className="avatar" alt="Avatar of an user." src={tuit.tuitAvatar} />  
                        <div className="who-when-what">
                            <span className="name">{tuit.name}</span>
                            <span className="username">{tuit.username}</span>
                            <span className="when">{tuit.when}</span>
                            <div className="content">
                                <div>
                                    <p>{tuit.content}</p>
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