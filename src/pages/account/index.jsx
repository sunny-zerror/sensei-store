import React from 'react';
import OrderList from '@/components/account/orders/OrderList';
import AccountLayout from '@/components/layouts/AccountLayout';

const orders = [
  {
    id: "42027098022",
    status: "Delivered",
    date: "28/05/2025",
    Totalamount: "2,798.00",
    items: [
      {
        id: 1,
        title: "Product 1",
        image: "https://oflyn.fr/cdn/shop/files/Remorse-W-Back.webp?v=1741681377&width=580",
        price: "1,000.00",
        quantity: 2,
        paymentMethod: "Credit/Debit Card",
        billingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India",
        shippingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India"
      },
      {
        id: 2,
        title: "Product 2",
        image: "https://oflyn.fr/cdn/shop/files/Remorse-M-Front.webp?v=1741681377&width=832",
        price: "1,800.00",
        quantity: 2,
        paymentMethod: "Credit/Debit Card",
        billingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India",
        shippingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India"
      },
    ],
  },
  {
    id: "42027098023",
    status: "Delivered",
    date: "28/05/2025",
    Totalamount: "4,798.00",
    items: [
      {
        id: 1,
        title: "Product 1",
        image: "https://oflyn.fr/cdn/shop/files/bucketstub.webp?v=1741614525&width=1920",
        price: "1,000.00",
        quantity: 2,
        paymentMethod: "Credit/Debit Card",
        billingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India",
        shippingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India"
      },
      {
        id: 2,
        title: "Product 2",
        image: "https://oflyn.fr/cdn/shop/files/Amnesia-Focus.webp?v=1741616541&width=1920",
        price: "1,800.00",
        quantity: 2,
        paymentMethod: "Credit/Debit Card",
        billingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India",
        shippingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India"
      },
      {
        id: 3,
        title: "Product 3",
        image: "https://oflyn.fr/cdn/shop/files/AmnesiaB-W-Front.webp?v=1741616505&width=832",
        price: "1,800.00",
        quantity: 2,
        paymentMethod: "Credit/Debit Card",
        billingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India",
        shippingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India"
      },
      {
        id: 4,
        title: "Product 4",
        image: "https://oflyn.fr/cdn/shop/files/AmnesiaB-W-Side.webp?v=1741616505&width=580",
        price: "1,800.00",
        quantity: 2,
        paymentMethod: "Credit/Debit Card",
        billingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India",
        shippingAddress: "Sayba Emerald, Station Road, Bandra West A/503, Near Burger King, 400050, Mumbai, Maharashtra, India"
      },
    ],
  },
]

const AccountHome = () => {
  return (

    <AccountLayout>

      <div className="account_rightSection">

        <h3 className="purchases_heading text-3xl">My purchases</h3>

        <OrderList orders={orders} />

      </div>

    </AccountLayout>

  );
};

export default AccountHome;
