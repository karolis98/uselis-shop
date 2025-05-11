"use client";
import React, { useEffect } from "react";

import "./hero.css";
import HeroBtn from "../components/HeroBtn";
import "glightbox/dist/css/glightbox.min.css";

export default function Hero() {
  useEffect(() => {
    // Dynamic import inside useEffect (client-side only)
    import("glightbox").then(({ default: GLightbox }) => {
      const lightbox = GLightbox({
        selector: ".glightbox",
      });

      return () => lightbox.destroy();
    });
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Granito <span>darbu</span> meistrai
            </h1>
            <h2>Granito darbai, akmens apdirbimas</h2>

            <div className="btns">
              <HeroBtn name="Užsakyti" target="menu" />
              <HeroBtn name="Apie mus" target="book-a-table" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://youtu.be/QWJnY2o2z40?si=ayuBBrCiRN5iP7QO"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
