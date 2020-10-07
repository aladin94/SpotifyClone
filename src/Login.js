import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="frontlist">
          <h1 className="listheader">How it Works:</h1>
          <h2>Step 1. Connect your Spotify Account</h2>
          <h2>Step 2. Have Fun!</h2>
      </div>
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
