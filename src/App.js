import React from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import FrontPage from './components/FrontPage';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <FrontPage />
      <ToDoList />
    </div>
  );
}

export default App;
