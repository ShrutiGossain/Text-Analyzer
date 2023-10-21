import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable light mode");
    } else {
      {
        setMyStyle({
          color: "black",
          backgroundColor: "white",
          border: "1px solid black",
        });
        setBtnText("Enable dark mode");
      }
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="container my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
                <b>Text Analyzer</b> is the utility website to manipulate your text
                content in the way you want.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              
               <strong>Convert to Uppercase or Lowercase: </strong> <br></br>
                This operation changes all letters in the text to either
                uppercase or lowercase, providing a standardized format for the
                text.
                <br></br>
                <strong> Copying Text: </strong> <br></br> 
                The text analyzer duplicates or replicates the
                given text, essentially creating a copy of the original content.
                <br></br>
                <strong> Removing Extra Spaces: </strong> <br></br> 
                The text analyzer eliminates unnecessary
                spaces within the text, ensuring a cleaner and more consistent
                presentation.
                <br></br>
                <strong> Clearing Text: </strong> <br></br>
                This operation involves cleaning the text by
                removing the whole text elements.
            
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Coming Soon
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
