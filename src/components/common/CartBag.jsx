import { RiCloseLine } from '@remixicon/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'

const CartBag = ({ openCartBag, setOpenCartBag, headerOverlayRef }) => {

    useEffect(() => {
        if (window.innerWidth < 1020) {
            if (openCartBag) {
                const tedv = gsap.timeline();
                tedv.to(".cartBag_openBagParent", {
                    opacity: 1,
                    height: "35rem",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 1,
                        duration: 0.5,
                    }, "<+=0.1")

            } else {
                const dsc = gsap.timeline();
                dsc.to(".cartBag_openBagParent", {
                    opacity: 0,
                    height: 0,
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 0,
                        duration: 0.5,
                    }, "<+=0.1")
            }

        } else {
            if (openCartBag) {
                const tedv = gsap.timeline();
                tedv.to(".cartBag_openBagParent", {
                    opacity: 1,
                    right: "2rem",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 1,
                        duration: 0.5,
                    }, "<+=0.1")

            } else {
                const dsc = gsap.timeline();
                dsc.to(".cartBag_openBagParent", {
                    opacity: 0,
                    right: "-38rem",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 0,
                        duration: 0.5,
                    }, "<+=0.1")
            }

        }
    }, [openCartBag])

    return (
        <>
            <div className="cartBag_openBagParent">
                <div className="cartBag_bagHeader">
                    <div className="cartBag_bagHeaderLeft">
                        <p className="cartBag_bagTitle text-sm">Bag</p>
                        <p className="cartBag_bagCount text-sm">2</p>
                    </div>
                    <div
                        onClick={() => { setOpenCartBag(false) }}
                        className="cartBag_menuHeaderClose">
                        <RiCloseLine size={14} />
                    </div>
                </div>

                <div data-lenis-prevent className="cartBag_bagScroll">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="cartBag_bagItem">
                            <div className="cartBag_bagItemInner">
                                <div className="cartBag_bagImageWrapper">
                                    <img
                                        className="cartBag_bagImage"
                                        src="https://oflyn.fr/cdn/shop/files/Remorse-W-Back.webp?v=1741681377&width=580"
                                        alt=""
                                    />
                                </div>
                                <div className="cartBag_bagItemDetails">
                                    <div className="cartBag_bagItemTop">
                                        <div>
                                            <h3 className="cartBag_itemName text-base">Product Name</h3>
                                            <h3 className="cartBag_itemSize text-sm">Size</h3>
                                        </div>
                                        <h3 className='text-base'>₹ 599</h3>
                                    </div>
                                    <div className="cartBag_bagItemBottom">
                                        <div className="cartBag_qtyControl text-base">
                                            <p>−</p>
                                            <p>1</p>
                                            <p>+</p>
                                        </div>
                                        <div className="cartBag_removeButton">
                                            <p className="cartBag_removeText underline text-xs">Remove</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cartBag_bagFooter">
                    <div className="cartBag_totalRow text-xl">
                        <h3>Total</h3>
                        <h3>₹ 1,797</h3>
                    </div>
                    <div
                        onClick={() => { setOpenCartBag(false) }}
                        className="cartBag_checkoutButton">
                        <Link href="/checkout">
                            <p className='text-base uppercase'>Checkout</p>
                        </Link>
                    </div>
                    <div className="cartBag_continueShopping">
                        <p className="cartBag_continueText text-sm underline">Continue Shopping</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartBag