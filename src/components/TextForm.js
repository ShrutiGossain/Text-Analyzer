import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=() =>{
    // console.log("UpperCase was clicked" + text)
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handleDownClick= () =>{
    let newText=text.toLowerCase();          
    setText(newText);
  }

  const handleClearClick=() =>{
    setText("");
  }

  const handleCopy=()=>{
    let text= document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "));
  }                                                                                                                  

  const handleOnClick=(event) =>{        //  to write some text in the text area
    console.log("On change")
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  // text="ghfdgd";   Wrong way to change the state
  // setText("gfhfhfh");   Correct way to change the state
  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode==='dark' ? 'white': 'black' }}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark' ? 'grey':'white' , color:props.mode==='dark'? 'white':'black'}} onChange={handleOnClick} value={text} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove extra spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").length-1} words and {text.length} charcters</p>
         <p>{0.008 * text.split(" ").length-0.008} minutes to read</p>
         <h2>Preview</h2>
         <p>{text}</p>
    </div>
    </>
  )
}
