"use client";
import { RiArrowRightUpLine } from '@remixicon/react'
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const bookletData = [
    {
        id: 1,
        position: "top-[55%] left-[40%]",
        product: {
            name: "German Black Fabric Hoodie ",
            price: "800",
            image: "https://oflyn.fr/cdn/shop/files/Amnesia-Focus.webp?v=1741616541&width=260",
        },
    },
    {
        id: 2,
        position: "top-[45%] left-[15%]",
        product: {
            name: "German Black Fabric Hoodie ",
            price: "800",
            image: "https://oflyn.fr/cdn/shop/files/RemoseB-Focus.webp?v=1741611197&width=260",
        },
    },
    {
        id: 3,
        position: "top-[35%] left-[35%]",
        product: {
            name: "German Black Fabric Hoodie ",
            price: "800",
            image: "https://oflyn.fr/cdn/shop/files/Fragment-Focus.webp?v=1741680708&width=260",
        },
    },
    {
        id: 4,
        position: "top-[35%] right-[20%]",
        product: {
            name: "German Black Fabric Hoodie ",
            price: "800",
            image: "https://oflyn.fr/cdn/shop/files/Remose-Focus.webp?v=1741612806&width=260",
        },
    },
    {
        id: 5,
        position: "top-[55%] right-[5%]",
        product: {
            name: "German Black Fabric Hoodie ",
            price: "800",
            image: "https://oflyn.fr/cdn/shop/files/AmnesiaB-Focus.webp?v=1741616505&width=260",
        },
    },
];

const Booklet = () => {
    const parallaxRef = useRef(null);
    const [openIds, setOpenIds] = useState([]);

    const toggleCard = (id) => {
        setOpenIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    useGSAP(() => {
        if (!parallaxRef.current) return;

        gsap.to(parallaxRef.current, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <div className="booklet_wrapper">
            <div className="booklet_sticky_section_parent">
                <div className="booklet_sticky_section">
                    <div className="booklet_col text-base">
                        <p>elegance and authenticity</p>
                    </div>

                    <div className="booklet_col booklet_col_center">
                        <img
                            className="booklet_gift_img"
                            src="//oflyn.fr/cdn/shop/files/giftest.gif?v=1742053314"
                            alt="loading"
                        />
                    </div>

                    <div className="booklet_col booklet_col_end ">
                        <div className="booklet_btn_group">
                            <div className="glass center booklet_square_btn">
                                <RiArrowRightUpLine size={16} />
                            </div>
                            <div className="glass center booklet_text_btn ">
                                <p className=''>
                                    See More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booklet_cards_hov_sec">
                <img
                    ref={parallaxRef}
                    className="booklet_parallax_img"
                    src="/images/homePage/bookletBg.webp"
                    alt="loading"
                />

                {bookletData?.map((spot) => {
                    const positionStyles = {};
                    const regex = /(top|bottom|left|right)-\[(.*?)\]/g;
                    let match;
                    while ((match = regex.exec(spot.position)) !== null) {
                        positionStyles[match[1]] = match[2]; 
                    }

                    return (
                        <div
                            key={spot.id}
                            className="booklet_hotspot"
                            style={positionStyles} 
                        >
                            <div
                                className="booklet_pulseCircle text-base"
                                onClick={() => toggleCard(spot.id)}
                            >
                                <p>{openIds.includes(spot.id) ? "-" : "+"}</p>
                            </div>

                            <AnimatePresence>
                                {openIds.includes(spot.id) && (
                                    <motion.div
                                        initial={{ y: 25, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 25, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="booklet_product_card"
                                    >
                                        <div className="booklet_product_img">
                                            <img
                                                src={spot.product.image}
                                                alt={spot.product.name}
                                            />
                                        </div>

                                        <div className="booklet_product_info">
                                            <div className="booklet_product_info_header">
                                                <h3 className="booklet_product_name text-base">
                                                    {spot.product.name}
                                                </h3>
                                                <div className="booklet_product_icon">
                                                    <RiArrowRightUpLine size={16} />
                                                </div>
                                            </div>
                                            <h3 className="booklet_product_price text-base">
                                                Rs. {spot.product.price}
                                            </h3>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Booklet;
