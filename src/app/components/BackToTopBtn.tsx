"use client";
import React, { useState, useEffect } from "react";
import "./backToTopBtn.css";

export default function BackToTopBtn() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    // Only add event listener if window exists
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a
      onClick={backToTop}
      className={`back-to-top d-flex align-items-center justify-content-center
            ${scroll > 100 ? "active" : undefined}`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
