import React from "react"
import { Card } from "./Card/Card.js"
import search from "./search.svg"
import "./Trending.scss"

export function Trending(props){
    return(
        <div className="trending">
            <div className="input">
                <img alt="" src={search}/>
                <input placeholder="Search Twitter" />
            </div>
            <div className="card">
                <h3>What's happening</h3>
                <Card trending={{
                        topic:"Cuarentena",
                        tuitQuantity:"13,698"
                    }}
                />
                <Card trending={{
                        topic:"City Pop",
                        tuitQuantity:"6,928"
                    }}
                />
                <Card trending={{
                        topic:"#UltimosCartuchos",
                        tuitQuantity:"9,463"
                    }}
                />
                <Card trending={{
                        topic:"Capitán del Espacio",
                        tuitQuantity:"2,213"
                    }}
                />
                <Card trending={{
                        topic:"Tuity",
                        tuitQuantity:"5,523"
                    }}
                />
                <button type="button">Show more</button>
            </div>
            <div className="legal-stuff">
                <span>Terms</span>
                <span>Privacy policy</span>
                <span>Cookies</span>
                <span>Ads info</span>
                <span>More</span>
            </div>
            <span className="tuity">© 2020 tuity, Inc.</span>
        </div>
    )
}