import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
// import useOpenCart from "@/store/openCart";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    name: "tomatoes",
    img1: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/01.tomatoes/01.products_01.tomatoes_Home_Tomatoes_03x2_s55er1.png",
      left: "20%",
      top: "10%",
      zindex: 1
    },
    img2: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/01.tomatoes/01.products_01.tomatoes_Home_Tomatoes_02x2_govuaw.png",
      left: "10%",
      top: "37%",
      zindex: 10
    },
    img3: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/01.tomatoes/01.products_01.tomatoes_Home_Tomatoes_01x2_qgtk2z.png",
      left: "61%",
      top: "37%",
      zindex: 10
    },
    background: "#E7524C",
    btnBackground: "#CE0A1F"


  },
  {
    name: "citrus",
    img1: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/02.citrus/01.products_02.citrus_Home_Citrus_04x2_nkfjrf.png",
      left: "20%",
      top: "1%",
      zindex: 1
    },
    img2: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/02.citrus/01.products_02.citrus_Home_Citrus_03x2_rnxou5.png",
      left: "17%",
      top: "36%",
      zindex: 4
    },
    img3: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/02.citrus/01.products_02.citrus_Home_Citrus_01x2_zkjgi1.png",
      left: "60%",
      top: "40%",
      zindex: 10
    },
    background: "#FF7128",
    btnBackground: "#FFB700"

  },
  {
    name: "Grapes",
    img1: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/03.grapes/03.grapes_Home_Grapes_04x2_dxbzat.png",
      left: "15%",
      top: "5%",
      zindex: 1
    },
    img2: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/03.grapes/03.grapes_Home_Grapes_03x2_shxb1x.png",
      left: "50%",
      top: "50%",
      zindex: 1
    },
    img3: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/03.grapes/03.grapes_Home_Grapes_01x2_anh4wc.png",
      left: "54%",
      top: "17%",
      zindex: 10
    },
    background: "#FA7692",
    btnBackground: "#961739"

  },
  {
    name: "Avocados",
    img1: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/04.avocados/04.avocados_Home_Avocados_01x2_ydqbkl.png",
      left: "58%",
      top: "34%",
      zindex: 4
    },
    img2: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/04.avocados/04.avocados_Home_Avocados_03x2_dxab03.png",
      left: "15%",
      top: "6%",
      zindex: 1
    },
    img3: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/04.avocados/04.avocados_Home_Avocados_02x2_z7qmvq.png",
      left: "12%",
      top: "32%",
      zindex: 10
    },
    background: "#8BD3B9",
    btnBackground: "#FF726D"

  },
  {
    name: "Flowers",
    img1: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/05.flowers/01.products_05.flowers_Home_Flowers_02x2_myzpl7.png",
      left: "16%",
      top: "5%",
      zindex: 2
    },
    img2: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/05.flowers/01.products_05.flowers_Home_Flowers_01x2_gpjwkz.png",
      left: "45%",
      top: "40%",
      zindex: 10
    },
    img3: {
      url: "https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.5,f_auto/01.products/02.citrus/01.products_02.citrus_Home_Citrus_02x2_dfbcrk.png",
      left: "36%",
      top: "37%",
      zindex: 10
    },
    background: "#C1D262",
    btnBackground: "#FF570C"

  },
];

