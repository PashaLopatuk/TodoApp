// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Header from './components/Header/Header';
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const [todo, setTodo] = useState([{
    id: 1,
    title: 'First todo',
    status: true,
  }])

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
      </main>
    </div>
  );
}

export default App;
