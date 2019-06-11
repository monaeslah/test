import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer'
import AddTodo from './Components/Containers/AddTodo'
import VisibleTodoList from './Components/Containers/VisibleTodoList'



function App() {
  return (
    <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    </div>
  );
}

export default App;
