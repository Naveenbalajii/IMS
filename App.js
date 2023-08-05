import React from 'react';
import './App.css';
import Navbar from './Componenets/Navbar.js';
import Main from './Componenets/Main.js';
import Add from './Componenets/Add.js';
import Edit from './Componenets/Edit.js';
import View from './Componenets/View.js';
import About from './Componenets/About.js';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/Add" element={<Add/>}/>
      <Route exact path="/Edit/:id" element={<Edit/>}/>
      <Route exact path="/View/:id" element={<View/>}/>
      <Route exact path="/About" element={<About/>}/>
    </Routes>
    
    </>
    
  );
}

export default App;
