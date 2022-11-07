import React, { useContext } from "react";
import "./Works.css";
// images
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import inHouse from "../../img/inHouse.jpeg";
import dormIt from "../../img/dormIt.jpeg";
import ntg from "../../img/ntg.jpeg";
import self from "../../img/self.jpeg";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Seeking to work at a company, where I can best utilize my skills and
            strengths
            <br />
            to accomplish the organization’s goals and objectives 
            <br />
            and at the same time get an opportunity to expand my knowledge base.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={inHouse} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={dormIt} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={self} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ntg} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
