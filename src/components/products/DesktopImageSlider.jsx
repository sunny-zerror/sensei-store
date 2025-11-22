"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function DesktopImageSlider({ images = [] }) {
  const slidesRef = useRef([]);
  const thumbsRef = useRef([]);

  useEffect(() => {
    if (!slidesRef.current.length) return;

    // FILTER OUT NULL ELEMENTS — IMPORTANT
    const slideEls = slidesRef.current.filter(Boolean);
    const thumbEls = thumbsRef.current.filter(Boolean);

    // cleanup existing triggers
    // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const setActiveThumbnail = (index) => {
      thumbEls.forEach((thumb, i) => {
        thumb.classList.remove(
          "DesktopImageSlider_is_active",
          "DesktopImageSlider_is_prev"
        );
        if (i < index) thumb.classList.add("DesktopImageSlider_is_prev");
        if (i === index) thumb.classList.add("DesktopImageSlider_is_active");
      });
    };

    slideEls.forEach((slide, i) => {
      const nextSlide = slideEls[i + 1];
      const img = slide?.querySelector?.("img");
      if (!img) return;

      if (nextSlide) {
        gsap.timeline({
          scrollTrigger: {
            trigger: nextSlide,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }).fromTo(img, { scale: 1 }, { scale: 1.2 });
      }

      ScrollTrigger.create({
        trigger: slide,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveThumbnail(i),
        onEnterBack: () => setActiveThumbnail(i),
      });
    });

    setActiveThumbnail(0);

    // return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [images]);

  useEffect(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);


  return (
    <div className="DesktopImageSlider_container">
      {/* Slides */}
      {images.map((image, i) => (
        <figure
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          data-index={i}
          className={`DesktopImageSlider_slide ${i === 0 ? "DesktopImageSlider_firstSlide" : ""
            }`}
        >
          <img
            src={image}
            alt={`Product ${i}`}
            className="DesktopImageSlider_slideImg"
          />
        </figure>
      ))}

      {/* Thumbnails */}
      <div className="DesktopImageSlider_thumbsContainer">
        <div className="DesktopImageSlider_thumbsGrid">
          {images.map((image, i) => (
            <div
              key={i}
              ref={(el) => (thumbsRef.current[i] = el)}
              className="DesktopImageSlider_thumb"
            >
              <img
                src={image}
                alt={`Thumb ${i}`}
                className="DesktopImageSlider_thumbImg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
