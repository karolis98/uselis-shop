"use client";

import React, { useState } from "react";
import "./booking.css";
import SectionTitle from "../components/SectionTitle";

export default function Booking() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({...text, [name]: value, validate: '' });
  };

  const handleSubmitBooking = () => {};

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Book a Table" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="You Name"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                value={text.email}
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={text.phone}
                placeholder="Your Phone"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                name="date"
                className="form-control"
                value={text.date}
                placeholder="Date"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
