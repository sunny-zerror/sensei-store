import Products from '@/utils/data/Products'
import { RiCloseLine, RiSearchLine } from '@remixicon/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

const tags = ["Naruto", "Dragon Ball", "One Piece", "Attack on Titan", "Demon Slayer", "My Hero Academia", "Bottles"]

const OpenSearch = ({ searchActive, setSearchActive, headerOverlayRef, searchInputRef }) => {

    useEffect(() => {
        if (window.innerWidth < 1024) return
        if (searchActive) {
            gsap.delayedCall(0.8, () => {
                searchInputRef.current?.focus();
            });

            const openTl = gsap.timeline();

            openTl
                .set(".desktop_header_left", { width: 0 })
                .to(".header_logo", {
                    opacity: 0,
                    pointerEvents: "none",
                    duration: 0.1
                }, "<+=0.01")
                .to(".desktop_header_search_btn", {
                    width: "100vw",
                    ease: "expo.out",
                    duration: .6,
                }, ">")
                .to(".desktop_header_nav_btn", {
                    width: 0,
                    duration: 0.1,
                    ease: "expo.out",
                }, "<+=0.1")
                .set(".desktop_header_left, .desktop_header_right", { gap: 0 }, ">")
                .set(".opensearch_nav_sub_btn_search_icon_b", { display: "none" }, ">")
                .set(".opensearch_nav_sub_btn_search_icon, .opensearch_nav_sub_input", {
                    display: "initial",
                }, ">")
                .to(headerOverlayRef.current, {
                    opacity: 1,
                    duration: 0.3,
                }, "<+=0.1")
                .to(".opensearch_nav_sub", {
                    height: "2.75rem",
                    duration: 0.1,
                    ease: "power2.out",
                    backgroundColor: "#f6f6f6",
                }, "<+=0.3")
                .to(".opensearch_expand_search", {
                    paddingTop: "1rem",
                    height: "25vw",
                    ease: "power2.out",
                    duration: 0.3,
                }, ">")

            return () => openTl.kill();
        } else {
            const closeTl = gsap.timeline();

            closeTl
                .to(".opensearch_expand_search", {
                    paddingTop: 0,
                    height: 0,
                    ease: "power2.inOut",
                    duration: 0.3,
                })
                .to(".opensearch_nav_sub", {
                    height: "1.75rem",
                    backgroundColor: "#ffffff43",
                    ease: "power2.inOut",
                    duration: 0.2,
                }, "<+=0.1")
                .to(headerOverlayRef.current, {
                    opacity: 0,
                    duration: 0.3,
                }, "<+=0.1")
                .set(".opensearch_nav_sub_btn_search_icon, .opensearch_nav_sub_input", {
                    display: "none",
                }, ">")
                .set(".opensearch_nav_sub_btn_search_icon_b", {
                    display: "initial",
                }, ">")
                .set(".desktop_header_left, .desktop_header_right", { gap: "0.25rem" }, ">")
                .to(".desktop_header_search_btn", {
                    width: "10vw",
                    ease: "expo.inOut",
                    duration: 0.5,
                }, ">")
                .set(".desktop_header_nav_btn", {
                    width: "fit-content",
                }, "<+=0.15")
                .set(".desktop_header_left", {
                    width: "50%",
                })
                .to(".header_logo", {
                    opacity: 1,
                    pointerEvents: "auto",
                    duration: 0.5
                }, "<+=0.01")

            return () => closeTl.kill();
        }
    }, [searchActive]);


    useEffect(() => {
        if (window.innerWidth > 1020) return
        if (searchActive) {
            gsap.delayedCall(0.8, () => {
                searchInputRef.current?.focus();
            });

            gsap.to(".opensearch_expand_search", {
                height: "35rem",
                ease: "power2.out",
                duration: 0.3,
            })

            gsap.to(headerOverlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                duration: 0.3,
            })

        } else {
            gsap.to(".opensearch_expand_search", {
                height: "0",
                ease: "power2.out",
                duration: 0.3,
            })
            gsap.to(headerOverlayRef.current, {
                opacity: 0,
                duration: 0.3,
            })
        }
    }, [searchActive])


    return (
        <>
            <div className="opensearch_expand_search">
                <div className="mobile_input_paren">

                    <div className="mobile_inp_classname_searchHeader">
                        <div className="mobile_inp_classname_searchLeft">
                            <RiSearchLine size={14} />
                            <input
                                ref={searchInputRef}
                                className="mobile_inp_classname_searchInput"
                                type="text"
                                placeholder="Search Products"
                            />
                        </div>

                        <div className="mobile_inp_classname_menuHeaderClose">
                            <p className=" text-xs mobile_inp_classname_clearText">Clear</p>
                            <RiCloseLine
                                onClick={() => setSearchActive(false)}
                                className="mobile_inp_classname_closeIcon"
                                size={20}
                            />
                        </div>
                    </div>

                </div>
                <div className="opensearch_search_content">
                    <div className="opensearch_quick_search">
                        <h3 className='text-lg'>Quick Search</h3>
                        <div className="opensearch_tags">
                            {tags?.map(item => (
                                <button key={item}>
                                    <p className='text-sm'>{item}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="opensearch_trending">
                        <h3 className='text-lg'>Trending Products</h3>
                        <div className="opensearch_scroll_products">
                            {Products?.map((data, i) => (
                                <div key={i} className="opensearch_product_card">
                                    <div className="opensearch_product_img">
                                        <img src={data.images[0]} alt={data.name} />
                                    </div>
                                    <h3 className=" text-xs opensearch_product_name">{data.name}</h3>
                                    <h3 className=" text-xxs opensearch_product_price">{data.price}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OpenSearch