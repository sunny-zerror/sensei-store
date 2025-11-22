import { RiHandbagLine, RiMenu2Fill, RiSearchLine } from '@remixicon/react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import MobileCategoryDrop from './MobileCategoryDrop'
import gsap from 'gsap'
import CartBag from '../CartBag'
import OpenSearch from './OpenSearch'

const MobileHeader = () => {
    const overlayRef = useRef(null);
    const searchInputRef = useRef(null);
    const [searchActive, setSearchActive] = useState(false);
    const [openCartBag, setOpenCartBag] = useState(false);

    const openMenu = () => {

        gsap.to(".mobile_overlay", {
            opacity: 1,
            duration: 0.5,
            ease: "custom",
            pointerEvents: "auto"
        });

        gsap.to(".mobileNav_openMenuParent", {
            height: "35rem",
            opacity: 1,
            duration: 0.5,
            ease: "custom"
        });

    };

    return (
        <>
            <div
                ref={overlayRef}
                style={{ opacity: 0, pointerEvents: "none" }}
                className="mobile_overlay"
            ></div>

            <div className="mobileHeader_container">
                <div className="mobileHeader_relativeWrapper">
                    <MobileCategoryDrop />

                    <OpenSearch searchActive={searchActive} headerOverlayRef={overlayRef} setSearchActive={setSearchActive} searchInputRef={searchInputRef} />

                    <CartBag openCartBag={openCartBag} setOpenCartBag={setOpenCartBag} headerOverlayRef={overlayRef} />
                    <div className="mobileHeader_headerBar">
                        <button onClick={openMenu} className="mobileHeader_menuButton glass">
                            <RiMenu2Fill size={16} />
                        </button>

                        <div className="mobileHeader_logo text-xl">
                            <Link scroll={false} href="/"><p>The Sensei&apos;s Store</p></Link>
                        </div>

                        <div className="mobileHeader_rightButtons">
                            <button
                                onClick={() => setSearchActive(true)}
                                className="mobileHeader_iconButton glass">
                                <RiSearchLine size={16} />
                            </button>
                            <button
                                onClick={() => { setOpenCartBag(true) }}
                                className="mobileHeader_iconButton glass">
                                <RiHandbagLine size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MobileHeader