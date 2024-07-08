import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import * as tf from '@tensorflow/tfjs';
import './App.css';
import Home from './Home';
import About from './About';
import Quiz from './Quiz';
import Navbar from './Navbar';
import Result from './Result';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<> <Home /> </>} />
      <Route exact path="/about" element={<> <About /> </>} />
      <Route exact path="/quiz" element={<> <Quiz /> </>} /> 
      <Route exact path="/result" element={<> <Result /> </>} />
    </Routes>
    {/*<Navigate to="/" element={<> <Home /> </>} />/*}
    {/*<Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.5.2/dist/tf.min.js/.model/model(1).json"></Script>*/}
    </>
  );
}

export default App;
