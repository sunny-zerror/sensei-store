import { RiEqualizer2Line } from '@remixicon/react'
import React, { useState } from 'react'
import ProductsSortDrop from '../ProductsSortDrop'
import useOpenFilter from '@/store/openFilter';

const sortingOptions = ["Trending", "Newest", "Low to High", "High to Low"];

const AllProductsFilter = ({ selectedCategory, setSelectedCategory, categories, gridCol, setGridCol }) => {

    const { openFilter, setOpenFilter } = useOpenFilter();

    return (
        <>
            <div className="products_section__filters">

                {/* SHOW ALL BUTTON */}
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`products_section__filter_btn__item 
                    ${selectedCategory === "all" ? "products_section__filter_btn__item--active" : ""}
                `}
                >
                    <p className='text-sm'>Show All</p>
                </button>

                {/* CATEGORY BUTTONS */}
                <div className="products_section__filter_list scroller_none">
                    {categories.map((label, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(label)}
                            className={`products_section__filter_btn__item 
                            ${selectedCategory === label ? "products_section__filter_btn__item--active" : ""}
                        `}
                        >
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

                    <ProductsSortDrop sortingOptions={sortingOptions} />

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
        </>
    )
}

export default AllProductsFilter