import React, { useState } from "react";
import Nav from "../../../components/Nav/nav";
import Container from "../../../components/Container/container";
import Typograpy from "../../../components/Typography/typograpy";
import ButtonOutline from "../../../components/Buttons/buttonOutline";
import StyledInput from "../../../components/Inputs/input";
import lock from "./../../../assets/lock.svg";
import home from "./../../../assets/home.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebaseApp from "../../../firebase/firebase";
import { useToasts } from "react-toast-notifications";


function Password() {
  const { addToast } = useToasts();
  const [status, setStatus] = useState(false);
  const validateSchema = Yup.object().shape({
    password: Yup.string().min(8, "Pasword must be 8 or more characters").required("This field is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not match")
      .required("This field is required"),
  });

  const formik = useFormik(
    {
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema: validateSchema,
      onSubmit: (values, { resetForm }) => {
        setStatus(true);
        firebaseApp
          .auth()
          .currentUser.updatePassword(values.password)
          .then(() => {
            setStatus(false);
            resetForm();
            addToast("Password Updated!", {
              appearance: "success",
              autoDismiss: true,
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
    },
    []
  );

  return (
    <div>
      <Nav link={"/dashboard"} icon={home} />
      <Container>
        <Typograpy type={"title"}>Change Password</Typograpy>

        <form onSubmit={formik.handleSubmit} className="settingsBtn w50-lg w100-small spaceY-xl">
          <StyledInput
            label={"Password"}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type={"password"}
            icon={lock}
            helperText={formik.errors.password ? formik.errors.password : ""}
          />

          {/* <div className="spaceY-md">
            <StyledInput label={"New password"}  type={"password"} icon={lock} />
          </div> */}

          <div className="spaceY-md">
            <StyledInput
              label={"Confirm password"}
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              type={"password"}
              icon={lock}
              helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
            />
          </div>

          <div className="spaceY-lg">
            <ButtonOutline loading={status} type={"submit"} label={"Update"} />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Password;
