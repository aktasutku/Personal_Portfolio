import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import basketball from "../../img/basketball.png";
import gym from "../../img/gym.png";
import cycle from "../../img/cycle.png";
import hiking from "../../img/hiking.png";
import burger from "../../img/burger.png";

const Testimonial = () => {
  const clients = [
    {
      img: basketball,
      review:
        "If I have my friends or my brother around, basketball is a go-to sport for me. I like competing with other people even if I can't dunk :) ",
    },
    {
      img: gym,
      review:
        "I love sunny days. Those are the days I am enjoying running, boxing, and working out outside under the sun. That helps me deal with stress and helps me to think clearly.",
    },
    {
      img: cycle,
      review:
        "If I will go to work or anywhere in the city I love riding my bike. It makes things faster in city life. Especially waiting for the bus/train can be frustrating sometimes",
    },
    {
      img: hiking,
      review:
        "Escaping from the city and having some time for myself is refreshing. Especially if I have a company with me!",
    },
    {
      img: burger,
      review:
        "I always go for the food/snacks I haven't tried before. I like the excitement of discovering new tastest",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>What else is </span>
        <span>Utku </span>
        <span> doing out of work ?</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        spaceBetween={10}
        modules={[Pagination]}
        slidesPerView={width < 900 ? 1 : 2}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
