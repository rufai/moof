import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

export default function App(props) {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users">Users Again</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About task={props.tasks} addTask={addTask}/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
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
  const taskList = props.task.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>)

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form appAddTask={props.addTask} />
    
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
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

function addTask(name){
  alert(name)
}