import react from "react";
import "./project.css";

const Project = (props) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="\" target="_blank_" rel="noreferrer">
        <img src={props.item} alt="" className="p-img"></img>
      </a>
    </div>
  );
};

export default Project;
