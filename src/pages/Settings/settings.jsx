import React from "react";
import Typograpy from "../../components/Typography/typograpy";
import ButtonOutline from "../../components/Buttons/buttonOutline";
import Nav from "../../components/Nav/nav";
import Container from "../../components/Container/container";
import home from "./../../assets/home.svg";
import { Link } from "react-router-dom";
import firebaseApp from "../../firebase/firebase";

function Settings() {
  return (
    <div>
      <Nav link={"/dashboard"} icon={home} />
      <Container>
        <Typograpy type={"title"}>Settings</Typograpy>

        <div className="settingsBtn w50-lg w100-small spaceY-xl">
          <Link to="/settings/details">
            <ButtonOutline label={"Change details"} />
          </Link>
          <div className="spaceY-md">
            <Link to="/settings/password">
              <ButtonOutline label={"Change Password"} />
            </Link>
          </div>
          <div className="spaceY-md">
            <ButtonOutline
              onClick={() => {
                firebaseApp.auth().signOut();
              }}
              label={"Log out"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
