import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Textstate from "./context/Textstate";

function App() {
  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState("Dark");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
      setSwitchText(savedMode === "light" ? "Dark" : "Light");
      document.body.style.backgroundColor =
        savedMode === "light" ? "white" : "black";
    }
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const tooglemode = () => {
    if (mode === "null" || switchText === "null") {
      setMode("light");
      // setTheme(mode);
      setSwitchText("Dark");
    }
    if (mode === "light") {
      setMode("dark");
      // setTheme(mode);
      document.body.style.backgroundColor = "black";
      setSwitchText("Light");
      showAlert("Dark Mode has been Enabled", "success");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      // setTheme(mode);
      document.body.style.backgroundColor = "white";
      setSwitchText("Dark");
      showAlert("Light Mode has been Enabled", "success");
      localStorage.setItem("mode", "light");
    }
  };
  return (
    <>
      <Textstate>
        <Router>
          <Navbar
            title="TextUtils"
            home="Home"
            about="About Us"
            contact="Contact Us"
            mode={mode}
            toogleMode={tooglemode}
            switchText={switchText}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    heading="Enter Your Text to Analyse"
                    mode={mode}
                    showAlert={showAlert}
                  />
                }
              />
              <Route
                exact
                path="/about"
                element={<AboutUs mode={mode} toogleMode={tooglemode} />}
              />
              <Route
                exact
                path="/contact"
                element={<ContactUs mode={mode} toogleMode={tooglemode} />}
              />
            </Routes>
          </div>
        </Router>
      </Textstate>
    </>
  );
}

export default App;
