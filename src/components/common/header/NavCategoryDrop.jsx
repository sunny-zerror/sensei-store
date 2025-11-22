import NavCategory from "@/utils/data/NavCategory";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const NavCategoryDrop = ({
  headerOverlayRef,
  navHover,
  setNavHover,
  activeCategory,
  setActiveCategory,
}) => {
  const menuRef = useRef(null);
  const contentRef = useRef(null);
  const contentAnimRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = headerOverlayRef?.current;
    if (!menu) return;

    const tl = gsap.timeline({ defaults: { ease: "custom", duration: 0.4 } });

    tl.to(menu, {
      height: navHover ? "25rem" : 0,
      opacity: navHover ? 1 : 0,
    });

    if (overlay) {
      tl.to(
        overlay,
        {
          opacity: navHover ? 1 : 0,
        },
        "<"
      );
    }
  }, [navHover]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const handleMouseLeave = (e) => {
      if (!menu.contains(e.relatedTarget)) {
        setNavHover(false);
        setActiveCategory(null)
      }
    };

    menu.addEventListener("mouseleave", handleMouseLeave);
    return () => menu.removeEventListener("mouseleave", handleMouseLeave);
  }, [setNavHover]);

  useEffect(() => {
    if (!contentAnimRef.current || !activeCategory) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        contentAnimRef.current.children,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "custom",
          stagger: 0.05,
        }
      );
    }, contentAnimRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div
      ref={menuRef}
      className="navCategoryDrop"
      onMouseEnter={() => setNavHover(true)}
    >
      <div className="nav_category_dummy_div"></div>
      <div ref={contentRef} className="navCategoryDrop__content">
        <div ref={contentAnimRef} className="navCategoryDrop__animated">
          {activeCategory && (
            <>
              <div className="navCategoryDrop__columns">
                {activeCategory?.heroSection?.map((section, idx) => (
                  <div key={idx} className="navCategoryDrop__column">
                    <p className="navCategoryDrop__section_title glass text-xs">
                      {section.title}
                    </p>
                    <div className="navCategoryDrop__link_list navCategoryDrop__link_list_large">
                      {section.items.map((item, i) => (
                        <div key={i} className="navCategoryDrop__link_item">
                          <Link scroll={false}
                            href="/products"
                            onClick={() => setNavHover(false)}
                          >
                            <h3 className="text-3xl">{item.title}</h3>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {activeCategory?.sections?.map((section, idx) => (
                  <div key={idx} className="navCategoryDrop__column">
                    <p className="navCategoryDrop__section_title glass text-xs">
                      {section.title}
                    </p>
                    <div className="navCategoryDrop__link_list navCategoryDrop__link_list_small">
                      {section.items.map((item, i) => (
                        <div key={i} className="navCategoryDrop__link_item">
                          <Link scroll={false}
                            href="/products"
                            onClick={() => setNavHover(false)}
                          >
                            <h3 className="text-lg">{item.title}</h3>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="navCategoryDrop__image_wrapper">
                <img
                  className="navCategoryDrop__image"
                  src={activeCategory?.coverImg}
                  alt="Menu Visual"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavCategoryDrop;
