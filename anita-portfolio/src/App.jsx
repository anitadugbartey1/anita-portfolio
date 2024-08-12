import React from 'react';
import Navbar from './Navbar'; // Note the relative path
import Home from './Home';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
