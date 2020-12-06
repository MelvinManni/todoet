import React, { useContext } from "react";
import "./nav.css";
import icon from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Nav(props) {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        <div className="circle"></div>
        {props.link === undefined ? (
          <img src={props.icon} alt="" />
        ) : (
          <Link to={props.link}>
            <img src={props.icon} alt="" />
          </Link>
        )}
      </div>
      {currentUser !== null && (
        <div className="avatar">
          {<p>{"Welcome " + currentUser.displayName}</p>}
          {!props.avatar ? <img src={icon} alt="" /> : <img src={props.avatar} alt="" />}
        </div>
      )}
    </nav>
  );
}

export default Nav;
