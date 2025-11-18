import React, { useEffect, useRef, useState } from 'react'
import useOpenFilter from '@/store/openFilter';
import gsap from 'gsap';

const categories = [
    "Naruto", "Dragon Ball", "One Piece",
    "Attack on Titan", "Demon Slayer",
    "My Hero Academia",
    "Naruto", "Dragon Ball", "One Piece",
    "Attack on Titan", "Demon Slayer",
    "My Hero Academia"
];
const size = [
    "38", "39", "40", "41", "42", "43", "44", "45", "46",
    "48", "85", "90", "95", "100", "P", "M", "G", "GG", "UN"
];
const gender = [
    "Male", "Female", "No Gender", "Unisex"
];
const colors = ["#2D3748", "#4A5568", "#1A202C", "#2B6CB0", "#3182CE", "#2C5282", "#553C9A", "#805AD5", "#4C1D95", "#C53030", "#E53E3E", "#9B2C2C", "#38A169", "#48BB78", "#276749", "#D69E2E", "#ECC94B", "#B7791F", "#A0AEC0", "#718096"];

const FilterDrop = () => {
    const { openFilter, setOpenFilter } = useOpenFilter();
    const overlayRef = useRef(null);
    const panelRef = useRef(null);
    const MIN = 197;
    const MAX = 9750;

    const [minValue, setMinValue] = useState(MIN);
    const [maxValue, setMaxValue] = useState(MAX);

    const minPercent = ((minValue - MIN) / (MAX - MIN)) * 100;
    const maxPercent = ((maxValue - MIN) / (MAX - MIN)) * 100;

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

    return (
        <>
            <div
                ref={overlayRef}
                className="filter_overlay scroller_none"
                onClick={closePanel}
            />

            <div
                ref={panelRef}
                data-lenis-prevent
                className="filter_panel scroller_none"
            >
                <div className="filter_container scroller_none">
                    {/* Header */}
                    <div className="filter_header">
                        <div className="filter_title_row ">
                            <h3 className='text-sm'>Filters ( 1   )</h3>
                            <p className='text-xs '>Clear Filters</p>
                        </div>
                        <button onClick={closePanel}>
                            <h3 className='text-sm'>Close</h3>
                        </button>
                    </div>

                    {/* Categories */}
                    <div className="filter_section">
                        <h3 className="filter_title text-sm">Categories</h3>
                        <div className="filter_btn_group">
                            {categories.map((label, idx) => (
                                <button key={idx} className="filter_btn">
                                    <p className='text-xs'>{label}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="filter_section">
                        <h3 className="filter_title text-sm">Size</h3>
                        <div className="filter_size_grid">
                            {size.map((label, idx) => (
                                <div key={idx} className="filter_size_item">
                                    <p className='text-xs' >{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gender & Price */}
                    <div className="filter_row">
                        <div className="filter_section filter_section--half">
                            <h3 className="filter_title text-sm">Gender</h3>
                            <div className="filter_btn_group">
                                {gender.map((label, idx) => (
                                    <button key={idx} className="filter_btn">
                                        <p className='text-xs'>{label}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter_section filter_section--half filter_section--price">
                            <h3 className="filter_title text-sm">Price</h3>
                            <div className="filter_price_inputs">
                                <div className="filter_price_box">
                                    <h3 className="filter_price_label text-sm">Min</h3>
                                    <input
                                        type="text"
                                        value={minValue}
                                        onChange={(e) =>
                                            setMinValue(
                                                Math.min(Number(e.target.value) || MIN, maxValue - 1)
                                            )
                                        }
                                        placeholder="Rs.999"
                                        className="filter_price_input text-xs"
                                    />
                                </div>

                                <div className="filter_price_box">
                                    <h3 className="filter_price_label text-sm">Max</h3>
                                    <input
                                        type="text"
                                        value={maxValue}
                                        onChange={(e) =>
                                            setMaxValue(
                                                Math.max(Number(e.target.value) || MAX, minValue + 1)
                                            )
                                        }
                                        placeholder="Rs.9,999"
                                        className="filter_price_input text-xs"
                                    />
                                </div>
                            </div>
                            <div className="slider_container">
                                <div className="slider_track" />
                                <div
                                    className="slider_range"
                                    style={{
                                        "--left": `${minPercent}%`,
                                        "--width": `${maxPercent - minPercent}%`,
                                    }}
                                />
                                <input
                                    type="range"
                                    min={MIN}
                                    max={MAX}
                                    value={minValue}
                                    onChange={(e) => {
                                        const val = Math.min(Number(e.target.value), maxValue - 1);
                                        setMinValue(val);
                                    }}
                                    className="slider_thumb"
                                />
                                <input
                                    type="range"
                                    min={MIN}
                                    max={MAX}
                                    value={maxValue}
                                    onChange={(e) => {
                                        const val = Math.max(Number(e.target.value), minValue + 1);
                                        setMaxValue(val);
                                    }}
                                    className="slider_thumb"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="filter_section">
                        <h3 className="filter_title text-sm">Colors</h3>
                        <div className="filter_color_grid">
                            {colors.map((label, idx) => (
                                <button
                                    key={idx}
                                    className="filter_color_item"
                                    style={{ backgroundColor: label }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <div className="apply_filter_btn_par">
                        <div className="apply_filter_btn">
                            <p>Show Results</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default FilterDrop;