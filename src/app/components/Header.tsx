"use client";

import React, { useState, useEffect } from "react";
import "./header.css";
import AppBtn from "./AppBtn";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
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
  return (
    <header
      id="header"
      className={` fixed-top d-flex align-items-center ${
        scroll > 100 ? "header-scrolled" : undefined
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link href="/">Granito Darbai</Link>
        </h1>
        {/* logofoto code */}
        {/* <a href="index.html" className="logo me-auto me-lg-0">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a> */}
        <Nav />
        <AppBtn name="Užsakyti" />
      </div>
    </header>
  );
}
