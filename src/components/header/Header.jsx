import React from "react";
import "./header.css";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">MW</div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="avatar">
            <img
              src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/308863787_10229465102796564_7717315549879358016_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ji_HayUeyW4AX-vNFSU&_nc_ht=scontent-ams4-1.xx&oh=00_AfA5sxaYJ2QJOVgK8RCaw2723AaxGLwAdGlZJ1nmI1SSWA&oe=63BAB384"
              alt="me"
            />
          </div>
        </div>
      </header>
    </>
  );
};
