import React, { useEffect } from "react";
import classes from "./GetInTouch.module.css";
import group from "../../../../images/group.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className={classes.GetInTouchContainer}>
      <div className={classes.GetInTouchWrapper} data-aos="fade-up">
        <img src={group} alt="team illustration" loading="lazy" decoding="async" />

        <h3>Get In Touch</h3>

        <p className={classes.bold}>
          Have any questions or enquiries? Want to work with us? Send us a message below.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=brandkemistry@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={classes.groupBtn}>Send a Mail</button>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;