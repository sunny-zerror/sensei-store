import Products from '@/utils/data/Products';
import { RiCloseLine, RiDeleteBinLine } from '@remixicon/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'
import CartItems from './CartItems';
import Button from '../common/Button';

const CartDrawer = ({ openCartBag, setOpenCartBag, headerOverlayRef }) => {

    useEffect(() => {
        if (window.innerWidth < 750) {
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
                if (window.lenis) window.lenis.stop();
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
                if (window.lenis) window.lenis.start();
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
                    {Products.length === 0 && (
                        <div className="empty_cart_box">
                            <p className="text-lg">There are currently no items in your bag.</p>
                        </div>
                    )}
                    {
                        Products.map((item, index) => (
                            <CartItems
                                key={index}
                                item={item}
                                index={index}
                                setOpenCartBag={setOpenCartBag}
                            />
                        ))
                    }
                </div>
                
                <div className="cartBag_bagFooter">
                    <div className="cartBag_totalRow text-lg">
                        <h3>Total</h3>
                        <h3>₹ 1,797</h3>
                    </div>

                    <Link scroll={false} href="/checkout">
                        <div
                            onClick={() => { setOpenCartBag(false) }}
                            className="">
                            <Button text={"Checkout"} />
                        </div>
                    </Link>

                    <div className="cartBag_continueShopping">
                        <p
                            onClick={() => { setOpenCartBag(false) }}
                            className="cartBag_continueText text-sm underline">Continue Shopping</p>
                    </div>
                </div>
            </div >

        </>
    )
}

export default CartDrawer