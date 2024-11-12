import React from "react";

function Alert(props) {
  // console.log(props.alert)
  const capatlize = (word) => {
    let chaR = word[0].toUpperCase();
    return chaR + word.slice(1);
  };
  const alertTypes = (word) => {
    if (word === "Cleared") {
      return "danger";
    } else if (word === "Copied") {
      return "primary";
    } else if (word === "Formatted") {
      return "primary";
    } else if (word === "error") {
      return "danger";
    } else {
      return "success";
    }
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${alertTypes(
          props.alert.type
        )} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capatlize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
