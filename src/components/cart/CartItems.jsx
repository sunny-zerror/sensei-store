import { RiDeleteBinLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const CartItems = ({ item, index, setOpenCartBag }) => {
    return (
        <>
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
        </>
    )
}

export default CartItems