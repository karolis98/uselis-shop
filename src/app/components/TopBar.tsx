"use client";
import React, { useState, useEffect } from "react";
import "./topBar.css";

export default function TopBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scroll > 100 ? "topbar-scrolled" : undefined
      }`}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+37060604858</span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span> P-Š: 8:00 - 18:00</span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>LT</li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
