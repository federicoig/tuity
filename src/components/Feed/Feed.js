import React from "react"
import { Tuit } from "./Tuit/Tuit.js"
import sparks from "./sparks.svg"

export function Feed(props){
    return(
        <div className="feed">
            <div className="user-input">
                <header>
                    <div>
                        <span>Home</span>
                        <img alt="sparks" src={sparks}/>
                    </div>
                    <div>
                        <img className="avatar" alt="avatar"></img>
                        <div>
                            <input></input>
                            <img></img>
                            <img></img>
                            <img></img>
                            <img></img>
                            <img></img>
                            <button></button>
                        </div>
                    </div>
                </header>
            </div>
            <Tuit>

            </Tuit>
        </div>
    )
}