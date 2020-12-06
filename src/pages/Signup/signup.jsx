import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/headers";
import Container from "../../components/Container/container";
import Typograpy from "../../components/Typography/typograpy";
import StyledInput from "../../components/Inputs/input";
import mail from "./../../assets/mail.svg";
import lock from "./../../assets/lock.svg";
import user from "./../../assets/user.svg";
import ButtonFill from "../../components/Buttons/buttonFill";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebaseApp from "../../firebase/firebase";
import { useHistory } from "react-router";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function SignUp() {
  const { addToast } = useToasts();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().notRequired(),
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
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: values.firstName,
          });
          const userId = res.user.uid;
          firebaseApp
            .firestore()
            .collection("data")
            .doc(userId)
            .set({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              tasks: [],
            })
            .then(() => {
              setStatus(false);
              addToast("Account created successfully, you will be redirected", {
                appearance: "success",
                autoDismiss: true,
              });
              resetForm();
              setTimeout(() => {
                history.push("/dashboard");
              }, 500);
            });
        })
        .catch((err) => {
          addToast(err.message, {
            appearance: "error",
            autoDismiss: true,
          });
          setStatus(false);
        });
    },
  });

  return (
    <div className="SignUp">
      <Header label="Sign Up" />
      <Container>
        <Typograpy type="title">Create account</Typograpy>
        <div className="flex spaceY-md flex-col-sm">
          <Typograpy>Already have an account ?</Typograpy>
          <div className="spaceX-sm">
            <Link to="/login">
              <Typograpy type="link">Sign In</Typograpy>
            </Link>
          </div>
        </div>

        <form className="spaceY-lg w100-small w50-lg" onSubmit={formik.handleSubmit}>
          <StyledInput
            label="First Name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            type={"text"}
            icon={user}
            helperText={formik.errors.firstName ? formik.errors.firstName : ""}
          />
          <div className="spaceY-md"></div>
          <StyledInput
            label="Last Name"
            type={"text"}
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            icon={user}
            helperText={formik.errors.lastName ? formik.errors.lastName : ""}
          />
          <div className="spaceY-md"></div>
          <StyledInput
            label="Email Address"
            type={"email"}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            icon={mail}
            helperText={formik.errors.email ? formik.errors.email : ""}
          />
          <div className="spaceY-md"></div>
          <StyledInput
            label="Password"
            type={"password"}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            icon={lock}
            helperText={formik.errors.password ? formik.errors.password : ""}
          />

          <div className="spaceY-lg w25-lg w100-small ml-auto">
            <ButtonFill loading={status} type={"submit"} label={"Sign Up"} />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default SignUp;
