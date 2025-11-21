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

                <div className="checkout_row text-lg">
                    <p className="checkout_textBase">Subtotal</p>
                    <p className="checkout_textBase">₹ {quantity * 999}</p>
                </div>

                <div className="checkout_borderRow text-base">
                    <p className="checkout_textSm">Shipping Charge</p>
                    <p className="checkout_textSm">₹ 50</p>
                </div>

                <div className="checkout_row semibold text-2xl">
                    <p className="checkout_subtotalText">Total Amount</p>
                    <p className="checkout_subtotalValue">₹ {(quantity * 999) + 50}</p>
                </div>
                
                <div className="checkout_btn text-base uppercase">
                    <BlackBtn text={"Pay Now"} />
                </div>


            </div>
        </>
    )
}

export default AmountTotalBox