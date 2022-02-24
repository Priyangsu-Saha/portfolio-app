import React from "react";
import "./about.css";
import person from "../../img/about-img-1.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={person} className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I would like to describe my self in simple words
        </p>
        <p className="a-desc">
          An enthusiast engineering fresher passion to become a successful
          expert person by learning and developing knowledgeable skills for
          personal and professional growth and implement the knowledge to work
          for the growth of the organisation.
        </p>
      </div>
    </div>
  );
};

export default About;
