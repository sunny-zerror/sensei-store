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
  const [cachedVideos, setCachedVideos] = useState({
    normal: [],
    blur: [],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const bgVideoRef = useRef(null);
  const slideVideoRefs = useRef([]);

  /** 🔥 GSAP Scroll Fade */
  useEffect(() => {
    if (!bgVideoRef.current) return;

    const tween = gsap.to(bgVideoRef.current, {
      scrollTrigger: {
        trigger: bgVideoRef.current,
        start: "90% bottom",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: .2,
      ease:"power2.out",
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  /** 🔥 Custom pagination bullets animation */
  useEffect(() => {
    const updateBullets = () => {
      const bullets = document.querySelectorAll(".custom_bullet");

      bullets.forEach((bullet) => {
        bullet.classList.remove("custom_bullet_active");
        const existingFill = bullet.querySelector(".progress_fill");
        if (existingFill) bullet.removeChild(existingFill);
      });

      const activeBullet = bullets[activeIndex];
      if (activeBullet) {
        activeBullet.classList.add("custom_bullet_active");

        const fill = document.createElement("div");
        fill.className = "progress_fill";
        activeBullet.appendChild(fill);

        requestAnimationFrame(() => {
          fill.offsetWidth;
          fill.style.width = "100%";
        });
      }
    };

    updateBullets();
  }, [activeIndex]);

  /** 🔥 PRELOAD ALL NORMAL + BLUR VIDEOS ONCE */
  useEffect(() => {
    const loadVideos = async () => {
      const normalVideos = await Promise.all(
        HeroSwiperData.map(async (item) => {
          const res = await fetch(item.url, { cache: "force-cache" });
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
      );

      const blurVideos = await Promise.all(
        HeroSwiperData.map(async (item) => {
          const res = await fetch(item.blur_vid, { cache: "force-cache" });
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
      );

      setCachedVideos({
        normal: normalVideos,
        blur: blurVideos,
      });
    };

    loadVideos();
  }, []);

  return (
    <div className="hero_swiper">
      {/* 🔥 Background uses BLUR VIDEO */}
      <video
        ref={bgVideoRef}
        className="hero_swiper__bg_video"
        autoPlay
        loop
        muted
        playsInline
        src={cachedVideos.blur[activeIndex]}
      />

      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero_swiper__carousel"
      >
        {HeroSwiperData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="hero_swiper__slide">
              <div className="hero_swiper__slide_inner">

                {/* 🔥 Slide video uses NORMAL VIDEO */}
                <video
                  ref={(el) => (slideVideoRefs.current[index] = el)}
                  className="hero_swiper__slide_video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={cachedVideos.normal[index]}
                />

                <div className="hero_swiper__content">
                  <h3 className="hero_swiper__tagline text-2xl">New Collection</h3>
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
