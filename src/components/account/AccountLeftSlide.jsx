import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const AccountLeftSlide = () => {
    const router = useRouter();

    return (
        <div>
            <div className="accountLeftSlide">

                <div className="accountLeftSlide_pointsSection text-base">
                    <div>
                        <h3 className="accountLeftSlide_text15">Welcome, Sunny</h3>
                        <p className="accountLeftSlide_text15">
                            200 Points to bonus reward
                        </p>
                    </div>

                    <div>
                        <div className="accountLeftSlide_progressBar"></div>
                        <p className="accountLeftSlide_text15">800 Points to Plus Status</p>
                        <p className="accountLeftSlide_text15">
                            Points: <span className="accountLeftSlide_highlight">0 / 800</span>
                        </p>
                    </div>

                    <p className="accountLeftSlide_text15">
                        Member ID: 115513509154682
                    </p>
                </div>

                <div className="accountLeftSlide_nav">
                    <div className="accountLeftSlide_navItem_hidden">
                        <Link scroll={false} href={"/account"}>
                            <p
                                className={`accountLeftSlide_navLink text-2xl ${router.pathname === "/account" ? "active" : ""
                                    }`}
                            >
                                Account & Rewards
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link scroll={false} href={"/account/wishlist"}>
                            <p
                                className={`accountLeftSlide_navLink text-2xl ${router.pathname === "/account/wishlist" ? "active" : ""
                                    }`}
                            >
                                Wishlist
                            </p>
                        </Link>
                    </div>

                    <div>
                        <Link scroll={false} href={"/account/purchases"}>
                            <p
                                className={`accountLeftSlide_navLink text-2xl ${router.pathname === "/account/purchases" ? "active" : ""
                                    }`}
                            >
                                orders
                            </p>
                        </Link>
                    </div>

                    <div>
                        <Link scroll={false} href={"/account/settings"}>
                            <p
                                className={`accountLeftSlide_navLink text-2xl ${router.pathname === "/account/settings" ? "active" : ""
                                    }`}
                            >
                                Account settings
                            </p>
                        </Link>
                    </div>
                </div>

                <div>
                    <button className="accountLeftSlide_signoutBtn">
                        <p className="accountLeftSlide_signoutText text-base">sign out</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AccountLeftSlide
