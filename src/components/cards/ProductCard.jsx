import React, { useEffect, useRef, useState } from "react";
import { RiBookmarkFill, RiBookmarkLine } from "@remixicon/react";

const ProductCard = ({ product, gridCol }) => {
  const images = product?.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [filledBars, setFilledBars] = useState([]);
  const [barResetKey, setBarResetKey] = useState(0);
  const intervalRef = useRef(null);

  const startImageRotation = () => {
    if (intervalRef.current || images.length <= 1) return;

    setFilledBars([]);
    setBarResetKey((k) => k + 1);
    setTimeout(() => setFilledBars([0]), 50);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setTimeout(() => setCurrentImage(images[nextIndex]), 100);

        if (nextIndex === 0) {
          setFilledBars([]);
          setBarResetKey((k) => k + 1);
          setTimeout(() => setFilledBars([0]), 50);
        } else {
          setFilledBars((prev) => [...prev, nextIndex]);
        }

        return nextIndex;
      });
    }, 3000);
  };

  const stopImageRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="productCard_container">
      <div
        className="productCard_imageWrapper"
        onMouseEnter={startImageRotation}
        onMouseLeave={stopImageRotation}
      >
        {/* Quick Add */}
        <div className="productCard_quickAdd">
          <div
            className={`productCard_quickAddInner ${gridCol === 8 ? "productCard_quickAddInner--small" : ""
              }`}
          >
            <p className={` ${gridCol === 8 ? "text-xs" : "text-base"} `}>Quick Add</p>
          </div>
        </div>

        {/* Tags & Bookmark */}
        <div
          className={`productCard_tagList ${gridCol === 8 ? "productCard_tagList--small" : ""
            }`}
        >
          <div className="productCard_tagsInner">
            {product?.tags?.map((tag, index) => (
              <div className="productCard_tag glass" key={index}>
                <p className={` ${gridCol === 8 ? "text-xxs" : "text-xs"} `}>{tag}</p>
              </div>
            ))}
          </div>
          <div className="productCard_bookmark glass">
            <RiBookmarkLine size={16} />
            <RiBookmarkFill size={16} className="productCard_bookmarkFill" />
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className={`productCard_progressWrapper ${gridCol === 8 ? "productCard_progressWrapper--small" : ""
            }`}
        >
          {images.map((_, index) => (
            <div
              key={`${barResetKey}-${index}`}
              className="productCard_progressBar"
            >
              <div
                className={`productCard_progressFill ${filledBars.includes(index) ? "filled" : ""
                  }`}
              />
            </div>
          ))}
        </div>

        <img className="productCard_image" src={currentImage} alt="Product" />
      </div>
      {gridCol !== 8 && (
        <div className={` ${gridCol === 2 ? "productCard_details_grid2" : "productCard_details"}  `}>
          <h3 className={` ${gridCol === 2 ? "productCard_nameContainer_grid2" : "productCard_nameContainer"} text-base  `}>{product?.name}</h3>
          <div className={` ${gridCol === 2 ? "productCard_priceContainer_grid2" : "productCard_priceContainer"}  `}>
            <h3 className="productCard_priceOld text-xs">Rs. {(product?.price) + 200}</h3>
            <h3 className="productCard_priceCurrent text-sm">
              Rs. {product?.price}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
