import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import useOpenDescription from "@/store/openDescription";
gsap.registerPlugin(CustomEase);

const OpenProductDescription = () => {
    const { isOpen, activeSection, closeDesc, setIsOpen } = useOpenDescription();

  const overlayRef = useRef(null);
  const mobileDesc = useRef(null);
  const fixLeftRef = useRef(null);
  const fixRightRef = useRef(null);

  CustomEase.create("custom", "0.6, 0, 0.3, 1");

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "custom",
      });

      if (window.innerWidth < 1024) {
        gsap.to(mobileDesc.current, {
          right: 0,
          duration: 0.8,
          ease: "custom",
        });
      } else {
        gsap.to(fixLeftRef.current, {
          left: 0,
          duration: 0.8,
          ease: "custom",
        });
        gsap.to(fixRightRef.current, {
          right: 0,
          duration: 0.8,
          ease: "custom",
        });
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!overlayRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
      },
    });

    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "custom",
    });

    if (window.innerWidth < 1024) {
      tl.to(
        mobileDesc.current,
        {
          right: "-100vw",
          duration: 0.8,
          ease: "custom",
        },
        "<" 
      );
    } else {
      tl.to(
        fixLeftRef.current,
        {
          left: "-50vw",
          duration: 0.8,
          ease: "custom",
        },
        "<"
      );
      tl.to(
        fixRightRef.current,
        {
          right: "-50vw",
          duration: 0.8,
          ease: "custom",
        },
        "<"
      );
    }
  };

    return (
        <div>
            {/* Overlay */}
            <div ref={overlayRef} className="filter_overlay scrollbar-hide" />

            {/* Mobile Drawer */}
            <div ref={mobileDesc} data-lenis-prevent className="mobile_desc">
                <div className="mobile_desc_inner">
                    <div className="fixed_right_header">
                        <h3 className="fixed_right_title text-4xl">{activeSection?.title}</h3>
                        <button onClick={handleClose} className="product_page__expand_btn">
                            <span className="product_page__expand_hover"></span>
                            <p className="text-base">X</p>
                        </button>
                    </div>

                    <div className="fixed_right_desc">
                        {activeSection?.desc?.map((item, idx) => (
                            <p key={idx} className="fixed_right_desc_item text-base">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mobile_desc_img_wrap">
                    <img
                        className="fixed_left_img"
                        src={activeSection?.img}
                        alt={activeSection?.title}
                    />
                </div>
            </div>

            {/* Desktop Split */}
            <div ref={fixLeftRef} className="fixed_left">
                <img
                    className="fixed_left_img"
                    src={activeSection?.img}
                    alt={activeSection?.title}
                />
            </div>

            <div ref={fixRightRef} className="fixed_right">
                <div className="fixed_right_header">
                    <h3 className="fixed_right_title text-4xl">{activeSection?.title}</h3>
                    <button onClick={handleClose} className="product_page__expand_btn">
                        <span className="product_page__expand_hover"></span>
                        <p className="text-base">X</p>
                    </button>
                </div>

                <div className="fixed_right_desc">
                    {activeSection?.desc?.map((item, idx) => (
                        <p key={idx} className="fixed_right_desc_item text-base">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenProductDescription;
