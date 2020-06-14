import React from "react"

export function Card({ trending }){
    return(
        <div className="topic">
            <h4>{trending.topic}</h4>
            <span>{trending.tuitQuantity} Tweets</span>
        </div>
    )
}