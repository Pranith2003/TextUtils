import React, { useEffect, useState } from "react";

function AboutUs(props) {
  const [myStyle, setmyStyle] = useState({
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "white" : "black",
  });
  // const [buttonText, setButtonText] = useState("Dark Mode");
  // const [btnclassName, setbtnclassName] = useState("btn btn-light");
  const toogleStyle = (mode) => {
    if (mode === "light") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      // setButtonText("Dark Mode");
      // setbtnclassName("btn btn-light");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      // setButtonText("Light Mode");
      // setbtnclassName("btn btn-dark");
    }
  };
  useEffect(() => {
    toogleStyle(props.mode);
  }, [props.mode]);

  return (
    <div
      className="container mx-3"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Employee #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Employee <code> 1 Details</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Employee #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Employee <code> 2 Details</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Employee #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Employee <code> 3 Details</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
