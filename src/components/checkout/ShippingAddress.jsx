import { RiCheckLine } from '@remixicon/react'
import React, { useEffect, useRef, useState } from 'react'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { countriesData } from '../helpers/CountriesData';
import Input from '../ui/Input';
import gsap from 'gsap';
import SelectField from '../ui/SelectField';
import Checkbox from '../ui/Checkbox';

const ShippingAddress = ({ user }) => {
    const expandFromRef = useRef(null)
    const [selectAddressBox, setSelectAddressBox] = useState(false)
    const [expandForm, setExpandForm] = useState(false)

    useEffect(() => {
        if (!expandFromRef.current) {
            gsap.set(expandFromRef.current, { height: 0 })
        }
        if (expandForm) {
            gsap.to(expandFromRef.current, { height: "auto", duration: 0.5, ease: "ease-in-out" })
        } else {
            gsap.to(expandFromRef.current, { height: 0, duration: 0.5, ease: "ease-in-out" })
        }
    }, [expandForm])


    return (
        <>
            <div className="checkout_user_details">
                <div className="checkout_user_detailsHeader">
                    <h3 className="checkout_subHeading text-base uppercase">Shipping Address</h3>
                    {
                        !expandForm && (
                            <div onClick={() => setExpandForm(true)} className="settings__link">
                                <p className="underline uppercase text-sm"> + Add New Address</p>
                            </div>
                        )
                    }
                    {
                        expandForm && (
                            <div onClick={() => setExpandForm(false)} className="settings__link">
                                <p className="underline uppercase text-sm"> Use saved address</p>
                            </div>
                        )
                    }
                </div>
                <div ref={expandFromRef} className="checkout_address_form">

                    {/* First + Last Name */}
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

                    {/* Address lines */}
                    <Input placeholder="Address Line" />
                    <Input placeholder="Apartment, Suite, etc" />
                </div>

                {/* Saved Address */}
                {
                    !expandForm && (
                        <div className="address_div">
                            <div onClick={() => setSelectAddressBox(!selectAddressBox)} className="address_box text-base">
                                <div className="address_box_check_box_div">
                                    <Checkbox/>
                                </div>

                                <p>{user.address.line1}</p>
                                <p>{user.address.line2}</p>
                                <p>{user.address.country}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default ShippingAddress
