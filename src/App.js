import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data/data.js';
import Header from './components/Header/Header';
import CourseName from './components/CourseName/CourseName';
import Course from './components/Course/Course';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {

  })
  // console.log(data);
  return (
    <div>
      <Header></Header>
      <CourseName></CourseName>

    </div>

  );
}

export default App;
