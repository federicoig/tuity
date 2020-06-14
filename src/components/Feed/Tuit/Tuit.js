import React from "react"

export function Tuit(props){
    return(
        <div>
            <article className="article">
                <div className="post-info">
                    <div className="poster-info">
                        <img className="avatar" alt="Avatar of an user." src={props.avatar} />  
                        <div className="who-when-what">
                            <span className="name">{props.name}</span>
                            <span className="username">{props.username}</span>
                            <span className="when">{props.when}</span>
                            <div className="content">
                                <div>
                                    <p>{props.tuit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>  
        </div>
    )
}