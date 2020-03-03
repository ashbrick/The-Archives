import React from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import FrontPage from './components/FrontPage';
import ToDoApp from './components/ToDoApp';
import Learn from './components/Learn';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <FrontPage />
      <ToDoApp />
      <Learn />
    </div>
  );
}

export default App;
