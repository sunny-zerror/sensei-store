import Products from '@/utils/data/Products';
import { RiCloseLine, RiDeleteBinLine } from '@remixicon/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'
import BlackBtn from '../buttons/BlackBtn';

const CartBag = ({ openCartBag, setOpenCartBag, headerOverlayRef }) => {

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
                    {Products.map((item, index) => (
                        <div key={index} className="cartBag_bagItem">
                            <div className="cartBag_bagItemInner">
                                <div className="cartBag_bagImageWrapper">
                                    <Link scroll={false} onClick={() => setOpenCartBag(false)} key={index} href={`/products/${item.slug}`} className='cartBag_bagImage'>
                                        <img
                                            className="cartBag_bagImage"
                                            src={item.images[0]}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="cartBag_bagItemDetails">
                                    <div className="cartBag_bagItemTop">
                                        <div>
                                            <h3 className="cartBag_itemName text-sm">{item.name}</h3>
                                            <p className="cartBag_itemSize text-xs">Color - Gold</p>
                                            <p className="cartBag_itemSize text-xs">Size - 16</p>

                                        </div>
                                        <h3 className='text-base'>₹ {item.price}</h3>
                                    </div>
                                    <div className="cartBag_bagItemBottom">
                                        <div className="cartBag_qtyControl text-sm">
                                            <div className="cartBag_qtyControl_dec">
                                                <p>−</p>
                                            </div>
                                            <p>1</p>
                                            <div className="cartBag_qtyControl_inc">
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div className="cartBag_removeButton">
                                            <RiDeleteBinLine size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                            <BlackBtn text={"Checkout"} />
                        </div>
                    </Link>
                    <div className="cartBag_continueShopping">
                        <p
                            onClick={() => { setOpenCartBag(false) }}
                            className="cartBag_continueText text-sm underline">Continue Shopping</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartBag