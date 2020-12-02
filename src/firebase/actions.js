import firebaseApp from "./firebase";

export const signUpAction = (email, password, data) => {};

const updateTask = (uid, data, callBack = () => {}) => {
  firebaseApp
    .firestore()
    .collection("data")
    .doc(uid)
    .update({
      tasks: data,
    })
    .then((res) => {
      callBack();
    })
    .catch((err) => {
      console.log(err);
    });
};


export { getTasks, addTaskAction, updateTask };
