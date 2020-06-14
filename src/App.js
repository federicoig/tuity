import React from 'react';
import { SideBar } from './components/SideBar/SideBar.js';
import { Feed } from "./components/Feed/Feed.js"

export function App() {
  return (
    <div className="app">
      <SideBar></SideBar>
      <Feed
        userAvatar="https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4"
        tuit={{
          tuitAvatar:"https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4",
          name:"federico",
          username:"@federicoig",
          when:"2 hours ago",
          content:"holaaaa prueba de primer tuit pues"
        }}
      ></Feed>
    </div>
  );
}

