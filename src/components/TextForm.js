import React, { useState } from "react";

function TextForm(props) {
  // console.log(props);
  const [text, setText] = useState("Enter text here!!");
  const [textcount, setTextCount] = useState(0);
  const handleClickToUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has converted to UpperCase", "success");
  };
  const handleClickToLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    let text = event.target.value;
    setText(text);
    let count = text.length;
    setTextCount(count);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text has cleared", "Cleared");
  };

  const handleCopy = () => {
    if (text.length !== 0) {
      navigator.clipboard.writeText(text);
      props.showAlert("Text has Copied to Clipboard", "Copied");
    } else {
      props.showAlert("Nothing is here to copy", "error");
    }
  };
  const handleFormat = () => {
    if (text.length !== 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Text has formatted", "Formatted");
    } else {
      props.showAlert("Nothing is here to Format", "error");
    }
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* onChange is a event listener */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClickToUpper}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClickToLower}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleFormat}>
          Format Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleFormat}>
          MD 5
        </button>
        
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Summary</h2>
        <p>
          {text.split(" ").length} words and {textcount} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter something to preview here!!!!...."}
        </p>
        <hr />
      </div>
    </>
  );
}

export default TextForm;
