import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=() =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor= '#343a40';
    }
  else{
  setMode('light');
  document.body.style.backgroundColor= 'white';
  }
  }

  return (
    <>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>   {/* <Navbar/> */}

<div className="container my-3">
<TextForm  heading="Enter the text to analyze below" mode={mode}/>
{/* <div className="conatiner">
  <About/>
</div> */}
</div>
    </>
  );
}

export default App;

