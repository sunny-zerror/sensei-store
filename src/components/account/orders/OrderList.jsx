import Link from 'next/link'
import React from 'react'

const OrderList = ({ orders }) => {
    return (
        <div className="purchases_ordersList">
            {orders.map((order, index) => (
                <div key={index} className="purchases_orderCard">
                    <p className='text-base'>Order: {order.id}</p>
                    <h3 className="purchases_status text-base">{order.status}</h3>

                    <div>
                        <p>{order.date}</p>
                        <h3 className="purchases_amount text-base">Rs. {order.Totalamount}</h3>
                    </div>

                    <div className="purchases_itemsGrid">
                        {order.items.map((item, i) => (
                            <div key={i} className="purchases_itemBox">
                                <img
                                    className="purchases_itemImg"
                                    src={item.image}
                                    alt={`Order item ${i + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="purchases_orderFooter">
                        <p className="purchases_itemCount text-base">{order.items.length} Items</p>
                        <div className="category_header">
                            <Link scroll={false} href={`/account/order/${order.id}`} className="text-sm">
                                <p className="text-sm">View order</p>
                            </Link>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default OrderList