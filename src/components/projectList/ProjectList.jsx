import react from "react";
import "./projectList.css";
import Project from "../project/Project";
import netflix from "../../img/netflix-clone.png";
import pathivara from "../../img/pathivara-landing.png";
import ecomerce from "../../img/ecomerce-landing.png";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <div className="pl-title">Project & Work</div>
        <p className="pl-desc">
          <b>HTML, CSS3, JAVASCRIPT, BOOTSTRAP, REACT JS</b>
        </p>
      </div>
      <div className="pl-list">
        <Project item={netflix} />
        <Project item={pathivara} />
        <Project item={ecomerce} />
      </div>
    </div>
  );
};

export default ProjectList;
