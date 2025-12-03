import React, { useEffect, useState } from 'react';
import AllProductsHeader from '@/components/product/all-products/AllProductsHeader';
import AllProductsFilter from '@/components/product/all-products/AllProductsFilter';
import AllProductsGrid from '@/components/product/all-products/AllProductsGrid';

const categories = ["Bata", "T-shirt", "Shirt", "Pants", "Clothing", "Overalls", "Tennis", "Bermuda", "Blazer", "Swim trunks", "Coat", "Shoe", "Short", "Pole"];


const AllProducts = () => {
    const [gridCol, setGridCol] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState("all");

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

                <AllProductsHeader currentLink="sale" title="Sale FW25 — Special discounts on selected pieces." />

                <AllProductsFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} gridCol={gridCol} setGridCol={setGridCol} />

                <AllProductsGrid gridCol={gridCol} />

            </div>
        </div>
    );
};

export default AllProducts;
