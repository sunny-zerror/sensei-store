import { RiBookmarkFill, RiBookmarkLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import Button from '../common/Button'
import useOpenDescription from '@/store/openDescription'

const ProductContent = ({product , activeColor, setActiveColor, activeSize, setActiveSize}) => {
  const { openDesc } = useOpenDescription();

  return (
    <>
        <div className="product_page__right">
          {!product ? null : (
            <div className="product_page__content">
              {/* Header */}
              <div className="category_header">
                <Link scroll={false} href="/products" className="text-sm">
                  <p className="text-sm">{product.category || "Accessories"}</p>
                </Link>
              </div>
              <div className="product_page__header">
                <h3 className="product_page__title text-4xl">{product.name}</h3>
                <span className="product_page__price">
                  <p className="text-4xl">₹ {product.price}</p>
                </span>
              </div>

              {/* Product Info */}
              <div className="product_page__info">
                {/* Colors */}
                <div className="">
                  <div className="product_page__section">
                    <h3 className="product_page__label text-base">Color</h3>
                    <div className="product_page__colors">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`product_page__color ${activeColor === color ? "product_page__color--active" : ""
                            }`}
                          onClick={() => setActiveColor(color)}
                        >
                          <div
                            className="product_page__color_inner"
                            style={{ backgroundColor: color }}
                          ></div>
                          <p>{color}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="product_page__section">
                    <h3 className="product_page__label text-base">Size</h3>
                    <div className="product_page__sizes">
                      {product.sizes.map((size, index) => (
                        <div
                          key={index}
                          className={`product_page__size ${activeSize === size ? "product_page__size--active" : ""
                            }`}
                          onClick={() => setActiveSize(size)}
                        >
                          <p className="text-base">{size}</p>
                          {/* {activeSize === size && (
                          <div className="product_page__dot"></div>
                        )} */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="productDetail_addtocart">
                  <Button text={"Add To Cart"} />
                  <div className="productDetail_btn_icon center">
                    <div className="icon_pr">
                      <RiBookmarkLine size={17} />
                    </div>
                    <div className="icon_pr">
                      <RiBookmarkFill size={17} />
                    </div>
                  </div>
                </div>

                {/* Extra Info */}
                <div className="product_page__extra">
                  {product.aboutProduct.map((data, i) => (
                    <div key={i} className="product_page__extra_row">
                      <p className="text-base">{data.title}</p>
                      <button
                        onClick={() => openDesc(data)}
                        className="product_page__expand_btn"
                      >
                        <span className="product_page__expand_hover"></span>
                        <p className="text-base">+</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
    </>
  )
}

export default ProductContent