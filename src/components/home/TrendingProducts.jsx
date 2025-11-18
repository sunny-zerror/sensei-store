import ProductCard from '../cards/ProductCard';
import React, { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import CustomEase from "gsap/dist/CustomEase";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RiArrowRightSLine } from '@remixicon/react';
import Products from '@/utils/data/Products';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const TrendingProducts = () => {
    CustomEase.create("custom", "0.6, 0, 0.3, 1");

    useGSAP(() => {
        gsap.from(".trending_anim_ttxt", {
            scrollTrigger: {
                trigger: ".trending_anim_ccard",
                start: "top 80%",
            },
            y: 50,
            stagger: 0.1,
            ease: "custom"
        });

        gsap.from(".trending_anim_ccard", {
            scrollTrigger: {
                trigger: ".trending_anim_ccard",
                start: "top 80%",
            },
            x: "100vw",
            duration: 1.25,
            stagger: 0.05,
            ease: "custom"
        });
    }, []);

    return (
        <div className="trending_product_section">
            <div className="trending_product_container">
                <div className="trending_product_header">
                    <div className="trending_product_header_top  ">
                        <div className="trending_product_header_top_inner trending_anim_ttxt text-sm">
                            <p>Shoes</p>
                            <RiArrowRightSLine size={14} />
                            <Link href="/allproducts">
                                <p>Shop All</p>
                            </Link>
                        </div>
                    </div>
                    <div className="trending_product_header_top">

                        <h3 className="trending_product_title text-2xl trending_anim_ttxt">
                            Sale FW25 — Special discounts on selected pieces.
                        </h3>
                    </div>
                </div>

                <div className="trending_product_list">
                    {Products?.map((item, idx) => (
                        <Link key={idx} href={`/products/${item.slug}`} className='trending_anim_ccard'>
                            <ProductCard product={item} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
