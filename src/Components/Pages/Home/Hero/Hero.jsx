import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroWrapper}>
        <h1>Amplifying your brand identity</h1>
        <p>
          We come with ambitious creative community of talents, providing best solutions.
        </p>

        <Link to="/about-us">
          <button className={classes.whoBtn}>Learn More ➡</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;