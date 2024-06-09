import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize = {13} country='in' category='general'/>} />
            <Route exact path="/in" element={<News pageSize = {13} country='in' category='general'/>} />
            <Route exact path="/us" element={<News pageSize = {13} country='us' category='general'/>} />
            <Route exact path="/business" element={<News pageSize = {13} country='in' category='business'/>} />
            <Route exact path="/entertainment" element={<News pageSize = {13} country='in' category='entertainment'/>} />
            <Route exact path="/general" element={<News pageSize = {13} country='in' category='general'/>} />
            <Route exact path="/health" element={<News pageSize = {13} country='in' category='health'/>} />
            <Route exact path="/science" element={<News pageSize = {13} country='in' category='science'/>} />
            <Route exact path="/sports" element={<News pageSize = {13} country='in' category='sports'/>} />
            <Route exact path="/technology" element={<News pageSize = {13} country='in' category='technology'/>} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
