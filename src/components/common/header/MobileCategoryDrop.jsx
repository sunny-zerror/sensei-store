import NavCategory from '@/utils/data/NavCategory'
import { RiArrowDownSLine, RiCloseLine } from '@remixicon/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileCategoryDrop = () => {

    const [openCategory, setOpenCategory] = useState(null);
    const [openSub, setOpenSub] = useState({});

    const toggleCategory = (categoryIndex) => {
        if (openCategory === categoryIndex) {
            setOpenCategory(null);
            setOpenSub({});
        } else {
            setOpenCategory(categoryIndex);
            setOpenSub({});
        }
    };

    const toggleSub = (categoryIndex, type, index) => {
        setOpenSub((prev) => ({
            [categoryIndex]: {
                ...prev[categoryIndex],
                [type]: prev[categoryIndex]?.[type] === index ? null : index,
            },
        }));
    };

    const closeMenu = () => {
        gsap.to(".mobile_overlay", {
            opacity: 0,
            duration: 0.5,
            pointerEvents: "none",
            ease: "power2.in",
        });

        gsap.to(".mobileNav_openMenuParent", {
            height: "0vh",
            opacity: 0,
            duration: 0.5,
            ease: "custom"
        });
    };

    return (
        <>
            <div className="mobileNav_openMenuParent">
                <div className="mobileNav_menuHeader">
                    <p className=" text-lg mobileNav_menuHeaderTitle">Menu</p>
                    <div className="mobileNav_menuHeaderClose">
                        <RiCloseLine className="mobileNav_closeIcon" onClick={closeMenu} size={20} />
                    </div>
                </div>

                <div className="mobileNav_menuBackdrop">
                    <div data-lenis-prevent className="mobileNav_menuScroll">
                        {NavCategory.map((category, i) => (
                            <div key={category.id} className="mobileNav_category">
                                <div
                                    className="mobileNav_categoryTitle"
                                    onClick={() => toggleCategory(i)}
                                >
                                    <h3 className=" text-xl mobileNav_categoryHeading">{category.title}</h3>
                                    <RiArrowDownSLine
                                        size={18}
                                        className={`mobileNav_arrow ${openCategory === i ? "mobileNav_arrowOpen" : ""}`}
                                    />
                                </div>

                                <div className={`mobileNav_categoryContent ${openCategory === i ? "mobileNav_categoryOpen" : ""}`}>
                                    {category.heroSection?.map((hero, idx) => (
                                        <div key={idx} className="mobileNav_subSection">
                                            <div
                                                className="mobileNav_subTitle"
                                                onClick={() => toggleSub(i, "hero", idx)}
                                            >
                                                <p className=" text-base mobileNav_subHeading">{hero.title}</p>
                                                <RiArrowDownSLine
                                                    size={18}
                                                    className={`mobileNav_arrow ${openSub[i]?.hero === idx ? "mobileNav_arrowOpen" : ""}`}
                                                />
                                            </div>

                                            <div className={`mobileNav_subItems ${openSub[i]?.hero === idx ? "mobileNav_subOpen" : ""}`}>
                                                <div className="mobileNav_itemsList">
                                                    {hero.items.map((item, hIndex) => (
                                                        <div key={hIndex} className="mobileNav_itemRow">
                                                            <Link scroll={false} href={item.url} className="mobileNav_itemLink">
                                                                <p className='text-base'>
                                                                    {item.title}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {category.sections?.map((section, sIndex) => (
                                        <div key={sIndex} className="mobileNav_subSection">
                                            <div
                                                className="mobileNav_subTitle"
                                                onClick={() => toggleSub(i, "section", sIndex)}
                                            >
                                                <p className=" text-base mobileNav_subHeading">{section.title}</p>
                                                <RiArrowDownSLine
                                                    size={18}
                                                    className={`mobileNav_arrow ${openSub[i]?.section === sIndex ? "mobileNav_arrowOpen" : ""}`}
                                                />
                                            </div>

                                            <div className={`mobileNav_subItems ${openSub[i]?.section === sIndex ? "mobileNav_subOpen" : ""}`}>
                                                <div className="mobileNav_itemsList">
                                                    {section.items.map((item, secIndex) => (
                                                        <div key={secIndex} className="mobileNav_itemRow">
                                                            <Link scroll={false} href={item.url} className="mobileNav_itemLink">
                                                                <p className='text-base'>
                                                                    {item.title}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mobileNav_moreSection">
                        <Link scroll={false} onClick={closeMenu} href="/login">
                            <h3 className="mobileNav_moreItem text-2xl ">Login / Signup</h3>
                        </Link>
                        <Link scroll={false} onClick={closeMenu} href="/account">
                            <h3 className="mobileNav_moreItem text-2xl ">My Account</h3>
                        </Link>
                        <Link scroll={false} onClick={closeMenu} href="/account/purchases">
                            <h3 className="mobileNav_moreItem text-2xl ">My Orders</h3>
                        </Link>
                        <Link scroll={false} onClick={closeMenu} href="/account/wishlist">
                            <h3 className="mobileNav_moreItem text-2xl ">My Wishlist</h3>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MobileCategoryDrop