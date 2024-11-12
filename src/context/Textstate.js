import React, { useState } from "react";
import textcontext from "./textcontext";
function Textstate(props) {
  const [data, setData] = useState({
    mode: " ",
  });
  const setTheme = (mode) => {
    console.log(mode);
    setData(mode);
  };
  const getTheme = () => {
    return data.mode;
  };
  return (
    <textcontext.Provider value={{ setTheme, getTheme }}>
      {props.children}
    </textcontext.Provider>
  );
}

export default Textstate;
