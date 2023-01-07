import React from "react";
import { AiOutlineCodepen, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>Maarten learns React 2022 </p>

          <div className="social">
            <a href="https://github.com/userwijnja" target="_blank">
              <AiFillGithub className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/maarten-wijnja-921b4825b/"
              target="_blank"
            >
              <AiFillLinkedin className="icon" />
            </a>

            <a href="https://codepen.io/MWijnja" target="_blank">
              <AiOutlineCodepen className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