const ProductsSwiper = () => {

  // const { openCart } = useOpenCart();

  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperContainerRef = useRef();
   const [swiperInstance, setSwiperInstance] = useState(null); 

  const navBtnRefs = useRef([]);
  const progressTrackRef = useRef(null);
  const progressFillRef = useRef(null);

  const prevIndexRef = useRef(0);

  useEffect(() => {
    const fill = progressFillRef.current;
    const track = progressTrackRef.current;
    const activeBtn = navBtnRefs.current[activeIndex];

    if (!fill || !track || !activeBtn) return;

    const newLeft = activeBtn.offsetLeft;
    const newWidth = activeBtn.offsetWidth;

    const prevIndex = prevIndexRef.current;
    const prevBtn = navBtnRefs.current[prevIndex];
    const prevLeft = prevBtn ? prevBtn.offsetLeft : null;
    const prevWidth = prevBtn ? prevBtn.offsetWidth : null;

    gsap.killTweensOf(track);
    gsap.killTweensOf(fill);

    gsap.set(track, { x: 0 });

    if (prevBtn && prevIndex !== activeIndex) {
      const movingRight = newLeft > prevLeft;

      const stretchLeft = movingRight ? prevLeft : newLeft;
      const stretchWidth = movingRight
        ? newLeft + newWidth - prevLeft
        : prevLeft + prevWidth - newLeft;

      const tl = gsap.timeline();

      tl.to(track, {
        left: stretchLeft,
        width: stretchWidth,
        duration: 0.25,
      });

      tl.to(
        track,
        {
          left: newLeft,
          width: newWidth,
          duration: 0.25,
        },
        "-=0.06"
      );
    } else {
      gsap.set(track, { left: newLeft, width: newWidth });
    }

    gsap.killTweensOf(fill);
    gsap.set(fill, { scaleX: 0, transformOrigin: "left" });

    gsap.to(fill, {
      scaleX: 1,
      duration: 6,
      delay: 0.3,
      ease: "linear",
      overwrite: true,
    });

    prevIndexRef.current = activeIndex;

    return () => {
      gsap.killTweensOf(fill);
      gsap.killTweensOf(track);
    };
  }, [activeIndex]);

  const animateSlideImages = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".swiper_slide_active .slide_content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      ".swiper_slide_active .animated_img",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      },
      "-=0.8"
    );
  };

  useEffect(() => {
    animateSlideImages();

    const imgs = swiperContainerRef.current.querySelectorAll(".animated_img");
    imgs.forEach((img) => {
      const randomDepth = 20 + Math.random() * 20;
      img.setAttribute("data_depth", randomDepth.toFixed(2));
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = swiperContainerRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / width;
      const y = (clientY - top - height / 2) / height;

      imgs.forEach((img) => {
        const depth = parseFloat(img.getAttribute("data_depth"));
        gsap.to(img, {
          x: -x * depth,
          y: -y * depth,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    };

    const container = swiperContainerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);


  useEffect(() => {

    gsap.fromTo(".parallax_swiper__carousel", {
      backgroundColor: "#f6f6f6",
    }, {
      scrollTrigger: {
        trigger: swiperContainerRef.current,
        start: "top 40%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
      backgroundColor: data[activeIndex]?.background,
    })
    gsap.fromTo(".slide_content__heading", {
      color: "#000",
    }, {
      scrollTrigger: {
        trigger: swiperContainerRef.current,
        start: "top 40%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
      color: "white"

    })

  }, [activeIndex])


  // useEffect(() => {
  //   if (!swiperInstance) return;

  //   if (openCart) {
  //     swiperInstance.autoplay.stop();
  //   } else {
  //     swiperInstance.autoplay.start();
  //   }
  // }, [openCart]);


  return (
<div ref={swiperContainerRef} className="parallax_swiper">
  <div className="swiper_navigation_bar">
    <div className="swiper_nav_buttons">
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideToLoop(index);
              setActiveIndex(index);
            }
          }}
          ref={(el) => (navBtnRefs.current[index] = el)}
          className={`nav_button ${activeIndex === index ? "products_swiper_active" : ""}`}
        >
          <p className="text-xl">{item.name}</p>
        </button>
      ))}

      <div ref={progressTrackRef} className="product_progress_track">
        <div ref={progressFillRef} className="product_progress_fill"></div>
      </div>
    </div>

    <div className="discover_btn">
      <h3>Discover</h3>
      <div
        style={{
          backgroundColor: data[activeIndex]?.btnBackground,
        }}
        className="discover_btn_overlay"
      >
        <img
          src="/icons/long_Right_arrow.png"
          className="arrow arrow_hover"
          alt=""
        />
        <img
          src="/icons/long_Right_arrow.png"
          className="arrow arrow_default"
          alt=""
        />
      </div>
    </div>
  </div>

  <Swiper
    ref={swiperRef}
    modules={[Navigation, A11y, Autoplay, Pagination]}
    spaceBetween={0}
    slidesPerView={1}
    speed={1500}
    loop
    autoplay={{ delay: 4500, disableOnInteraction: false }}
    className="parallax_swiper__carousel"
    style={{
      backgroundColor: data[activeIndex]?.background,
      transition: "background-color 3s ease",
    }}
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
      setActiveIndex(swiper.realIndex);
      setSwiperInstance(swiper);
    }}
    onSlideChange={(swiper) => {
      setActiveIndex(swiper.realIndex);
    }}
    onSlideChangeTransitionStart={animateSlideImages}
    allowTouchMove={false}
  >
    {data.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="slide_content">
          <h3 className=" text-9xl slide_content__heading">{item.name}</h3>

          {[item.img1, item.img2, item.img3].map((img, i) => (
            <div
              key={i}
              className="animated_img"
              style={{
                transform: "scale(.7)",
                position: "absolute",
                left: img.left,
                top: img.top,
                zIndex: img.zindex,
              }}
            >
              <img className="animated_img__img" src={img.url} alt="" />
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default ProductsSwiper;
