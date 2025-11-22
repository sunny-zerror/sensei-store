import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Products from "@/utils/data/Products";
import MobileImageSlider from "@/components/products/MobileImageSlider";
import DesktopImageSlider from "@/components/products/DesktopImageSlider";
import Marquee from "react-fast-marquee";
import useOpenDescription from "@/store/openDescription";
import BlackBtn from "@/components/buttons/BlackBtn";
import { RiBookmarkFill, RiBookmarkLine } from "@remixicon/react";
import Link from "next/link";
import SimilarProducts from "@/components/products/SimilarProducts";

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
  const router = useRouter();
  const contRef = useRef(null)
  const productDetailsContainerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const { openDesc } = useOpenDescription();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;

    const foundProduct = Products.find((p) => p.slug === slug);
    setProduct(foundProduct);

    if (foundProduct) {
      setActiveColor(foundProduct.colors?.[0] || null);
      setActiveSize(foundProduct.sizes?.[0] || null);
    }
    ScrollTrigger.refresh();
  }, [router.isReady, router.query.slug]);


  return (
    <>
      <div ref={contRef} className="product_page__container">

        {/* Mobile Image Slider */}
        <div className="product_image_slider">
          <MobileImageSlider images={product?.images} />
        </div>

        {/* Desktop Image Slider */}
        <div className="product_page__left">
          <DesktopImageSlider images={product?.images} />
        </div>

        {/* Right Side - Product Details */}
        <div className="product_page__right">
          {!product ? null : (
            <div ref={productDetailsContainerRef} className="product_page__content">
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

                {/* Buttons */}
                <div className="productDetail_addtocart">
                  <BlackBtn text={"Add To Cart"} />
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
      </div>

      <div className="product_page__video_section">
        <video
          className="product_page__video"
          loop
          autoPlay
          muted
          src="https://oflyn.fr/cdn/shop/videos/c/vp/d6f92673694940a5817f345b3abc144b/d6f92673694940a5817f345b3abc144b.HD-1080p-7.2Mbps-44303516.mp4?v=0"
        ></video>

        <div className="product_page__video_marquee">
          <Marquee speed={100}>
            <div className="marquee_inner text-8xl">
              <p>Memory Collection</p>
              <p>Memory Collection</p>
              <p>Memory Collection</p>
              <p>Memory Collection</p>
            </div>
          </Marquee>
        </div>
      </div>

          <SimilarProducts/>

    </>
  );
};

export default ProductDetail;
