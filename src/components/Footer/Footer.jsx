import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mattaktas94@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/aktasutku94/">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/aktasutku">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
