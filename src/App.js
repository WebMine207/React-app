import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [btnText , setBtnText] = useState('Enable Dark mode')
  const [myStyle, setMyStyle] = useState({
            color : 'black',
            backgroundColor : 'white',
        })

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setMyStyle({
          color : 'white', 
          backgroundColor : 'black',
      });
      document.body.style.backgroundColor = 'gray';
      setBtnText('Enable light mode')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText('Enable Dark mode')
      setMyStyle({
          color : 'black', 
          backgroundColor : 'white',
      })
    }
  }
  return (
    <>
    <Navbar title="My App" aboutText="My About" mode={mode} toggle={handleMode} btnText={btnText}/>
    <TextForm heading="Enter Text Here" mode={mode}/>
    <About mode={mode} myStyle={myStyle}/>
    </>
    
  );
}

export default App;
