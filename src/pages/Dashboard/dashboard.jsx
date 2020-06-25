import React, { useState } from 'react';
import Nav from '../../components/Nav/nav';
import Container from '../../components/Container/container';
import Typograpy from '../../components/Typography/typograpy';
import AddInput from '../../components/Inputs/addInput';
import Task from '../../components/Task/task';
import box from './../../assets/box.svg';
import settings from './../../assets/settings.svg'
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput === '' || taskInput.length <= 0) {
      return null;
    } else {
      setTasks(() => [...tasks, taskInput]);
      setTaskInput('');
      document.getElementById('addInput').value = '';
      document.getElementById('addInput').focus();
    }
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleDelete = (e) => {
    const { id } = e.target;
    setTasks(() => [...tasks.filter((item, index) => index !== parseInt(id))]);
    e.preventDefault()
    e.stopPropagation()
  };

  return (
    <div>
      <Nav
      link={'/settings'}
      icon={settings}
      />
      <Container>
        <Typograpy type={'title'}>Tasks</Typograpy>

        <div className='w100-small w50-lg'>
          <div className=' w100-lg task-holder'>
            {tasks.length === 0 ? (
              <div className='empty-task'>
                <Typograpy>Seems like you have no tasks available</Typograpy>
                <div className='spaceX-md'></div>
                <img src={box} alt='' />
              </div>
            ) : (
              tasks.map((item, index) => (
                <Task
                  key={uuidv4()}
                  deleteId={index}
                  task={item}
                  delete={handleDelete}
                />
              ))
            )}
          </div>
          <form className={'addTaskForm'} onSubmit={addTask}>
            <AddInput
              placeholder={'Enter task...'}
              onChange={handleChange}
              id={'addInput'}
            />
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
