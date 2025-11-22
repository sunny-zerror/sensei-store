import { RiArrowRightSLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import AccountLeftSlide from '@/components/account/AccountLeftSlide'

const offers = [
  {
    img: "https://image.hm.com/content/dam/Hm_Member_and_Loyalty/seasonal-images-loyalty/AW25/1012a_101_09_020_4x5.jpg?imwidth=1536",
    title: "For members who love music",
    validity: "Valid until: 04/10/2025",
  },
  {
    img: "https://image.hm.com/content/dam/Hm_Member_and_Loyalty/cms/2025/july/7022D-4x5-hotel-deluxe-bed.jpg?imwidth=1536",
    title: "Flat 20% off on Home purchase",
    validity: "Valid until: 04/10/2025",
  },
  {
    img: "https://image.hm.com/content/dam/Hm_Member_and_Loyalty/cms/2024/october/spotifypremium_reward_4x5.jpg?imwidth=1536",
    title: "For members who love music",
    validity: "Valid until: 04/10/2025",
  },
];

const Index = () => {
  return (
    <div className="purchases_wrapper">

      <div className="purchases_leftSlide">
        <AccountLeftSlide />
      </div>

      <div className="purchases_breadcrumb">
        <Link scroll={false} href="/account">
          <p className="purchases_breadcrumbLink text-sm">Account</p>
        </Link>
        <RiArrowRightSLine size={14} />
        <p className='text-sm'>Offers</p>
      </div>

      <div className="purchases_rightSection">
        <h3 className="purchases_heading text-3xl">Order details</h3>
        <div className="account_gridBox">
          {offers.map((offer, index) => (
            <div key={index} className="account_offerCard">
              <div className="account_imgBox">
                <img
                  className="account_img"
                  src={offer.img}
                  alt={offer.title}
                />
              </div>

              <div className="account_offerText">
                <h3 className="account_offerTitle text-base uppercase">{offer.title}</h3>
                <p className="account_offerValidity text-base">{offer.validity}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
