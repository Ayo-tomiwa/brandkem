import React from "react";
import "./TeamPage.css";
import TeamHero from "../../Components/Pages/Team/TeamHero/TeamHero";
import TeamCarousel from "../../Components/Pages/Home/Team/TeamCarousel/TeamCarousel";

const TeamPage = () => {
  return (
    <div className="team-page">
      <TeamHero />
      <TeamCarousel />
    </div>
  );
};

export default TeamPage;