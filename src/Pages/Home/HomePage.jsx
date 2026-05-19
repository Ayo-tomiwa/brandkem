import React from "react";
import Partners      from "../../Components/Pages/Home/Partners/Partners";
import Who          from "../../Components/Pages/Home/Who/Who";
import Services     from "../../Components/Pages/Home/Services/Services";
import GetInTouch   from "../../Components/Pages/Home/GetInTouch/GetInTouch";
import Team         from "../../Components/Pages/Home/Team/Team";
import Hero         from "../../Components/Pages/Home/Hero/Hero";
import PortfolioPreview from "../../Components/Pages/Home/Portfolio/portfolioPreview/PortfolioPreview";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Who />
      <PortfolioPreview />
      <Team />
      <Partners />
      <GetInTouch />
    </div>
  );
};

export default HomePage;