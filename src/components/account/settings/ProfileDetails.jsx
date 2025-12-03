import Button from '@/components/common/Button';
import Input from '@/components/ui/Input';
import gsap from 'gsap';
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import React, { useEffect, useState } from 'react'

const ProfileDetails = ({ user }) => {
    const [expandDetailForm, setExpandDetailForm] = useState(false)

    useEffect(() => {
        if (expandDetailForm) {
            gsap.to(".details_form_paren", { height: "auto", paddingTop: "2rem", duration: 0.5, ease: "power2.out" })
        } else {
            gsap.to(".details_form_paren", { height: "0vh", paddingTop: 0, duration: 0.5, ease: "power2.out" })
        }
    }, [expandDetailForm])

    return (
        <>
            <div className="checkout_thin_line"></div>
            <div className="settings__block ">
                <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.name}</p>
                    <p>{user.dob}</p>
                </div>
                {!expandDetailForm && (
                    <div onClick={() => setExpandDetailForm(true)} className="settings__link">
                        <p>Edit My details</p>
                    </div>
                )}
                <div className="details_form_paren">
                    <form >
                        <div className="inp_paren">
                            <Input label="First Name" isRequired={true} />
                        </div>
                        <div className="inp_paren">
                            <Input label="Last Name" isRequired={true} />
                        </div>
                        <div className="inp_paren">
                            <Input label="Email" isRequired={true} />
                        </div>
                        <div className="inp_paren text-base">
                            <p className='text-sm '>Contact <span>*</span> </p>
                            <div className="settings_input">
                                <PhoneInput
                                    defaultCountry="in"
                                    className="delivery__phone_btn"
                                    inputClassName="delivery__input__phone"
                                    enableSearch={true}   // allows searching countries
                                    inputStyle={{ width: "100%" }} // full width like other inputs
                                    buttonStyle={{ border: "none" }} // clean flag dropdown
                                    placeholder="Enter phone number"
                                // value={`+${user?.countryCode?.replace("+", "") || "91"}${user?.phoneNumber || ""}`}
                                // onChange={(value, metadata) => {
                                //     const countryCode = `+${metadata?.country?.dialCode || 91
                                //         }`;
                                //     const numberOnly = value
                                //         ?.replace(countryCode, "")
                                //         .trim();

                                //     setValue("countryCode", countryCode, {
                                //         shouldValidate: true,
                                //     });
                                //     setValue("phoneNumber", numberOnly, {
                                //         shouldValidate: true,
                                //     });
                                // }}
                                />
                                <Input type="hidden"  />
                                <Input type="hidden" />
                            </div>
                            {/* <RiCheckLine className='check_icon' /> */}
                        </div>
                        <Button text={"Save"} />
                        <button type='button' onClick={()=>setExpandDetailForm(false)} className='cancel_form_btn'>
                            <p>
                                Cancel
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails