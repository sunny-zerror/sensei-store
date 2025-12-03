import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Products from "@/utils/data/Products";
import MobileImageSlider from "@/components/product/MobileImageSlider";
import DesktopImageSlider from "@/components/product/DesktopImageSlider";
import SimilarProducts from "@/components/product/SimilarProducts";
import ProductContent from "@/components/product/ProductContent";
import { ProductStaticVideo } from "@/components/product/ProductStaticVideo";

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
  const router = useRouter();
  const contRef = useRef(null)
  const [product, setProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

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
        <MobileImageSlider images={product?.images} />

        {/* Desktop Image Slider */}
        <DesktopImageSlider images={product?.images} />

        {/*  Product Details */}
        <ProductContent product={product} activeColor={activeColor} setActiveColor={setActiveColor} activeSize={activeSize} setActiveSize={setActiveSize} />

      </div>
      {/* Static Video  */}
      <ProductStaticVideo />

      {/* Similar Products */}
      <SimilarProducts />

    </>
  );
};

export default ProductDetail;
