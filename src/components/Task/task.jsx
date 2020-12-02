/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import firebaseApp from "../../firebase/firebase";
import del from "./../../assets/delete.svg";
import "./task.css";

function Task(props) {
  const { setData, data, index, checked } = props;
  const { currentUser } = useContext(AuthContext);

  const updateTask = (uid, data) => {
    firebaseApp
      .firestore()
      .collection("data")
      .doc(uid)
      .update({
        tasks: data,
      })
      .then((res) => {
        getTasks(uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTasks = (uid) => {
    firebaseApp
      .firestore()
      .collection("data")
      .doc(uid)
      .get()
      .then((res) => {
        const fsTasks = res.data().tasks;
        setData(fsTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const values = [...data];
    if (e.target.checked) {
      console.log(values[index]["done"]);
      values[index]["done"] = true;
      updateTask(currentUser.uid, values);
      setData(values);
    } else {
      values[index]["done"] = false;
      updateTask(currentUser.uid, values);
      setData(values);
    }
  };

  return (
    <div className="taskComponent">
      <div className="taskButton">
        {checked ? (
          <img onClick={props.delete} id={props.deleteId} className="showTaskIcon" src={del} alt="" />
        ) : (
          <img onClick={props.delete} id={props.deleteId} src={del} alt="" />
        )}
      </div>
      {checked ? (
        <div className="taskItem">
          <div className="check">
            <label className={checked ? "checked" : ""}>
              <input onChange={handleChange} type="checkbox" name="check" />
            </label>
          </div>
          <div className="taskContent">{checked ? <p className="strikeThrough">{props.task}</p> : <p>{props.task}</p>}</div>
        </div>
      ) : (
        <div className="taskItem deleteHidden">
          <div className="check">
            <label>
              <input onChange={handleChange} type="checkbox" name="check" />
            </label>
          </div>
          <div className="taskContent">{checked ? <p className="strikeThrough">{props.task}</p> : <p>{props.task}</p>}</div>
        </div>
      )}
    </div>
  );
}

export default Task;
