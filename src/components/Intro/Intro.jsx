import React, { useContext } from "react";
import "./Intro.css";
// images
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import utku from "../../img/utku.png";
import glassesimoji from "../../img/glassesimoji.png";
// original
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
// helper
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/*  change in darkmode  */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Utku Aktas</span>
          <span>
            Frontend Developer with experience in web designing and development
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/aktasutku">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/aktasutku94/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={utku} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          {/* original */}
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
          {/* pokemon */}
          {/* <FloatinDiv img={squirtle} text1="Web" text2="Developer" /> */}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv color change in dark mode */}
          {/* original */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="" />
          {/* pokemon */}
          {/* <FloatinDiv img={bulbasaur} text1="Best Design" text2="" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
