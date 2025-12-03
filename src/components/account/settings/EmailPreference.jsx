import Button from '@/components/common/Button'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const EmailPreference = ({ user }) => {

    const [expandSubscribeForm, setExpandSubscribeForm] = useState(false)

    useEffect(() => {
        if (expandSubscribeForm) {
            gsap.to(".subscription_form_paren", { height: "auto", paddingTop: "2rem", duration: 0.5, ease: "power2.out" })
        } else {
            gsap.to(".subscription_form_paren", { height: "0vh", paddingTop: 0, duration: 0.5, ease: "power2.out" })
        }
    }, [expandSubscribeForm])

    return (
        <>
            <div className="checkout_thin_line"></div>
            <div className="settings__block">
                <div>
                    <p>Newsletter Subscription - {user.subscriptions.newsletter}</p>
                    <p>Direct Mail Marketing - {user.subscriptions.directMail}</p>
                </div>
                {!expandSubscribeForm && (
                    <div onClick={() => setExpandSubscribeForm(true)} className="settings__link">
                        <p>Edit Subscription</p>
                    </div>
                )}
                <div className="subscription_form_paren">
                    <div className="subscription_div">
                        <p> Newsletter</p>
                        <div className="subscription_btn_paren">

                            {
                                user.subscriptions.newsletter === "Subscribed" ?
                                    <button className='subscribe_btn'>
                                        <p className='text-xs'>
                                            Remove
                                        </p>
                                    </button>
                                    :
                                    <button className='unSubscribe_btn'>
                                        <p className='text-xs'>
                                            Add
                                        </p>
                                    </button>
                            }
                        </div>
                    </div>
                    <div className="subscription_div">
                        <p> Direct Mail Marketing</p>
                        <div className="subscription_btn_paren">

                            {
                                user.subscriptions.directMail === "Subscribed" ?
                                    <button className='subscribe_btn'>
                                        <p className='text-xs'>
                                            remove
                                        </p>
                                    </button>
                                    :
                                    <button className='unSubscribe_btn'>
                                        <p className='text-xs'>
                                            add
                                        </p>
                                    </button>
                            }
                        </div>
                    </div>

                    <Button text={"Save"} />

                    <button onClick={() => setExpandSubscribeForm(false)} className='cancel_form_btn'>
                        <p>
                            Cancel
                        </p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default EmailPreference