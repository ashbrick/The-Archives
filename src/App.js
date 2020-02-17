import React from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <div className="hero-image">
            <div className="hero-text">
                <h1>The Archives</h1>
            </div>
      </div>
      <FrontPage />
    </div>
  );
}

export default App;
