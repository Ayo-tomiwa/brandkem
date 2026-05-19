import React, { useEffect, useRef } from "react";
import "./portfolioPreview/PortfolioPreview.css";
import { portfolioItems } from "./portfolioPreview/portfolioData";

const PortfolioPage = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* HERO */}
      <div className="portfolioPageHero">
        <div className="portfolioPageHeroOverlay" />
        <div className="portfolioPageHeroContent">
          <p className="portfolioPageBreadcrumb">Home - Portfolio</p>

          <h1 className="portfolioPageHeroTitle">Our Portfolio</h1>

          <p className="portfolioPageHeroSub">
            {portfolioItems.length} projects — Activations · Branding · Events · Creative Production
          </p>
        </div>
      </div>

      {/* GRID */}
      <section className="portfolioSection">
        <div className="portfolioContainer">
          <div className="portfolioGrid">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="portfolioCard"
              >
                <div className="portfolioImgWrap">
                  <img src={item.img} alt={item.title} />
                </div>

                {/* overlay */}
                <div className="portfolioOverlay">
                  <div className="portfolioOverlayContent">
                    <p className="portfolioOverlayTag">{item.tag}</p>
                    <h3 className="portfolioOverlayTitle">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;