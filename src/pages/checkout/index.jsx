import { RiDeleteBinLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";

const Checkout = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const user = {
        email: "tiwarirohit159@gmail.com",
        phone: "+91 7039446638",
        name: "Rohit Tiwari",
        dob: "21/10/2000",
        address: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        subscriptions: {
            newsletter: "Not subscribed",
            directMail: "Subscribed",
        },
    }

    return (
        <div>
            <div className="checkout_section">

                <h3 className=" text-3xl checkout_heading">Checkout</h3>

                <div className="checkout_Wrapper">

                    <div className="checkout_leftContainer">

                        <div className="checkout_user_details">
                            <div className="checkout_user_detailsHeader">
                                <h3 className="checkout_subHeading text-xl uppercase">Your Details</h3>
                                <Link href="/account/settings">
                                <div className="settings__link">
                                    <p>Edit details</p>
                                </div>
                                </Link>
                            </div>
                            <div className=" text-base">
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                                <p>{user.name}</p>
                                <p>{user.dob}</p>
                            </div>

                            <div className="checkout_thin_line"></div>
                        </div>

                        <div className="checkout_user_details">
                            <h3 className="checkout_subHeading text-xl uppercase">Shipping Address</h3>
                            <div className=" text-base">
                                <p>{user.address.line1}</p>
                                <p>{user.address.line2}</p>
                                <p>{user.address.country}</p>
                            </div>

                            <div className="checkout_thin_line"></div>
                        </div>

                        <div className="">
                            <h3 className="checkout_subHeading text-xl uppercase"> Order Summary</h3>
                            {[1, 2].map((item, index) => (
                                <div key={index} className="checkout_item">

                                    <div className="checkout_imgWrapper">
                                        <img
                                            className="checkout_productImg"
                                            src="https://image.hm.com/content/dam/Hm_Member_and_Loyalty/seasonal-images-loyalty/AW25/1012a_101_09_020_4x5.jpg?imwidth=1536"
                                            alt=""
                                        />
                                    </div>

                                    <div className="checkout_details">
                                        <div className="checkout_topRow">
                                            <div>
                                                <p className="checkout_productName text-xl">Product Name</p>
                                                <p className="checkout_metaText text-base ">Quantity: {quantity}</p>
                                                <p className="checkout_metaText text-base ">Size: M</p>
                                                <p className="checkout_metaText text-base ">Color: Blue</p>
                                            </div>

                                            <p className="checkout_price text-xl">₹ 999</p>
                                        </div>

                                        <div className="checkout_bottomRow">

                                            <div className="checkout_quantityBox">
                                                <button onClick={decrement}><p>−</p></button>
                                                <p>{quantity}</p>
                                                <button onClick={increment}><p>+</p></button>
                                            </div>

                                            <button className="checkout_deleteBtn">
                                                <RiDeleteBinLine size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Summary Box */}
                    <div className="checkout_summaryContainer">
                        <div className="checkout_summaryWrapper">

                            <div className="checkout_row text-xl">
                                <p className="checkout_textBase">Total Charge</p>
                                <p className="checkout_textBase">₹ {quantity * 999}</p>
                            </div>

                            <div className="checkout_borderRow text-base">
                                <p className="checkout_textSm">Shipping Charge</p>
                                <p className="checkout_textSm">₹ 50</p>
                            </div>

                            <div className="checkout_row text-2xl">
                                <p className="checkout_subtotalText">Subtotal</p>
                                <p className="checkout_subtotalValue">₹ {(quantity * 999) + 50}</p>
                            </div>

                            <div>
                                <img
                                    className="checkout_paymentImg"
                                    src="https://apexhearthospital.com/wp-content/uploads/2025/05/payment-logo-icons-1024x272-1.png"
                                    alt=""
                                />
                                <p className="checkout_paymentNote text-sm">
                                    * All payments are secured and encrypted.
                                </p>
                            </div>

                            <button className="checkout_btn text-base uppercase">Pay Now</button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Checkout;
