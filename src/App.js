import React from 'react';
import { SideBar } from './components/SideBar/SideBar.js';
import { Feed } from "./components/Feed/Feed.js"
import { Tuit } from "./components/Feed/Tuit/Tuit.js"
import { Trending } from "./components/Trending/Trending.js"

export function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed
        userAvatar="https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4"
        tuit={
          <React.Fragment>
            <Tuit content={{
                avatar:"https://pbs.twimg.com/profile_images/1271910452633784320/FXmiVRr-_400x400.jpg",
                name:"j̶̔͐ỉ̶͆n̴̖̿x̶͑̌!̵̹͊2̷̔͗7̶̔͝",
                username:"@_springwarmth",
                when:"2 minutes ago",
                tuit:"hitler tenia razon"
              }}/>
            <Tuit content={{
                avatar:"https://pbs.twimg.com/profile_images/1268577443612327938/Wy5Rwwzx_400x400.jpg",
                name:"💞",
                username:"@Lunapppl",
                when:"3 hours ago",
                tuit:"negros"  
              }}/>
          </React.Fragment>
        }
      />
      <Trending

      />   
    </div>
  );
}
