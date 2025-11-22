import React from 'react'
import OrderSummaryBox from './OrderSummaryBox'
import BlackBtn from '../buttons/BlackBtn'

const AmountTotalBox = ({ user, setQuantity, quantity }) => {
    return (
        <>
            <div className="checkout_summaryWrapper">
                <OrderSummaryBox user={user} quantity={quantity} setQuantity={setQuantity} />

                <div className="coupon_div">
                    <input type="text" placeholder="Discount Code" className="checkout_couponInput" />
                    <div className="checkout_couponBtn text-base uppercase">
                        <BlackBtn text={"Apply"} />
                    </div>
                </div>

                <div className=" subtotal_div checkout_row ">
                    <h3 className="checkout_textBase text-base uppercase">Subtotal</h3>
                    <h3 className="checkout_textBase text-base">₹ {quantity * 999}</h3>
                </div>

                <div className="checkout_borderRow  uppercase ">
                    <h3 className="checkout_textSm text-base">Shipping Charge</h3>
                    <h3 className="checkout_textSm text-base">₹ 50</h3>
                </div>

                <div className="checkout_row semibold text-lg">
                    <h3 className="checkout_subtotalText uppercase">Total </h3>
                    <h3 className="checkout_subtotalValue">₹ {(quantity * 999) + 50}</h3>
                </div>
                
                <div className="checkout_btn text-base uppercase">
                    <BlackBtn text={"Pay Now"} />
                </div>


            </div>
        </>
    )
}

export default AmountTotalBox