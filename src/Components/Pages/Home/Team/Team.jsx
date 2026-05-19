import React, { useState, useEffect } from "react";
import classes from "./Team.module.css";
import ourTeam from "../../../../images/ourTeam.jpg";
import { Link } from "react-router-dom";

import teamMember1 from "../../../../images/team-1.jpg";
import teamMember2 from "../../../../images/team-2.jpg";
import teamMember3 from "../../../../images/team-3.jpg";
import teamMember4 from "../../../../images/team-4.jpg";
import teamMember5 from "../../../../images/team-5.jpg";
import teamMember6 from "../../../../images/team-6.jpg";
import teamMember7 from "../../../../images/team-7.jpg";
import teamMember8 from "../../../../images/team-8.jpg";
import teamMember9 from "../../../../images/team-9.jpg";
import teamMember10 from "../../../../images/team-10.jpg";

const Team = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    teamMember1,
    teamMember2,
    teamMember3,
    teamMember4,
    teamMember5,
    teamMember6,
    teamMember7,
    teamMember8,
    teamMember9,
    teamMember10,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.teamContainer}>
      <div className={classes.teamWrapper}>

        <span className={classes.teamLabel}>
          The People Behind the Work
        </span>

        <h2>
          Meet the <span>Team</span>
        </h2>

        <h3>
          We are a greatly inspired team full of ideas,
          creativity, and energy
        </h3>

        <div className={classes.team}>
          <img
            src={ourTeam}
            alt="Our Team"
            className={classes.leftImage}
          />

          <img
            src={images[currentImage]}
            alt="Team Member"
            className={classes.rightImage}
          />
        </div>

        <Link to="/our-team">
          <button className={classes.button}>
            Meet Our Team ➡
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Team;