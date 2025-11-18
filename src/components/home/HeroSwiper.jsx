import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import HeroSwiperData from "@/utils/data/HeroSwiperData";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const HeroSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const bgVideoRef = useRef(null);
  const swiperRef = useRef(null);
  const slideVideoRefs = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!bgVideoRef.current) return;

    const tween = gsap.to(bgVideoRef.current, {
      scrollTrigger: {
        trigger: bgVideoRef.current,
        start: "90% bottom",
        end: "90% 99%",
        scrub: true,
      },
      opacity: 0,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const updateBullets = () => {
      const bullets = document.querySelectorAll(".custom_bullet");

      bullets.forEach((bullet) => {
        bullet.classList.remove("custom_bullet_active");
        const existingFill = bullet.querySelector(".progress_fill");
        if (existingFill) {
          bullet.removeChild(existingFill);
        }
      });

      const activeBullet = bullets[activeIndex];
      if (activeBullet) {
        activeBullet.classList.add("custom_bullet_active");

        const afterEl = document.createElement("div");
        afterEl.className = "progress_fill";
        activeBullet.appendChild(afterEl);

        requestAnimationFrame(() => {
          afterEl.offsetWidth;
          afterEl.style.width = "100%";
        });
      }
    };

    updateBullets();
  }, [activeIndex]);

  return (
    <div ref={heroRef} className="hero_swiper">
      <video
        ref={bgVideoRef}
        className="hero_swiper__bg_video"
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
        src={HeroSwiperData[activeIndex].url}
      ></video>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper_pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom_bullet" data-index="${index}"></span>`,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onSwiper={setSwiperInstance}
        className="hero_swiper__carousel"
      >
        {HeroSwiperData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="hero_swiper__slide">
              <div className="hero_swiper__slide_inner">
                <video
                  ref={(el) => (slideVideoRefs.current[index] = el)}
                  className="hero_swiper__slide_video"
                  preload="auto"
                  loop
                  autoPlay
                  muted
                  playsInline
                  src={data.url}
                ></video>

                <div className="hero_swiper__content">
                  <h3 className=" hero_swiper__tagline text-2xl">New Collection</h3>
                  <button className="hero_swiper__cta glass">
                    <Link href="/products">
                      <p className="text-base">Shop Now</p>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper_pagination glass" />
    </div>

  );
};

export default HeroSwiper;
