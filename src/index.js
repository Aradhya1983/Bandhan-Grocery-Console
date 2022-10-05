import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './Components/About';
const BasicExample = () =>

  <Router>
    <h3>Bandhan grocery console</h3>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
     <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route path="/about" element={<About/>} />
     </Routes>
     
      {/* 
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>;
ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);