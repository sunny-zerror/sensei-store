import NavCategory from '@/utils/data/NavCategory'
import { RiBookmarkLine, RiCloseLine, RiHandbagLine, RiSearchLine, RiUserLine } from '@remixicon/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import NavCategoryDrop from './NavCategoryDrop'
import gsap from 'gsap'
import OpenSearch from './OpenSearch'
import CartBag from '../CartBag'


const DesktopHeader = () => {
  const headerOverlayRef = useRef()
  const searchInputRef = useRef(null);
  const [navHover, setNavHover] = useState(false);
  const [openCartBag, setOpenCartBag] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [expandSearch, setExpandSearch] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null)


  useEffect(() => {
    if (navHover || searchActive || openCartBag) {
      gsap.set(headerOverlayRef.current, {
        pointerEvents: "auto"
      })
    } else {
      gsap.set(headerOverlayRef.current, {
        pointerEvents: "none"
      })
    }
  }, [navHover, searchActive, openCartBag])

  useEffect(() => {
    if (expandSearch) {
      gsap.to(".desktop_header_search_btn", {
        width: "13vw",
        ease: "power2.out",
        duration: 0.3
      })
    } else {
      gsap.to(".desktop_header_search_btn", {
        width: "10vw",
        ease: "power2.out",
        duration: 0.3
      })
    }
  }, [expandSearch])

  return (
    <>
      <div
        onMouseMove={() => { setNavHover(false), setActiveCategory(null) }}
        ref={headerOverlayRef}
        className="header_overlay scroller_none"
      />
  <div className="desktop_open_cart_paren">
      <CartBag openCartBag={openCartBag} setOpenCartBag={setOpenCartBag} headerOverlayRef={headerOverlayRef} />

  </div>

      <div className="header_logo">
        <Link href="/">
          <h3 className='text-xl'>THE SENSEI'S STORE</h3>
        </Link>
      </div>


      <div className="desktop_header_paren">
        <div className={`desktop_header_paren_inner`}>

          <NavCategoryDrop headerOverlayRef={headerOverlayRef} navHover={navHover} setNavHover={setNavHover} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

          <div className="desktop_header_left ">

            <div className="desktop_header_menu glass">
              {
                NavCategory.map((category, idx) => (
                  <div
                    onMouseEnter={() => {
                      setNavHover(true);
                      setActiveCategory(category);
                      setOpenCartBag(false);
                    }}
                    key={idx} className={` ${activeCategory?.title === category.title ? "desktop_header_menu_link_active" : ""} desktop_header_menu_link`}>
                    <p className='text-base'>{category.title}</p>
                  </div>
                ))
              }
            </div>

          </div>


          <div className="desktop_header_right">

            <div
              onClick={() => (setSearchActive(true) , setOpenCartBag(false) , setNavHover(false))}
              onMouseEnter={() => {
                if (searchActive || expandSearch) return;
                setExpandSearch(true);
                setNavHover(false);
                setActiveCategory(null);
              }}
              onMouseLeave={() => {
                if (searchActive) return;
                setExpandSearch(false);
              }}
              className={` ${activeCategory !== null ? "desktop_header_search_btn_active" : ""} desktop_header_search_btn`}>
              <div
                className="opensearch_nav_sub glass "
              >
                <button className="opensearch_nav_sub_btn">
                  <p className='text-base'>Search</p>
                  <div className="opensearch_nav_sub_btn_search_icon">
                    <RiSearchLine size={16} />
                  </div>
                </button>

                <div className="opensearch_nav_sub_input">
                  <input ref={searchInputRef} placeholder="Search Products" className='text-sm' type="text" />
                  <p className="opensearch_nav_clear text-sm">Clear</p>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchActive(false);
                    }}
                    className="opensearch_nav_close center"
                  >
                    <p className='text-xs'>X</p>
                  </div>
                </div>

                <div className="opensearch_nav_sub_btn_search_icon_b">
                  <RiSearchLine size={16} />
                </div>
              </div>
              <OpenSearch searchActive={searchActive} headerOverlayRef={headerOverlayRef} setSearchActive={setSearchActive} searchInputRef={searchInputRef} />
            </div>


            <div className="desktop_header_nav_btn">

              <Link href="/login">
                <div className="desktop_header_left_btn glass ">
                  <RiUserLine size={16} />
                </div>
              </Link>
              <div className="desktop_header_left_btn glass ">
                <RiBookmarkLine size={16} />
              </div>
              {openCartBag ? (
                <div
                  onClick={() => { setOpenCartBag(false) }}
                  className="desktop_header_left_btn glass ">
                  <p className='text-base'>Close</p>
                  <RiCloseLine size={18} />
                </div>
              ) : (
                <div
                  onClick={() => { setOpenCartBag(true) }}
                  className="desktop_header_left_btn glass ">
                  <p className='text-base'>Bag</p>
                  <RiHandbagLine size={16} />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopHeader