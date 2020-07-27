import React from 'react';

function Button(props) {
  const styles = {
    width: props.width || "90%",
    backgroundColor: props.backgroundColor || "#DEC8F7",
    height: 30,
    border: "none",
    color: "#ffffff"
  }
  return (
    <button style={styles} onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;