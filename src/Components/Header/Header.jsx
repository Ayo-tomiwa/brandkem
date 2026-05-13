import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../images/LOGO.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  // After navigating to "/", wait for render then scroll to #portfolio
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo === "portfolio") {
      // Small delay lets the page render before scrolling
      const timer = setTimeout(() => {
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      // Already on homepage — just scroll
      document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage, pass scroll intent via state
      navigate("/", { state: { scrollTo: "portfolio" } });
    }
  };

  return (
    <>
      {/* BACKDROP (click outside closes menu) */}
      <div
        className={`${classes.navBackdrop} ${menuOpen ? classes.active : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`${classes.headerContainer} ${isScrolled ? classes.scrolled : ""}`}
      >
        <div className={classes.headerWrapper} data-aos="fade-down">
          <Link to="/" className={classes.logo}>
            <img src={logo} alt="logo" />
          </Link>

          <div
            className={classes.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </div>

          <ul className={`${classes.navLinks} ${menuOpen ? classes.active : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li>
              {/* Uses click handler instead of route */}
              <a href="#portfolio" onClick={handlePortfolioClick}>
                Portfolio
              </a>
            </li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;