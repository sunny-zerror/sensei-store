import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine, RiEqualizer2Line } from '@remixicon/react';
import Products from '@/utils/data/Products';
import ProductsSortDrop from '@/components/products/ProductsSortDrop';
import Link from 'next/link';
import ProductCard from '@/components/cards/ProductCard';
import useOpenFilter from '@/store/openFilter';

const categories = ["Bata", "T-shirt", "Shirt", "Pants", "Clothing", "Overalls", "Tennis", "Bermuda", "Blazer", "Swim trunks", "Coat", "Shoe", "Short", "Pole"];

const AllProducts = () => {
    const { openFilter, setOpenFilter } = useOpenFilter();
    const [gridCol, setGridCol] = useState(4);

    useEffect(() => {
        const updateGridColumns = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setGridCol(1);
            } else if (width < 1024) {
                setGridCol(3);
            } else {
                setGridCol(4);
            }
        };

        updateGridColumns();

        window.addEventListener("resize", updateGridColumns);
        return () => window.removeEventListener("resize", updateGridColumns);
    }, []);


    useEffect(() => {
        if (window.lenis) {
            window.lenis.resize();
        }
    }, [gridCol]);

    return (
        <div className="products">
            <div className="products__wrapper">
                <div className="trending_product_header">
                    <div className="trending_product_header_top  ">
                        <div className="trending_product_header_top_inner trending_anim_ttxt text-sm">
                            <p>Shoes</p>
                            <RiArrowRightSLine size={14} />
                            <Link scroll={false} href="/allproducts">
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
                <div className="products_section__filters">
                    <button className="products_section__filter_btn">
                        <p className='text-sm'>See All</p>
                    </button>
                    <div className="products_section__filter_list scroller_none">
                        {categories.map((label, idx) => (
                            <button key={idx} className="products_section__filter_btn__item">
                                <p className='text-sm'>{label}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="products__topbar">
                    <button
                        onClick={() => setOpenFilter(true)}
                        id="filterButton"
                        className="products__filter_button"
                    >
                        <RiEqualizer2Line size={14} />
                        <p className='text-sm'>
                            Filter
                        </p>
                    </button>

                    <div className="products__grid_sort">

                        <ProductsSortDrop />
                        <div className="products__divider"></div>

                        <div className="products__grid_controls">
                            <p className='text-sm'>
                                Grid
                            </p>
                            {[1, 2, 3, 4, 8].map((val, i) => (
                                <button
                                    key={i}
                                    onClick={() => setGridCol(val)}
                                    className={`products__grid_btn ${gridCol === val ? 'products__grid_btn--active' : ''} products__grid_btn--${val}`}
                                >
                                    <p className='text-sm'>{val}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="products_grid_inner"
                    style={{
                        gridTemplateColumns: `repeat(${gridCol}, 1fr)`,
                    }}
                >
                    {Products?.map((product, idx) => (
                        <Link scroll={false} href={`/products/${product.slug}`} key={idx}>
                            <ProductCard product={product} gridCol={gridCol} />
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllProducts;
