import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { navs } from "../data/data";
import "./nav.css";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);
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

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleScrollTo = (section: string) => {
    let header: HTMLElement = document.querySelector("#header")!;
    let offset = header.offsetHeight;
    let targetEl: HTMLElement = document.querySelector("#" + section)!;
    if (pathname === "/") {
      let elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  const handleNavActive = React.useCallback(() => {
    const position = scroll + 200;
    setNavList((prevNavList) =>
      prevNavList.map((nav) => {
        nav.active = false;
        const targetSection: HTMLElement = document.querySelector(
          "#" + nav.target
        )!;

        if (
          targetSection &&
          position >= targetSection.offsetTop &&
          position <= targetSection.offsetTop + targetSection.offsetHeight
        ) {
          nav.active = true;
        }
        return nav;
      })
    );
  }, [scroll]);

  useEffect(() => {
    handleNavActive();
  }, [handleNavActive]);

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${
        open ? "navbar-mobile" : undefined
      }`}
    >
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${
                nav.active ? "active" : undefined
              }`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
}
