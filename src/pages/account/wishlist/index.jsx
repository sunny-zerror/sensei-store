import React from 'react';
import AccountLeftSlide from '@/components/account/AccountLeftSlide';
import Products from '@/utils/data/Products';
import Link from 'next/link';
import ProductCard from '@/components/cards/ProductCard';
import { RiArrowRightSLine } from '@remixicon/react';

const Wishlist = () => {
    return (
        <div>
            <div className="account_wrapper">
                <div className="settings__left">
                    <AccountLeftSlide />
                </div>
                <div className="settings__breadcrumb">
                    <Link scroll={false} href={"/account"}>
                        <p className="settings__breadcrumb_faded text-sm">Account</p>
                    </Link>
                    <RiArrowRightSLine size={14} />
                    <p className='text-sm'>Wishlist</p>
                </div>

                <div className="settings__content">
                    <h3 className="settings__title text-3xl">My Wishlist</h3>

                    <div className="wishlist_box">
                        {Products?.map((item, idx) => (
                            <Link scroll={false} key={idx} href={`/products/${item.slug}`} className='wishlist_card'>
                                <ProductCard product={item} />
                            </Link>
                        ))}
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Wishlist;
