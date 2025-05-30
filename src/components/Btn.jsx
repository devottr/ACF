import React from "react";
import CircleIcon from "./CircleIcon";

// Modified SecondaryBtn to accept and pass the onClick prop
const SecondaryBtn = ({ text, classText, onClick }) => { // <--- ADD onClick here
  return (
    <button className={`btn-s ${classText}`} onClick={onClick}> {/* <--- PASS onClick here */}
      {text}
      <CircleIcon />
    </button>
  );
};

const PrimaryBtn = ({ text }) => {
  return <button className="btn-p">{text}</button>;
};

export { PrimaryBtn, SecondaryBtn };