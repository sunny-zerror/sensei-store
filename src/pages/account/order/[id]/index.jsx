import React from 'react';
import AccountLeftSlide from '@/components/account/AccountLeftSlide';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { RiArrowRightSLine, RiDeleteBinLine } from '@remixicon/react';

const orders = [
    {
        id: "42027098022",
        status: "Delivered",
        userName: "Sunny Kurmi",
        userEmail: "sunny@gmail.com",
        orderDate: "28/05/2025",
        deliveryDate: "31/05/2025",
        Totalamount: "2,798",
        paymentMethod: "Credit/Debit Card",
        billingAddress: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        shippingAddress: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        items: [
            {
                id: 1,
                title: "Product 1",
                image: "https://oflyn.fr/cdn/shop/files/Remorse-W-Back.webp?v=1741681377&width=580",
                price: "1,000",
                quantity: 2,
            },
            {
                id: 2,
                title: "Product 2",
                image: "https://oflyn.fr/cdn/shop/files/Remorse-M-Front.webp?v=1741681377&width=832",
                price: "1,800",
                quantity: 2,
            },
        ],
    },
    {
        id: "42027098023",
        status: "Delivered",
        userName: "Sunny Kurmi",
        userEmail: "sunny@gmail.com",
        orderDate: "28/05/2025",
        deliveryDate: "31/05/2025",
        Totalamount: "2,798",
        paymentMethod: "Credit/Debit Card",
        billingAddress: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        shippingAddress: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        billingAddress: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        shippingAddress: {
            line1: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King",
            line2: "400050, Mumbai",
            country: "India",
        },
        items: [
            {
                id: 1,
                title: "Product 1",
                image: "https://oflyn.fr/cdn/shop/files/bucketstub.webp?v=1741614525&width=1920",
                price: "1,000",
                quantity: 2,
            },
            {
                id: 2,
                title: "Product 2",
                image: "https://oflyn.fr/cdn/shop/files/Amnesia-Focus.webp?v=1741616541&width=1920",
                price: "1,800",
                quantity: 2,
            },
            {
                id: 3,
                title: "Product 3",
                image: "https://oflyn.fr/cdn/shop/files/AmnesiaB-W-Front.webp?v=1741616505&width=832",
                price: "1,800",
                quantity: 2,
            },
            {
                id: 4,
                title: "Product 4",
                image: "https://oflyn.fr/cdn/shop/files/AmnesiaB-W-Side.webp?v=1741616505&width=580",
                price: "1,800",
                quantity: 2,
            },
        ],
    },
]

const OrderDetail = () => {

    const id = useParams();
    const order = orders.find((order) => order.id === id?.id);

    return (
        <div>
            <div className="account_wrapper">
                <div className="settings__left">
                    <AccountLeftSlide />
                </div>
                <div className="settings__breadcrumb">
                    <Link scroll={false} href={"/orders"}>
                        <p className="settings__breadcrumb_faded text-sm">Orders</p>
                    </Link>
                    <RiArrowRightSLine size={14} />
                    <p className='text-sm'>order details</p>
                </div>

                <div className="account_rightSection">

                    <h3 className="purchases_heading text-3xl">Order details</h3>

                    <div className="purchases_ordersList">
                        <div className="">
                            <h3 className='uppercase text-lg'>order number</h3>
                            <p className='text-base'>{id?.id}</p>
                        </div>

                        <div className="">
                            <h3 className='uppercase text-lg'>order date</h3>
                            <p className='text-base'>{order?.orderDate}</p>
                        </div>
                        <div className="">
                            <h3 className='uppercase text-lg'>Delivery date</h3>
                            <p className='text-base'>{order?.deliveryDate}</p>
                        </div>

                    </div>

                    <div className="checkout_thin_line"></div>

                    <div className="purchases_ordersList">
                        <div className="">
                            <h3 className='uppercase text-lg'>Amount Paid</h3>
                            <p className='text-base'>Rs. {order?.Totalamount}</p>
                        </div>
                        <div className="">
                            <h3 className='uppercase text-lg'>Payment Method</h3>
                            <p className='text-base'>{order?.paymentMethod}</p>
                        </div>

                        <div className="">
                            <h3 className='uppercase text-lg'>Billing details</h3>
                            <p className='text-base'>{order?.userName}</p>
                            <p className='text-base'>{order?.userEmail}</p>
                        </div>

                        <div className="">
                            <h3 className='uppercase text-lg'>Billing Address</h3>
                            <p className='text-base'>{order?.billingAddress?.line1}</p>
                            <p className='text-base'>{order?.billingAddress?.line2}</p>
                            <p className='text-base'>{order?.billingAddress?.country}</p>
                        </div>
                        <div className="">
                            <h3 className='uppercase text-lg'>Shipping Address</h3>
                            <p className='text-base'>{order?.shippingAddress?.line1}</p>
                            <p className='text-base'>{order?.shippingAddress?.line2}</p>
                            <p className='text-base'>{order?.shippingAddress?.country}</p>
                        </div>
                    </div>

                    <div className="checkout_thin_line"></div>

                    <div className="purchases_ordersList">
                        <div className="">
                            <h3 className='uppercase text-lg'>Order summary</h3>
                            <div className="orderDetails_cartBag">
                                {order?.items.map((item, index) => (
                                    <div key={index} className="order_detailsBagItem">
                                        <div className="cartBag_bagItemInner">
                                            <div className="cartBag_bagImageWrapper">
                             
                                                    <img
                                                        className="cartBag_bagImage"
                                                        src={item.image}
                                                        alt=""
                                                    />
                                
                                            </div>
                                            <div className="cartBag_bagItemDetails">
                                                <div className="cartBag_bagItemTop">
                                                    <div>
                                                        <h3 className="cartBag_itemName text-base">{item.title}</h3>
                                                        <p className="cartBag_itemSize text-sm">Color - Gold</p>
                                                        <p className="cartBag_itemSize text-sm">Size - 16</p>
                                                        <p className="cartBag_itemSize text-sm">Items - {item.quantity}</p>
                                                    </div>
                                                    <h3 className='text-xl'>₹ {item.price}</h3>
                                                </div>
                                                <div className="category_header order_open_prdct">
                                                    <Link scroll={false} href={`/products/${order.slug}`} className="text-sm">
                                                        <p className="text-sm">View product</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="checkout_thin_line"></div>

                    <div className="purchases_ordersList">
                        <h3 className='uppercase text-lg'>Return & Refund Information</h3>

                        <div className="category_header order_open_prdct">
                            <Link scroll={false} href={`/contact-support`} className="text-sm">
                                <p className="text-sm">Contact Support</p>
                            </Link>
                        </div>
                        <div className="category_header order_open_prdct">
                            <Link scroll={false} href={`/shipping-returns`} className="text-sm">
                                <p className="text-sm">Shipping & Returns</p>
                            </Link>
                        </div>
                        <div className="category_header order_open_prdct">
                            <Link scroll={false} href={`/return-refund-policy`} className="text-sm">
                                <p className="text-sm">Return & Refund Policy</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
