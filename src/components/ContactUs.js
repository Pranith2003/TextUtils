import React, { useState } from "react";

function ContactUs(props) {
    const[email, setEmail] = useState("name@example.com");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
  return (
    <>
      <form>
        <div className="form-group" style={{ color: props.mode === "light" ? "black" : "white" }} >
            <h1>Get in Touch</h1>
          <label htmlFor="exampleFormControlInput1 my-2">Email address</label>
          <input
            type="email"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }} 
            className="form-control"
            id="exampleFormControlInput1"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
          <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }} 
            id="exampleFormControlTextarea1"
            rows="4"
          ></textarea>
        </div>
      </form>
    </>
  );
}

export default ContactUs;
