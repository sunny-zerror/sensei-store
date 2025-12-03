import Button from '@/components/common/Button'
import { countriesData } from '@/components/helpers/CountriesData'
import Input from '@/components/ui/Input'
import SelectField from '@/components/ui/SelectField'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const AddressBlock = ({ user }) => {

    const [expandAddressForm, setExpandAddressForm] = useState(false)

    useEffect(() => {
        if (expandAddressForm) {
            gsap.to(".address_form_paren", { height: "auto", paddingTop: "2rem", duration: 0.5, ease: "power2.out" })
        } else {
            gsap.to(".address_form_paren", { height: "0vh", paddingTop: 0, duration: 0.5, ease: "power2.out" })
        }
    }, [expandAddressForm])

    return (
        <>
            <div className="checkout_thin_line"></div>
            <div className="settings__block ">
                <div>
                    <p>{user.address.line1}</p>
                    <p>{user.address.line2}</p>
                    <p>{user.address.country}</p>
                </div>
                {!expandAddressForm && (
                    <div onClick={() => setExpandAddressForm(true)} className="settings__link">
                        <p>Edit Address</p>
                    </div>
                )}


                <div className="address_form_paren">
                    <form >
                        {/* FIRST NAME */}
                        <div className="inp_paren">
                            <Input
                                label="First Name"
                                isRequired
                            />
                        </div>

                        {/* LAST NAME */}
                        <div className="inp_paren">
                            <Input
                                label="Last Name"
                                isRequired
                            />
                        </div>

                        {/* PHONE */}
                        <div className="inp_paren">
                            <p className="text-sm">Contact <span>*</span></p>
                            <div className="settings_input">
                                <PhoneInput
                                    defaultCountry="in"
                                    inputClassName="delivery__input__phone"
                                // onChange={(value, meta) => {
                                //     const countryCode = `+${meta.country.dialCode}`;
                                //     const number = value.replace(countryCode, "").trim();

                                //     setValue("countryCode", countryCode, { shouldValidate: true });
                                //     setValue("phone", number, { shouldValidate: true });
                                // }}
                                />

                                <Input type="hidden" />
                                <Input type="hidden" />
                            </div>
                        </div>

                        {/* ADDRESS LINE 1 */}
                        <div className="inp_paren">
                            <Input
                                label="Address Line 1"
                                isRequired
                            />
                        </div>

                        {/* ADDRESS LINE 2 */}
                        <div className="inp_paren">
                            <Input
                                label="Address Line 2 (Optional)"
                            />
                        </div>

                        {/* CITY */}
                        <div className="inp_paren">
                            <Input
                                label="City"
                                isRequired
                            />
                        </div>

                        {/* STATE */}
                        <div className="inp_paren">
                            <Input
                                label="State"
                                isRequired
                            />
                        </div>

                        {/* COUNTRY */}
                        <div className="inp_paren">
                            <SelectField
                                label={"Country"}
                                name="shippingAddress.addressType"
                                isRequired
                                options={countriesData}
                                placeholder="Country"
                            />
                        </div>

                        {/* PINCODE */}
                        <div className="inp_paren">
                            <Input
                                label="Area Pincode"
                                type="number"
                                isRequired
                            />
                        </div>

                        {/* ADDRESS TYPE */}
                        <div className="inp_paren">
                            <SelectField
                                label={"Address Type"}
                                name="shippingAddress.addressType"
                                isRequired
                                options={["Home", "Office", "Other"]}
                                placeholder="Address Type"
                            />

                        </div>

                        <Button text="Save" />

                        <button
                            type="button"
                            onClick={() => setExpandAddressForm(false)}
                            className="cancel_form_btn"
                        >
                            Cancel
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default AddressBlock