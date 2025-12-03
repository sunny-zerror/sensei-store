import React from 'react';
import Products from '@/utils/data/Products';
import Link from 'next/link';
import ProductCard from '@/components/common/ProductCard';
import AccountLayout from '@/components/layouts/AccountLayout';
import AccountBreadcrumb from '@/components/account/AccountBreadcrumb';

const Wishlist = () => {
    return (
        <AccountLayout>

            <AccountBreadcrumb title={"Wishlist"} />

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
            
        </AccountLayout>

    );
};

export default Wishlist;
