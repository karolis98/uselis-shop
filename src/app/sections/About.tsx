import React from "react";
import aboutImage from "../../../public/assets/images/about.jpg";
import "./about.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image
                src={aboutImage}
                alt=""
                style={{ width: "450px", height: "450px" }}
              />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              We are a team of passionate individuals dedicated to creating
              innovative solutions.
            </h3>
            <p className="fst-italic">
              Our mission is to empower businesses and individuals through
              technology and design.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> U;;amco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
