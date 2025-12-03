import AccountBreadcrumb from '@/components/account/AccountBreadcrumb'
import AddressBlock from '@/components/account/settings/AddressBlock'
import ChangePassword from '@/components/account/settings/ChangePassword'
import EmailPreference from '@/components/account/settings/EmailPreference'
import ProfileDetails from '@/components/account/settings/ProfileDetails'
import AccountLayout from '@/components/layouts/AccountLayout'
import React, { useState } from 'react'

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

const Settings = () => {

    return (
        <AccountLayout>
            <AccountBreadcrumb title={"Setting"} />
            <div className="settings__content">
                <h3 className="settings__title text-3xl">Settings</h3>

                <div className="settings__sections text-base">
                    {/* User details */}
                    <ProfileDetails user={user} />

                    {/* Address */}
                    <AddressBlock user={user} />

                    {/* Subscriptions */}
                    <EmailPreference user={user} />

                    {/* Change Password */}
                    <ChangePassword />

                    {/* Sign out */}
                    <div className="checkout_thin_line"></div>
                    <div className="settings__link">
                        <p>Sign out</p>
                    </div>
                </div>
            </div>
        </AccountLayout>
    )
}

export default Settings
