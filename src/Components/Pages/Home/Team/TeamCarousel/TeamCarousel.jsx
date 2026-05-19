import React, { useEffect } from "react";
import "./TeamCarousel.css";

import teamMember1 from "../../../../../images/team-1.jpg";
import teamMember2 from "../../../../../images/team-2.jpg";
import teamMember3 from "../../../../../images/team-3.jpg";
import teamMember4 from "../../../../../images/team-4.jpg";
import teamMember5 from "../../../../../images/team-5.jpg";
import teamMember6 from "../../../../../images/team-6.jpg";
import teamMember7 from "../../../../../images/team-7.jpg";
import teamMember8 from "../../../../../images/team-8.jpg";
import teamMember9 from "../../../../../images/team-9.jpg";
import teamMember10 from "../../../../../images/team-10.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Adeleke Akanbi",
    role: "Managing Consultant",
    image: teamMember1,
    bio: "Akanbi Adeleke is an astute marketing professional with over 15 years of experience in Brand Building and Experiential Marketing. He has managed successful activations and experiential campaigns for leading FMCG brands across Nigeria including Goldberg, JTI, Dangote Flour, Fayrouz, UAC Restaurants, Nigerian Breweries and many more.",
  },

  {
    name: "Kingsley Emeagwai",
    role: "Strategy / Biz Director",
    image: teamMember2,
    bio: "Kingsley Emeagwai is a strategic leader passionate about creativity and impactful brand communication. With vast experience in print, digital and advertising, he has worked across FMCG, banking, telecoms and hospitality industries for brands like MTN, Pepsi, Peak Milk, Gulder, Rothmans and Coronation Bank.",
  },

  {
    name: "John Olugbenga",
    role: "Strategy Manager",
    image: teamMember3,
    bio: "John is a seasoned product and brand marketer with over 9 years experience in account management, business development and digital marketing. He has driven growth for major brands including Nigerian Breweries, JTI, FanMilk Nigeria, Henkel and UAC Foods & Restaurants.",
  },

  {
    name: "Adewale Kehinde",
    role: "Head, Operations",
    image: teamMember4,
    bio: "Adewale Kehinde is a results-driven marketing communications professional with over 15 years experience in brand building, activations, trade marketing and production management. He has worked with organizations such as Unilever, Seven-Up, Dangote Group, Nigerian Breweries and CHI Limited.",
  },

  {
    name: "Mercy Ogbumu",
    role: "Account Manager",
    image: teamMember5,
    bio: "Mercy is a self-motivated advertising professional passionate about delivering creative solutions to clients. With over 8 years of experience in client relationship management, she has worked on brands including Colgate-Palmolive, LG Electronics, Samsung, Motorola, Union Bank and Premium Pension.",
  },

  {
    name: "Aiyedun Muyiwa",
    role: "Creative Lead",
    image: teamMember6,
    bio: "Muyiwa is a Creative Director with over 12 years experience in ATL and BTL marketing communications. He has worked with leading agencies such as Insight Communications, Noah’s Ark, Leo Burnett and Sharebeta, delivering creative campaigns for multinational and local brands.",
  },

  {
    name: "Segun Ajayi",
    role: "Head of Finance",
    image: teamMember7,
    bio: "Segun Ajayi is a finance expert with over a decade of experience in accounting, auditing and taxation. He has worked in different financial management capacities both locally and internationally.",
  },

  {
    name: "Creative Strategy Team",
    role: "Brand Strategists",
    image: teamMember8,
    bio: "Our strategy team consists of passionate marketers, creative thinkers and customer retention experts focused on developing innovative marketing solutions that help brands grow and connect with consumers.",
  },

  {
    name: "Brand Activation Team",
    role: "Experiential Experts",
    image: teamMember9,
    bio: "The activation team specializes in experiential marketing, events and consumer engagement campaigns, helping brands create memorable experiences and stronger customer connections.",
  },

  {
    name: "Brandkemistry Team",
    role: "Thinkers • Strategists • Designers",
    image: teamMember10,
    bio: "Brandkemistry is made up of consultants, designers, strategists and activation experts united by creative thinking and strategic planning to achieve the marketing objectives of clients across industries.",
  },
];

const TeamCarousel = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="tc-section" data-aos="fade-up">
      <div className="tc-inner">

        <div className="tc-header">
          <span className="tc-tag">
            Our Team
          </span>

          <h2 className="tc-title">
            Meet The Experts Behind Brandkemistry
          </h2>

          <p className="tc-desc">
            Our team includes passionate marketers,
            brand consultants, strategists, activation experts,
            designers and customer retention specialists.
          </p>
        </div>

        <div className="tc-grid">
          {teamMembers.map((member, idx) => (
            <div
              className="tc-card"
              key={idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              <div className="tc-photo-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="tc-photo"
                  loading="lazy"
                  decoding="async"
                />

                <div className="tc-photo-overlay"></div>
              </div>

              <div className="tc-body">
                <h3 className="tc-name">
                  {member.name}
                </h3>

                <p className="tc-role">
                  {member.role}
                </p>

                <p className="tc-bio">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamCarousel;