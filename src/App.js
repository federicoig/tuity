import React from 'react';
import { SideBar } from './components/SideBar/SideBar.js';
import { Feed } from "./components/Feed/Feed.js"

export function App() {
  return (
    <div className="app">
      <SideBar></SideBar>
      <Feed></Feed>
    </div>
  );
}

