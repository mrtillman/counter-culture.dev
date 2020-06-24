import React from "react";
import SERVERS from "../../Common/servers";
import MenuButton from "./menu-button";
import { signOut } from "../../Infrastructure/fetch.client";
const classNames = require("classnames");

async function signOutAsync() {
  window.location = await signOut();
}

function NavBar({ model }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <img src="../images/logo.png" alt="Logo" />
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="tabs is-right">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a href="https://docs.counter-culture.io/api/overview">API</a>
                </li>
                <li className="is-active">
                  <a href={`${SERVERS.APP}`}>Explore</a>
                </li>
                <li>
                  {model.user ? (
                    <a href="#" onClick={signOutAsync}>
                      Sign Out
                    </a>
                  ) : (
                    <a href={`${SERVERS.APP}/oauth2/callback`}>Sign In</a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
