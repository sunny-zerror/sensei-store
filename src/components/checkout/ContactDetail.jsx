import { RiCheckLine } from '@remixicon/react'
import Link from 'next/link'
import React, { useState } from 'react'
import Input from '../ui/Input'
import Checkbox from '../ui/Checkbox'

const ContactDetail = ({ user, register, setValue, watch, errors }) => {

    return (
        <>
            <div className="checkout_user_details">
                <div className="checkout_user_detailsHeader">
                    <h3 className="checkout_subHeading text-base uppercase">Email</h3>
                    <Link scroll={false} href="/login">
                        <div className="settings__link">
                            <p className="underline uppercase text-sm">Login</p>
                        </div>
                    </Link>
                </div>

                 <Input
                    type="email"
                    placeholder="Email"
                    error={errors?.email}
                />

                <Checkbox
                    className="cards_inner_content"
                    label="Email me with news and offers"
                />

                {/* <div className=" text-base">
                                        <p>{user.email}</p>
                                        <p>{user.phone}</p>
                                        <p>{user.name}</p>
                                        <p>{user.dob}</p>
                                    </div> */}

                {/* <div className="checkout_thin_line"></div> */}
            </div>
        </>
    )
}

export default ContactDetail