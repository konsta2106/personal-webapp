import React from 'react';
import './App.css';
import './circle.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Test from "./pages/Test"

const App = () => {
  return (
    <Router>
      <div className='app-navbar'><Layout /></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
