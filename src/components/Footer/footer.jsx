import React from "react";
import "./footer.css";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <div className="footerHolder">
      <footer>
        <div className="footerLink">
          <a href="https://github.com/MelvinManni/todoet" target="_blank" className="flex-center no-margin" rel="noopener noreferrer">
          Built by Melvin-Manni <img src={github} style={{ width: 36, marginLeft: 10 }} alt="github icon" />
          </a>
        </div>
        <div className="circle"></div>
      </footer>
    </div>
  );
}

export default Footer;
