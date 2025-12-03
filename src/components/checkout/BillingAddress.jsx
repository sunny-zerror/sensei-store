import { RiCheckLine } from '@remixicon/react'
import React, { useState } from 'react'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { countriesData } from '../helpers/CountriesData';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import SelectField from '../ui/SelectField';

const BillingAddress = ({ user }) => {
    const [sameShippingBillingBtn, setSameShippingBillingBtn] = useState(false)

    return (
        <>
            <div className="checkout_user_details">

                <h3 className="checkout_subHeading text-lg uppercase">Billing Address</h3>

                {/* Same as shipping */}
                <Checkbox
                    className="cards_inner_content"
                    label="Use shipping address as billing address"
                />

                {/* Form */}
                <div className="checkout_address_form">

                    {/* First/Last */}
                    <div className="checkout_inp_flex">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                    </div>

                    {/* Phone + Address Type */}
                    <div className="checkout_inp_flex">
                        <div className="checkOut_input">
                            <PhoneInput
                                defaultCountry="in"
                                className="delivery__phone_btn"
                                inputClassName="delivery__input__phone"
                            />
                        </div>

                      <SelectField
                            name="shippingAddress.addressType"
                            required={true}
                            options={["Home", "Office", "Other"]}
                            placeholder="Address Type"
                        />
                    </div>

                    {/* City + ZIP */}
                    <div className="checkout_inp_flex">
                        <Input placeholder="City" />
                        <Input placeholder="ZIP Code" />
                    </div>

                    {/* Country + State */}
                    <div className="checkout_inp_flex">
                        <SelectField
                            name="shippingAddress.addressType"
                            required={true}
                            options={countriesData}
                            placeholder="Country"
                        />

                        <Input placeholder="State" />
                    </div>

                    {/* Address Lines */}
                    <Input placeholder="Address Line" />
                    <Input placeholder="Apartment, Suite, etc" />

                </div>
            </div>
        </>
    )
}

export default BillingAddress

