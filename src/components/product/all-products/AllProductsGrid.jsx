import ProductCard from '@/components/common/ProductCard'
import Products from '@/utils/data/Products'
import Link from 'next/link'
import React from 'react'

const AllProductsGrid = ({ gridCol }) => {
    return (
        <>
            <div
                className="products_grid_inner"
                style={{
                    gridTemplateColumns: `repeat(${gridCol}, 1fr)`,
                }}
            >
                {Products?.map((product, idx) => (
                    <Link href={`/products/${product.slug}`} key={idx}>
                        <ProductCard product={product} gridCol={gridCol} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default AllProductsGrid