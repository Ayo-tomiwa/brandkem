import React, { useEffect, useRef } from "react";
import classes from "./Portfolio.module.css";

import p1 from "../../../../images/portfolio/product-1.jpeg";
import p2 from "../../../../images/portfolio/product-2.jpeg";
import p3 from "../../../../images/portfolio/product-3.jpeg";
import p4 from "../../../../images/portfolio/product-4.jpeg";
import p5 from "../../../../images/portfolio/product-5.jpeg";
import p6 from "../../../../images/portfolio/product-6.jpeg";
import p7 from "../../../../images/portfolio/product-7.jpeg";
import p8 from "../../../../images/portfolio/product-8.jpeg";
import p9 from "../../../../images/portfolio/product-9.jpeg";
import p10 from "../../../../images/portfolio/product-10.jpeg";
import p11 from "../../../../images/portfolio/product-11.jpeg";
import p12 from "../../../../images/portfolio/product-12.jpeg";

<img loading="lazy" decoding="async" />

const portfolioItems = [
    {
        img: p1,
        tag: "Brand Merchandise",
        title: "Akiverse Polo Shirt",
        featured: true,
    },
    {
        img: p2,
        tag: "Crypto Campaign",
        title: "Akiverse Front & Back Tee",
        featured: false,
    },
    {
        img: p3,
        tag: "Street Wear",
        title: "Akiverse Roll-Up Banner",
        featured: false,
    },
    {
        img: p4,
        tag: "Event Branding",
        title: "Akiverse Merchandise",
        featured: false,
    },
    {
        img: p5,
        tag: "Creative Apparel",
        title: "Akiverse Roll-Up Banner",
        featured: false,
    },
    {
        img: p6,
        tag: "Merch Collection",
        title: "Purple Edition Polo",
        featured: true,
    },
    {
        img: p7,
        tag: "Community Campaign",
        title: "Scan To Play Concept",
        featured: false,
    },
    {
        img: p8,
        tag: "Brand Identity",
        title: "Akiverse Apparel Design",
        featured: false,
    },
    {
        img: p9,
        tag: "Exhibition Design",
        title: "Akiverse Booth Design",
        featured: false,
    },
    {
        img: p10,
        tag: "Digital Marketing",
        title: "Akiverse Campaign Strategy",
        featured: false,
    },
    {
        img: p11,
        tag: "Product Launch",
        title: "Akiverse Launch Experience",
        featured: false,
    },
    {
        img: p12,
        tag: "Event Activation",
        title: "Akiverse Live Brand Event",
        featured: false,
    }
];

const Portfolio = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(classes.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={classes.portfolioSection} id="portfolio">
            <div className={classes.portfolioContainer}>
                {/* HEADER */}
                <div className={classes.portfolioHeader}>
                    <div>
                        <span className={classes.portfolioLabel}>
                            Selected Work
                        </span>

                        <h2 className={classes.portfolioTitle}>
                            Our <span>Portfolio</span>
                        </h2>
                    </div>

                    <p className={classes.portfolioSubtitle}>
                        Premium merchandise, experiential branding and modern campaign visuals crafted for impact.
                    </p>
                </div>

                {/* GRID */}
                <div className={classes.portfolioGrid}>
                    {portfolioItems.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardRefs.current[i] = el)}
                            className={`${classes.portfolioCard} ${item.featured ? classes.featured : ""
                                }`}
                        >
                            <div className={classes.portfolioImgWrap}>
                                <img src={item.img} alt={item.title}     loading="lazy"
    decoding="async" />
                            </div>

                            <div className={classes.portfolioOverlay}>
                                <div className={classes.portfolioOverlayContent}>
                                    <p className={classes.portfolioOverlayTag}>
                                        {item.tag}
                                    </p>
                                    <h3 className={classes.portfolioOverlayTitle}>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;