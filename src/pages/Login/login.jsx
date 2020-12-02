import React, { useContext, useState } from "react";
import Header from "../../components/Header/headers";
import Container from "../../components/Container/container";
import Typograpy from "../../components/Typography/typograpy";
import StyledInput from "../../components/Inputs/input";
import mail from "./../../assets/mail.svg";
import lock from "./../../assets/lock.svg";
import ButtonFill from "../../components/Buttons/buttonFill";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebaseApp from "../../firebase/firebase";

function Login() {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
    password: Yup.string().min(8, "Pasword must be 8 or more characters").required("This field is required"),
  });
  useEffect(() => {
    currentUser !== null && history.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      setStatus(true);
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          setStatus(false);
          resetForm();
          setTimeout(() => {
            history.push("/dashboard");
          }, 200);
        })
        .catch((err) => {
          console.log(err);
          setStatus(false);
        });
    },
  });

  return (
    <div className="login">
      <Header label="Log In" />
      <Container>
        <Typograpy type="title">welcome</Typograpy>
        <div className="flex spaceY-md">
          <Typograpy>Don't have an account ?</Typograpy>

          <Link to="/signup" className="spaceX-sm">
            <Typograpy type="link">Sign Up</Typograpy>
          </Link>
        </div>

        <form className="spaceY-lg w100-small w50-lg" onSubmit={formik.handleSubmit}>
          <StyledInput
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            label="Email Address"
            type={"email"}
            icon={mail}
            helperText={formik.errors.email ? formik.errors.email : ""}
          />
          <div className="spaceY-md"></div>
          <StyledInput
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
            type={"password"}
            icon={lock}
            helperText={formik.errors.password ? formik.errors.password : ""}
          />

          <div className="spaceY-lg w25-lg w100-small ml-auto">
            <ButtonFill loading={status} type={"submit"} label={"Log In"} />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;
