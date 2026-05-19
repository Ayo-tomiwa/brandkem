import React from "react";
import "./PortfolioPreview.css";
import { portfolioItems } from "./portfolioData";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  const previewItems = portfolioItems.slice(0, 30);

  return (
    <section className="portfolioSection">
      <div className="portfolioContainer">

        <div className="portfolioHeader">
          <div>
            <span className="portfolioLabel">Selected Work</span>
            <h2 className="portfolioTitle">
              Our <span>Portfolio</span>
            </h2>
          </div>

          <p className="portfolioSubtitle">
            Premium branding and experiential campaigns.
          </p>
        </div>

        <div className="portfolioGrid">
          {previewItems.map((item, i) => (
            <div key={i} className="portfolioCard">
              <div className="portfolioImgWrap">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="portfolioOverlay">
                <div className="portfolioOverlayContent">
                  <p className="portfolioOverlayTag">{item.tag}</p>
                  <h3 className="portfolioOverlayTitle">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/portfolio" className="seeMoreBtn">
            See Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;