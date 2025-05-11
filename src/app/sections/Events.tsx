"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "../components/SectionTitle";
import EventsItem from "../components/EventsItem";
import "./events.css";
import { EventItem } from "../data/types";

export default function Events() {
  const [slides, setSlides] = useState<EventItem[]>([]);

  const getEventsData = () => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Events" subtitle="Organize events subtitle" />

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="events-slider swiper-container"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <EventsItem item={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
