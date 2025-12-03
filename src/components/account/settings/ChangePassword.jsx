import Button from '@/components/common/Button'
import Input from '@/components/ui/Input'
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const ChangePassword = () => {

    const [expandPasswordForm, setExpandPasswordForm] = useState(false)
    const [visible, setVisible] = useState({
        currentPassword: false,
        newPassword: false,
        renewPassword: false,
    });

    useEffect(() => {
        if (expandPasswordForm) {
            gsap.to(".password_form_paren", { height: "auto", paddingTop: "2rem", duration: 0.5, ease: "power2.out" })
        } else {
            gsap.to(".password_form_paren", { height: "0vh", paddingTop: 0, duration: 0.5, ease: "power2.out" })
        }
    }, [expandPasswordForm])

    return (
        <>
            <div className="checkout_thin_line"></div>
            <div className="settings__block ">
                {expandPasswordForm && (
                    <p>Change Your Password </p>
                )}
                {!expandPasswordForm && (
                    <div onClick={() => setExpandPasswordForm(true)} className="settings__link">
                        <p>Change Password</p>
                    </div>
                )}
                <div className="password_form_paren">
                    <form >
                        <div className="inp_paren text-base">
                            <Input type={visible?.currentPassword ? "text" : "password"} label="Enter Current Password" isRequired={true}  />
                            {visible?.currentPassword ? (
                                <RiEyeLine size={18} className="check_icon" onClick={() => onVisibleChange("currentPassword")} />
                            ) : (
                                <RiEyeOffLine size={18} className="check_icon" onClick={() => onVisibleChange("currentPassword")} />
                            )}
                        </div>
                        <div className="inp_paren text-base">
                            <Input type={visible?.newPassword ? "text" : "password"} label="Enter New Password" isRequired={true}  />
                            {visible?.newPassword ? (
                                <RiEyeLine size={18} className="check_icon" onClick={() => onVisibleChange("newPassword")} />
                            ) : (
                                <RiEyeOffLine size={18} className="check_icon" onClick={() => onVisibleChange("newPassword")} />
                            )}
                        </div>
                        <div className="inp_paren text-base">
                            <Input type={visible?.renewPassword ? "text" : "password"} label="Confirm New Password" isRequired={true}  />
                            {visible?.renewPassword ? (
                                <RiEyeLine size={18} className="check_icon" onClick={() => onVisibleChange("renewPassword")} />
                            ) : (
                                <RiEyeOffLine size={18} className="check_icon" onClick={() => onVisibleChange("renewPassword")} />
                            )}
                        </div>
                        <Button text="Save"  />
                        <button type='button' onClick={() => setExpandPasswordForm(false)} className='cancel_form_btn'>
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

export default ChangePassword