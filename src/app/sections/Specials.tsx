"use client";
import React, { useState, useEffect } from "react";
import "./specials.css";
import { specialsFilters } from "../data/data";
import SectionTitle from "../components/SectionTitle";
import Preloader from "../components/Preloader";
import SpecialsItem from "../components/SpecialsItem";
import { SpecialsItemEntry } from "../data/types";

export default function Specials() {
  const [data, setData] = useState<SpecialsItemEntry[]>([]);

  const getSpecialsData = () => {
    fetch("http://localhost:3000/api/specials")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getSpecialsData();
  }, []);

  const handleFilterActive = (id: number) => {
    specialsFilters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleSpecialChange = (id: number) => {
    handleFilterActive(id);
    const updatedItems = data.map((item) => {
      item.active = false;
      if (item.id === id) item.active = true;
      return item;
    });

    setData(updatedItems);
  };

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Specials" subtitle="Check Our Specials" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {specialsFilters.map((filter) => (
                <li className="nav-item" key={filter.id}>
                  <a
                    className={`nav-link ${filter.active ? "active show" : ""}`}
                    onClick={() => handleSpecialChange(filter.id)}
                  >
                    {filter.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {!data ? (
                <Preloader />
              ) : data.length > 0 ? (
                data.map((item) => <SpecialsItem key={item.id} item={item} />)
              ) : (
                <Preloader />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
