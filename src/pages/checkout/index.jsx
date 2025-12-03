import BillingAddress from "@/components/checkout/BillingAddress";
import ContactDetail from "@/components/checkout/ContactDetail";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import React, { useState } from "react";
import OrderSummary from "@/components/checkout/OrderSummary";


const Checkout = () => {
    const [quantity, setQuantity] = useState(1);

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
        <>
            <div className="checkout_section">
                <div className="checkout_section_inner">
                <h3 className=" text-3xl uppercase checkout_heading">Checkout</h3>

                <div className="checkout_Wrapper">

                    <div className="checkout_leftContainer">

                        <ContactDetail user={user} />

                        <ShippingAddress user={user} />

                        <BillingAddress user={user} />


                    </div>

                    <div className="checkout_summaryContainer">

                        <OrderSummary user={user} quantity={quantity} setQuantity={setQuantity}  />

                    </div>

                </div>
                </div>

            </div>

        </>
    );
};

export default Checkout;
