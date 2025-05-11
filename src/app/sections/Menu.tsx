"use client";

import React, { useState, useEffect } from "react";
import { filters } from "../data/data";
import "./menu.css";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "../components/MenuItem";
import Preloader from "../components/Preloader";
import { MenuItemEntry } from "../data/types";

export default function Menu() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState<MenuItemEntry[]>([]);

  const getMenuData = () => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((menu) => setData(menu))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterAcive = (id: number) => {
    filters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterAcive(id);
    if (category === "all") {
      setItems(data);
    } else {
      setItems(
        data.filter((item: { category: string }) => item.category === category)
      );
    }
  };
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our Menu" subtitle="Discover our menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "filter-active" : undefined}`}
                  onClick={() =>
                    handleFilterChange(filter.id, filter.category || "all")
                  }
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map((item) => <MenuItem key={item.id} item={item} />)
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
}
