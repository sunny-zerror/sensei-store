import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("ease-secondary", "0.16, 1, 0.35, 1");

export default function PageTransition({ children, routeKey }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const overlayRef = useRef(null);

  // --- Trigger fade animation when route changes ---
  useEffect(() => {
    if (!overlayRef.current) return;
    const el = overlayRef.current;

    const fadeIn = () =>
      new Promise((resolve) => {
        gsap.set(el, { autoAlpha: 0 });
        gsap.to(el, {
          autoAlpha: 1,
          duration: 0.5,
          ease: "ease-secondary",
          onComplete: resolve,
        });
      });

    const fadeOut = () =>
      new Promise((resolve) => {
        gsap.to(el, {
          autoAlpha: 0,
          duration: 0.5,
          ease: "ease-secondary",
          onComplete: resolve,
        });
      });

    // Play transition: fade in, switch content, fade out
    fadeIn().then(() => {
      setDisplayChildren(children);
    });
  }, [routeKey]);

  // --- After children change, fade overlay out ---
  useEffect(() => {
    if (!overlayRef.current) return;

    requestAnimationFrame(() => {
      const lenis = window.lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    });

    const el = overlayRef.current;
    gsap.to(el, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "ease-secondary",
      onComplete: () => ScrollTrigger.refresh(),
    });
  }, [displayChildren]);

  return (
    <>
      <div>{displayChildren}</div>

      {/* Simple white overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          opacity: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
