import React, { useContext, useState } from "react";
import Nav from "../../components/Nav/nav";
import Container from "../../components/Container/container";
import Typograpy from "../../components/Typography/typograpy";
import AddInput from "../../components/Inputs/addInput";
import Task from "../../components/Task/task";
import box from "./../../assets/box.svg";
import settings from "./../../assets/settings.svg";
import { toast } from "react-toastify";
import { useEffect } from "react";
import firebaseApp from "../../firebase/firebase";
import { AuthContext } from "../../Context/AuthContext";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

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

  const addTaskAction = (uid, data) => {
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
        setTasks(fsTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTasks(currentUser.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput === "" || taskInput.length <= 0) {
      return null;
    } else {
      const values = tasks;
      values.push({ done: false, value: taskInput });
      setTasks(values);
      setTaskInput("");
      document.getElementById("addInput").focus();
      setTimeout(() => {
        addTaskAction(currentUser.uid, values);
      }, 500);
    }
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleDelete = (indx) => {
    const values = [...tasks];
    values.splice(indx, 1);
    console.log(values);
    updateTask(currentUser.uid, values);
    setTasks(values);
  };

  function toasted() {
    toast.error("Hi");
  }

  toasted();

  return (
    <div>
      <Nav name={currentUser.displayName} link={"/settings"} icon={settings} />
      <Container>
        <Typograpy type={"title"}>Tasks</Typograpy>

        <div className="w100-small w50-lg">
          <div className=" w100-lg task-holder">
            {tasks.length < 1 ? (
              <div className="empty-task">
                <Typograpy>Seems like you have no tasks available</Typograpy>
                <div className="spaceX-md"></div>
                <img src={box} alt="" />
              </div>
            ) : (
              tasks.map((item, index) => (
                <Task
                  key={index}
                  data={tasks}
                  checked={item.done}
                  setData={setTasks}
                  index={index}
                  deleteId={index}
                  task={item.value}
                  delete={() => {
                    handleDelete(index);
                  }}
                />
              ))
            )}
          </div>
          <form className="addTaskForm" style={{ display: "flex", justifyContent: "center" }} onSubmit={addTask}>
            <div style={{ width: "100%" }}>
              <AddInput value={taskInput} placeholder={"Enter task..."} onChange={handleChange} id={"addInput"} />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
