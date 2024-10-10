import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import MyWork from './Components/MyWork/MyWork';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <MyWork/>
    </div>
  )
}

export default App