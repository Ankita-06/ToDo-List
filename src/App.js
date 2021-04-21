import './App.css';
import Header from "./MyComponents/Header";
import { ToDo } from "./MyComponents/ToDo";
import { Footer } from "./MyComponents/Footer";
import { AddToDo } from "./MyComponents/AddToDo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initToDo;
  if (localStorage.getItem("todo") === null) {
    initToDo = [];
  }
  else {
    initToDo = JSON.parse(localStorage.getItem("todo"));
  }
  const onDelete = (todoi) => {
    console.log("I am on delete of todo", todoi);
    //let index = todo.indexOf(todoi);
    //todo.splice(index, 1);

    setTodo(todo.filter((e) => {
      return e !== todoi;
    }));
    localStorage.setItem("todo", JSON.stringify(todo));
  }

  const addToDo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todo.length === 0) {
      sno = 0;
    }
    else {
      sno = todo[todo.length - 1].sno + 1;
    }
    const myToDo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodo([...todo, myToDo])
    console.log(myToDo);


  }

  const [todo, setTodo] = useState(initToDo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo])

  return (
    <>
    <Router>
      <Header title="My To-Do List" searchBar={false} />
      <Switch>
        <Route exact path="/" render={()=>{
          return(
          <>
          <AddToDo addToDo={addToDo} />
          <ToDo todo={todo} onDelete={onDelete} />
          </>)
        }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
