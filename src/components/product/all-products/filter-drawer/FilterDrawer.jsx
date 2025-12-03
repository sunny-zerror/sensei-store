import React, { useEffect, useRef, useState } from 'react'
import useOpenFilter from '@/store/openFilter';
import gsap from 'gsap';
import Button from '@/components/common/Button';
import FilterHeader from './FilterHeader';
import FilterCategorySection from './FilterCategorySection';
import FilterSizeSection from './FilterSizeSection';
import FilterGenderSection from './FilterGenderSection';
import FilterPriceSection from './FilterPriceSection';
import FilterColorSection from './FilterColorSection';

const categories = [
    "Naruto", "Dragon Ball", "One Piece",
    "Attack on Titan", "Demon Slayer",
    "My Hero Academia",
    "Naruto", "Dragon Ball", "One Piece",
    "Attack on Titan", "Demon Slayer",
    "My Hero Academia"
];
const sizes = [
    "38", "39", "40", "41", "42", "43", "44", "45", "46",
    "48", "85", "90", "95", "100", "P", "M", "G", "GG", "UN"
];
const genders = [
    "Male", "Female", "No Gender", "Unisex"
];
const colors = ["#2D3748", "#4A5568", "#1A202C", "#2B6CB0", "#3182CE", "#2C5282", "#553C9A", "#805AD5", "#4C1D95", "#C53030", "#E53E3E", "#9B2C2C", "#38A169", "#48BB78", "#276749", "#D69E2E", "#ECC94B", "#B7791F", "#A0AEC0", "#718096"];

const FilterDrawer = () => {
    const { openFilter, setOpenFilter } = useOpenFilter();
    const overlayRef = useRef(null);
    const panelRef = useRef(null);
    const MIN = 197;
    const MAX = 9750;

    const [minValue, setMinValue] = useState(MIN);
    const [maxValue, setMaxValue] = useState(MAX);

    const minPercent = ((minValue - MIN) / (MAX - MIN)) * 100;
    const maxPercent = ((maxValue - MIN) / (MAX - MIN)) * 100;


    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedGenders, setSelectedGenders] = useState([])
    const [selectedColors, setSelectedColors] = useState([])


    useEffect(() => {
        gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "none" });
        gsap.set(panelRef.current, { left: "-70vh" });
    }, []);

    const openPanel = () => {
        if (window.lenis) window.lenis.stop();
        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onStart: () => {
                overlayRef.current.style.pointerEvents = "auto";
            },
        });

        gsap.to(panelRef.current, {
            left: "0vh",
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const closePanel = () => {
        if (window.lenis) window.lenis.start();
        gsap.to(panelRef.current, {
            left: "-70vh",
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setOpenFilter(false);
            },
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                overlayRef.current.style.pointerEvents = "none";
            },
        });
    };

    useEffect(() => {
        if (openFilter) {
            openPanel();
        } else {
            closePanel();
        }
    }, [openFilter]);

    const clearFilter = () => {
        setSelectedCategories([]);
        setSelectedSizes([]);
        setSelectedGenders([]);
        setSelectedColors([]);
        setMinValue(MIN);
        setMaxValue(MAX);
    }

    return (
        <>
            <div ref={overlayRef} className="filter_overlay scroller_none" onClick={closePanel} />

            <div ref={panelRef} data-lenis-prevent className="filter_panel scroller_none">

                <div className="filter_container scroller_none">

                    <FilterHeader closePanel={closePanel} clearFilter={clearFilter} />

                    <FilterCategorySection categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                    <FilterSizeSection sizes={sizes} selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} />

                    <div className="filter_row">

                        <FilterGenderSection genders={genders} selectedGenders={selectedGenders} setSelectedGenders={setSelectedGenders} />

                        <FilterPriceSection minValue={minValue} maxValue={maxValue} MIN={MIN} MAX={MAX} minPercent={minPercent} maxPercent={maxPercent} setMinValue={setMinValue} setMaxValue={setMaxValue} />

                    </div>

                    <FilterColorSection colors={colors} selectedColors={selectedColors} setSelectedColors={setSelectedColors} />

                    <div className="apply_filter_btn_par">
                        <div className="apply_filter_btn">
                            <Button text="Show Results" />
                        </div>
                    </div>

                </div>

            </div>

        </>

    );
};

export default FilterDrawer;