import React, { useState, useEffect } from "react";
import "../styles/Styles.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light_theme"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light_theme" ? "dark_theme" : "light_theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const elemToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };

  // const toggleNavbar = () => {
  //   toggleActive();
  //   const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  //   const navbar = document.querySelector("[data-navbar]");
  //   elemToggleFunc(navToggleBtn);
  //   elemToggleFunc(navbar);
  //   elemToggleFunc(document.body);
  // };



  useEffect(() => {
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    navToggleBtn.addEventListener("click", toggleNavbar);

    return () => {
      navToggleBtn.removeEventListener("click", toggleNavbar);
    };
  }, []); // Run this effect only once

  useEffect(() => {
    if (theme === "light_theme") {
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme");
    } else {
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    }
  }, [theme]);


  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  return (
    <header className={`header ${isActive ? "active" : ""}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="">
            Nirmal<span>.</span>
          </a>
        </h1>
        <div className="navbar-actions">
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>
          <button
            className={`theme-btnfirst ${
              theme === "dark_theme" ? "active" : ""
            }`}
            aria-label="Change Theme"
            title="Change Theme"
            data-theme-btn
            onClick={toggleTheme}
          >
            <span
              className={`icon ${theme === "dark_theme" ? "active" : ""}`}
            ></span>
          </button>
        </div>
        <button
        className={`nav-toggle-btnfirst ${isNavbarActive ? 'active' : ''}`}
        aria-label="Toggle Menu"
        title="Toggle Menu"
        data-nav-toggle-btn
        onClick={toggleNavbar}
      >
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </button>

      <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home.
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About.
              </a>
            </li>
            <li>
              <a href="#skills" className="navbar-link">
                Skills.
              </a>
            </li>
            <li>
              <a href="#portfolio" className="navbar-link">
                Portfolio.
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">
                Contact.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
