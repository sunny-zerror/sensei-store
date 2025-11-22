import Products from '@/utils/data/Products';
import { RiDeleteBinLine } from '@remixicon/react'
import Link from 'next/link';
import React from 'react'

const OrderSummaryBox = ({ user, quantity, setQuantity }) => {

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            <div className="">
                <h3 className="checkout_subHeading text-base uppercase"> Order Summary (2)</h3>
                <div className="summary_products_paren">
                    {Products.slice(0, 2).map((item, index) => (
                        <div key={index} className="checkout_item">
                            <div className="checkout_imgWrapper">
                                <Link scroll={false} href={`/products/${item.slug}`} className='checkout_productImg'>
                                    <img
                                        className="checkout_productImg"
                                        src={item.images[0]}
                                        alt=""
                                    />
                                </Link>
                            </div>

                            <div className="checkout_details">
                                <div className="checkout_topRow">
                                    <div>
                                        <p className="checkout_productName text-base">{item.name}</p>
                                        <p className="checkout_metaText text-xs ">Quantity: {quantity}</p>
                                        <p className="checkout_metaText text-xs ">Color - Gold</p>
                                        <p className="checkout_metaText text-xs ">Size -  14</p>
                                    </div>

                                    <p className="checkout_price text-base">₹ {item.price}</p>
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
                                        <RiDeleteBinLine size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default OrderSummaryBox