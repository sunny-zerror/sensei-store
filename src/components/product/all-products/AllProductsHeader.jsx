import { RiArrowRightSLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const AllProductsHeader = ({ currentLink, title }) => {
    return (
        <>
            <div className="trending_product_header">
                <div className="trending_product_header_top  ">
                    <div className="trending_product_header_top_inner trending_anim_ttxt text-sm">
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                        <RiArrowRightSLine size={14} />
                        <Link href={`/products/${currentLink}`}>
                            <p>{currentLink}</p>
                        </Link>
                    </div>
                </div>
                <div className="trending_product_header_top">
                    <h3 className="trending_product_title text-2xl trending_anim_ttxt">
                        {title}
                    </h3>
                </div>
            </div>
        </>
    )
}

export default AllProductsHeader