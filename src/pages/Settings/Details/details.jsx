import React, { useContext, useEffect, useState } from "react";
import Nav from "../../../components/Nav/nav";
import Container from "../../../components/Container/container";
import Typograpy from "../../../components/Typography/typograpy";
import ButtonOutline from "../../../components/Buttons/buttonOutline";
import StyledInput from "../../../components/Inputs/input";
import home from "./../../../assets/home.svg";
import user from "./../../../assets/user.svg";
import mail from "./../../../assets/mail.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebaseApp from "../../../firebase/firebase";
import { AuthContext } from "../../../Context/AuthContext";
import { useToasts } from "react-toast-notifications";


function Details() {
  const { addToast } = useToasts();
  const { currentUser } = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().notRequired(),
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
  });

  const formik = useFormik(
    {
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validationSchema: validateSchema,
      onSubmit: (values, { resetForm }) => {
        setStatus(true);
        firebaseApp
          .auth()
          .currentUser.updateEmail(values.email)
          .then(() => {
            firebaseApp
              .auth()
              .currentUser.updateProfile({
                displayName: values.firstName,
              })
              .then(() => {
                firebaseApp
                  .firestore()
                  .collection("data")
                  .doc(currentUser.uid)
                  .update({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                  })
                  .then((res) => {
                    setStatus(false);
                    addToast("Details updated successfully!", {
                      appearance: "success",
                      autoDismiss: true,
                    });
                    getPreviousData();
                  });
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

  const getPreviousData = () => {
    firebaseApp
      .firestore()
      .collection("data")
      .doc(currentUser.uid)
      .get()
      .then((res) => {
        const data = res.data();
        formik.setFieldValue("firstName", data.firstName);
        formik.setFieldValue("lastName", data.lastName);
        formik.setFieldValue("email", data.email);
        setTimeout(() => {
          formik.validateForm();
          document.querySelectorAll("input").forEach((item) => {
            item.focus();
          });
        }, 200);
      });
  };

  useEffect(() => {
    getPreviousData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Nav link={"/dashboard"} icon={home} />
      <Container>
        <Typograpy type={"title"}>Details</Typograpy>

        <form onSubmit={formik.handleSubmit} className="settingsBtn w50-lg w100-small spaceY-xl">
          <StyledInput
            label={"first name"}
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            type={"text"}
            icon={user}
            helperText={formik.errors.firstName ? formik.errors.firstName : ""}
          />

          <div className="spaceY-md">
            <StyledInput
              label={"Last name"}
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              type={"text"}
              icon={user}
              helperText={formik.errors.lastName ? formik.errors.lastName : ""}
            />
          </div>

          <div className="spaceY-md">
            <StyledInput
              label={"Email adddress"}
              type={"email"}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              icon={mail}
              helperText={formik.errors.email ? formik.errors.email : ""}
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

export default Details;
