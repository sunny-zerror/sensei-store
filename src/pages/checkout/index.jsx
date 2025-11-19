import { countriesData } from "@/components/helpers/CountriesData";
import { RiCheckLine, RiDeleteBinLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Checkout = () => {
    const [quantity, setQuantity] = useState(1);
    const [sameShippingBillingBtn, setSameShippingBillingBtn] = useState(false)

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
                                <h3 className="checkout_subHeading text-xl uppercase">Email</h3>
                                <Link href="/login">
                                    <div className="settings__link">
                                        <p>login</p>
                                    </div>
                                </Link>
                            </div>
                            <input type="email" placeholder="" className="checkOut_input" defaultValue={user.email} name="" id="" />

                            {/* <div className=" text-base">
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                                <p>{user.name}</p>
                                <p>{user.dob}</p>
                            </div> */}

                            {/* <div className="checkout_thin_line"></div> */}
                        </div>

                        <div className="checkout_user_details">
                            <h3 className="checkout_subHeading text-xl uppercase">Shipping Address</h3>
                            <div className="checkout_address_form">
                                <div className="checkout_inp_flex">
                                    <input type="text" placeholder="First Name" className="checkOut_input" name="" id="" />
                                    <input type="text" placeholder="Last Name" className="checkOut_input" name="" id="" />
                                </div>
                                <div className="checkout_inp_flex">
                                    <div className="checkOut_input">
                                        <PhoneInput
                                            defaultCountry="in"
                                            className="delivery__phone_btn"
                                            inputClassName="delivery__input__phone"
                                        />
                                        <input
                                            type="hidden"
                                        />
                                        <input type="hidden" />

                                    </div>
                                    <select className="checkOut_input" required defaultValue="">
                                        <option value="" disabled hidden className="placeholderOption">
                                            Address Type
                                        </option>

                                        {["Home", "Office", "Other"].map((item, index) => (
                                            <option value={item} key={`address-${index}`}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                <div className="checkout_inp_flex">
                                    <input type="text" placeholder="City" className="checkOut_input" name="" id="" />
                                    <input type="text" placeholder="ZIP Code" className="checkOut_input" name="" id="" />
                                </div>
                                <div className="checkout_inp_flex">
                                    <select className="checkOut_input" required defaultValue="">
                                        <option value="" disabled hidden className="placeholderOption">
                                            Country/Region
                                        </option>
                                        {countriesData?.map((item, index) => (
                                            <option value={item?.name || ""} key={`country-${index}`}>
                                                {item?.name || ""}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="text" placeholder="State" className="checkOut_input" name="" id="" />
                                </div>
                                <input type="text" placeholder="Address Line" className="checkOut_input" name="" id="" />
                                <input type="text" placeholder="Apartment, Suite, etc" className="checkOut_input" name="" id="" />


                            </div>
                            {/* <div className=" text-base">
                                <p>{user.address.line1}</p>
                                <p>{user.address.line2}</p>
                                <p>{user.address.country}</p>
                            </div> */}

                            {/* <div className="checkout_thin_line"></div> */}
                        </div>

                        <div className="checkout_user_details">
                            <h3 className="checkout_subHeading text-xl uppercase">Billing Address</h3>

                            <div className="cards_inner_content">
                                <div onClick={() => setSameShippingBillingBtn(!sameShippingBillingBtn)} className={`check_box_div center ${sameShippingBillingBtn ? "check_box_div_active" : ""} `}>
                                    {sameShippingBillingBtn && <RiCheckLine size={14} />}
                                </div>
                                <p>Use shipping address as billing address</p>
                            </div>

                            <div className="checkout_address_form">
                                <div className="checkout_inp_flex">
                                    <input type="text" placeholder="First Name" className="checkOut_input" name="" id="" />
                                    <input type="text" placeholder="Last Name" className="checkOut_input" name="" id="" />
                                </div>
                                <div className="checkout_inp_flex">
                                    <div className="checkOut_input">
                                        <PhoneInput
                                            defaultCountry="in"
                                            className="delivery__phone_btn"
                                            inputClassName="delivery__input__phone"
                                        />
                                        <input
                                            type="hidden"
                                        />
                                        <input type="hidden" />

                                    </div>
                                    <select className="checkOut_input" required defaultValue="">
                                        <option value="" disabled hidden className="placeholderOption">
                                            Address Type
                                        </option>

                                        {["Home", "Office", "Other"].map((item, index) => (
                                            <option value={item} key={`address-${index}`}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                <div className="checkout_inp_flex">
                                    <input type="text" placeholder="City" className="checkOut_input" name="" id="" />
                                    <input type="text" placeholder="ZIP Code" className="checkOut_input" name="" id="" />
                                </div>
                                <div className="checkout_inp_flex">
                                    <select className="checkOut_input" required defaultValue="">
                                        <option value="" disabled hidden className="placeholderOption">
                                            Country/Region
                                        </option>
                                        {countriesData?.map((item, index) => (
                                            <option value={item?.name || ""} key={`country-${index}`}>
                                                {item?.name || ""}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="text" placeholder="State" className="checkOut_input" name="" id="" />
                                </div>
                                <input type="text" placeholder="Address Line" className="checkOut_input" name="" id="" />
                                <input type="text" placeholder="Apartment, Suite, etc" className="checkOut_input" name="" id="" />


                            </div>
                            {/* <div className=" text-base">
                                <p>{user.address.line1}</p>
                                <p>{user.address.line2}</p>
                                <p>{user.address.country}</p>
                            </div> */}

                            {/* <div className="checkout_thin_line"></div> */}
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

                    <div className="checkout_summaryContainer">
                        <div className="checkout_summaryWrapper">
                            <div className="coupon_div">
                                <input type="text" placeholder="Coupon Code" className="checkout_couponInput" />
                                <button className="checkout_couponBtn text-base uppercase">Apply</button>
                            </div>

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
