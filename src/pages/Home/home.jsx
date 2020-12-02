import React, { useContext, useEffect } from "react";
import Container from "../../components/Container/container";
import Nav from "../../components/Nav/nav";
import Logo from "../../components/Logo/logo";
import ButtonOutline from "../../components/Buttons/buttonOutline";
import ButtonFill from "../../components/Buttons/buttonFill";
import "./home.css";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Home() {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser !== null && history.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  return (
    <div className="home">
      <Nav />
      <Container>
        <div className="logo">
          <Logo />
        </div>

        <div className="w50-lg w100-small spaceY-xl">
          <Link href="/login">
            <ButtonOutline label={"Login"} />
          </Link>
          <div className="spaceY-md"></div>
          <Link href="/signup">
            <ButtonFill label="Signup" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
