import React from "react"
import logo from "./svg/logo.svg"
import home from "./svg/home.svg"
import hashtag from "./svg/hashtag.svg" 
import notification from "./svg/bell.svg"
import message from "./svg/message.svg" 
import bookmarks from "./svg/bookmarks.svg"
import lists from "./svg/lists.svg"
import profile from "./svg/profile.svg"
import options from "./svg/options.svg"
import "./SideBar.scss"

export function SideBar(props){
    return (
        <div className="side-bar">
            <nav className="nav-bar">
                <div className="logo">
                    <img alt="tuity logo" src={logo} />
                </div>
                <div className="buttons">
                <button>
                    <img alt="home logo" src={home} />
                    <span>Home</span>
                </button>
                <button>
                    <img  alt="hashtag logo" src={hashtag}/>
                    <span>Explore</span>
                </button>
                <button>
                    <img alt="notification logo" src={notification}/>
                    <span>Notifications</span>
                </button>
                <button>
                    <img alt="message logo" src={message}/>
                    <span>Messages</span>
                </button>
                <button>
                    <img alt="bookmarks logo" src={bookmarks}/>
                    <span>Bookmarks</span>
                </button>
                <button>
                    <img alt="lists logo" src={lists}/>
                    <span>Lists</span>
                </button>
                <button>
                    <img alt="profile logo" src={profile}/>
                    <span>Profile</span>
                </button>
                <button>
                    <img alt="options logo" src={options}/>
                    <span>More</span>
                </button>
                </div>
                <button type="button" className="tuit-button">Tuit</button>
            </nav>
        </div>
    )
}