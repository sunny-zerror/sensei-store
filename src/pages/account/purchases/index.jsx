import { RiArrowRightSLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import AccountLeftSlide from '@/components/account/AccountLeftSlide'

const orders = [
    {
        id: "42027098022",
        status: "Delivered",
        date: "28/05/2025",
        amount: "Rs.2,798.00",
        items: [
            "https://image.hm.com/assets/hm/4a/ae/4aae9437be43aff53041a07ab9ebd8f248143cb9.jpg",
            "https://image.hm.com/assets/hm/f7/94/f794bd92691f83754967bb491746ee357dda3ad4.jpg",
            "https://image.hm.com/assets/hm/4a/ae/4aae9437be43aff53041a07ab9ebd8f248143cb9.jpg",
            "https://image.hm.com/assets/hm/f7/94/f794bd92691f83754967bb491746ee357dda3ad4.jpg",
        ],
        totalItems: 2,
    },
    {
        id: "42027098022",
        status: "Delivered",
        date: "28/05/2025",
        amount: "Rs.2,798.00",
        items: [
            "https://image.hm.com/assets/hm/4a/ae/4aae9437be43aff53041a07ab9ebd8f248143cb9.jpg",
            "https://image.hm.com/assets/hm/f7/94/f794bd92691f83754967bb491746ee357dda3ad4.jpg",
            "https://image.hm.com/assets/hm/4a/ae/4aae9437be43aff53041a07ab9ebd8f248143cb9.jpg",
            "https://image.hm.com/assets/hm/f7/94/f794bd92691f83754967bb491746ee357dda3ad4.jpg",
        ],
        totalItems: 2,
    },
]

const Index = () => {
    return (
        <div className="purchases_wrapper">

            <div className="purchases_leftSlide">
                <AccountLeftSlide />
            </div>

            <div className="purchases_breadcrumb">
                <Link href="/account">
                    <p className="purchases_breadcrumbLink text-sm">Account</p>
                </Link>
                <RiArrowRightSLine size={14} />
                <p className='text-sm'>Orders</p>
            </div>

            <div className="purchases_rightSection">
                <h3 className="purchases_heading text-3xl">My purchases</h3>

                <div className="purchases_ordersList">
                    {orders.map((order, index) => (
                        <div key={index} className="purchases_orderCard">
                            <p className='text-base'>Order: {order.id}</p>
                            <h3 className="purchases_status text-base">{order.status}</h3>

                            <div>
                                <p>{order.date}</p>
                                <h3 className="purchases_amount text-base">{order.amount}</h3>
                            </div>

                            <div className="purchases_itemsGrid">
                                {order.items.map((img, i) => (
                                    <div key={i} className="purchases_itemBox">
                                        <img
                                            className="purchases_itemImg"
                                            src={img}
                                            alt={`Order item ${i + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="purchases_orderFooter">
                                <p className="purchases_itemCount text-base">{order.totalItems} Items</p>
                                <p className="purchases_viewOrder text-sm">View Order</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index
