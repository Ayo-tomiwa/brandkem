import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({ duration: 1300, disable: "mobile" }); // Disabled on mobile to prevent transition state locks
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div 
        className={`${classes.navBackdrop} ${menuOpen ? classes.active : ""}`} 
        onClick={closeMenu} 
      />
      <header className={`${classes.headerContainer} ${isScrolled ? classes.scrolled : ""}`}>
        <div className={classes.headerWrapper}>
          <Link to="/" className={classes.logo} onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
          
          <div 
            className={`${classes.hamburger} ${isScrolled ? classes.scrolledHamburger : ""}`} 
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </div>

          <ul className={`${classes.navLinks} ${menuOpen ? classes.active : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about-us" onClick={closeMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/our-team" onClick={closeMenu}>Our Team</Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
