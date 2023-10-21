
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';


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
<BrowserRouter>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>   {/* <Navbar/> */}

<div className="container my-3">
<Routes>
          <Route path="/about"
            element= {<About mode={mode}/>}>
          </Route>
          <Route path="/"
          element={<TextForm  heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        </Routes>
       </div>
</BrowserRouter>
    </>
  );
}

export default App;
