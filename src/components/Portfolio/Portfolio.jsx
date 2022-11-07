import React, { useContext, useEffect } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
// images
import Disney from "../../img/disney.jpg";
import art from "../../img/art.jpg";
import airbnb from "../../img/airbnb.png";
import gym from "../../img/gym.jpg";
import FoodOrder from "../../img/FoodOrder.png";
import Ecommerce from "../../img/ecommerce.jpg";
import LinkedinPage from "../../img/LinkedinPage.png";
import Medium from "../../img/Medium1.png";
import { useState } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={width < 1000 ? (width < 600 ? 1 : 2) : 3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://disneyplus-utku.firebaseapp.com/home">
            <img src={Disney} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://aktasutku.github.io/art_project/">
            <img src={art} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://github.com/aktasutku/airbnb-demo">
            <img src={airbnb} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://utku-gym.netlify.app/">
            <img src={gym} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://github.com/aktasutku/Ecommerce">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://linkedin-clone-b530a.web.app/">
            <img src={LinkedinPage} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://www.youtube.com/watch?v=6N_sLQJu1-Y">
            <img src={Medium} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://github.com/aktasutku/Food-Order">
            <img src={FoodOrder} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
