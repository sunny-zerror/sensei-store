import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MobileImageSlider = ({ images }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <div className="MobileImageSlider_container">
      {/* Thumbnails */}
      <div className="MobileImageSlider_thumbnails">
        {images?.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`MobileImageSlider_thumbnail ${
              activeIndex === index
                ? "MobileImageSlider_thumbnail--active"
                : "MobileImageSlider_thumbnail--inactive"
            }`}
          >
            <img src={image} alt={`Product Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        speed={600}
        loop
        className="MobileImageSlider_swiper"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} className="MobileImageSlider_slide">
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              className="MobileImageSlider_slideImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileImageSlider;
