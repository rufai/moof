import { nanoid } from 'nanoid';
import React, { useState } from "react";
import {
  BrowserRouter as Router,


  Link, Route, Switch
} from "react-router-dom";
import Dasboard from './components/Dashboard';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Tabs from './components/tabs';
import Todo from './components/Todo';
import InfiniteUsers from './components/InfiniteScrolling'


const FILTER_MAP = {
  ALL: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

export default function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);
  
  function addTask(name){
    const newTask = { id: "task-" + nanoid(), name: name, completed: false };
    alert(name + " inside addTask")
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id) {
    // console.log(tasks[0])
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id){
    console.log(id)
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }

  function editTask(id, newName) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task
    })
    setTasks(updatedTasks)

  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tabs</Link>
            </li>
            <li>
              <Link to="/TodoList">TodoMatic</Link>
            </li>
            <li>
              <Link to="/modal">Modal</Link>
            </li>
            <li>
              <Link to="/users"></Link>
            </li>
            <li>
              <Link to="/scolling">Infite Scrolling</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/TodoList">
            <About task={tasks} addTask={addTask} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask}/>
          </Route>
          <Route path="/modal">
            <Dasboard />
          </Route>
          <Route path="/scrolling">
            <InfiniteUsers />
          </Route>
          <Route path="/">
          <div>
          <h1>Tabs Demo</h1>
            <Tabs> 
              <div label="Gator"> 
                See ya later, <em>Alligator</em>! 
              </div> 
              <div label="Croc"> 
                After 'while, <em>Crocodile</em>! 
              </div> 
              <div label="Sarcosuchus"> 
                Nothing to see here, this tab is <em>extinct</em>! 
              </div> 
            </Tabs> 
          </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About(props) {

  const [filter, setFilter] = useState("All");

  const taskList = props.task.map((task) => 
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id} 
      toggleTaskCompleted={props.toggleTaskCompleted}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
      />
  )

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  // const filterList = FILTER_MAP.map( name => (
  //   <FilterButton key={name} name={name} />
  // ))
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter} />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form appAddTask={props.addTask} />
    
      <div className="filters btn-group stack-exception">
       {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exchange"
        aria-labelledby="list-heading" >
            {taskList}
        </ul>
    </div>
    
  );
}

function Users() {
  return <h2>Users</h2>;
}

