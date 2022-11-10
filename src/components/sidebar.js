import "../App.css";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="header">
        <h1 className="head-comp">We-Post.</h1>
      </div>
      <div className="sidebar">
        <div className="side-component">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
            alt="Instagram Png Icon - Instagram Logo Transparent @clipartmax.com"
          />
          <a href="*">Explore</a>
        </div>
        <div className="side-component">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
            alt="Instagram Png Icon - Instagram Logo Transparent @clipartmax.com"
          />
          <a href="*">Post</a>
        </div>
        <div className="side-component">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
            alt="Instagram Png Icon - Instagram Logo Transparent @clipartmax.com"
          />
          <a href="*">Profile</a>
        </div>
        <div className="side-component">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
            alt="Instagram Png Icon - Instagram Logo Transparent @clipartmax.com"
          />
          <a href="*">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
