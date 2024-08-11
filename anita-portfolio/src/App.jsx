import React from 'react';
import Navbar from './Navbar'; // Note the relative path
import Home from './Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
