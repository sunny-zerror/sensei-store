import {
  RiArrowDownSLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiWhatsappLine,
  RiYoutubeLine
} from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

const footerLinks = {
  shop: [
    { title: "Accessories", href: "/shop/accessories" },
    { title: "Cosplay Costumes", href: "/shop/cosplay-costumes" },
    { title: "Posters & Wall Art", href: "/shop/posters-wall-art" },
    { title: "Figures & Collectibles", href: "/shop/figures-collectibles" },
    { title: "Apparel & Streetwear", href: "/shop/apparel-streetwear" }
  ],

  help: [
    { title: "FAQs", href: "/faqs" },
    { title: "privacy-policy", href: "/privacy-policy" },
    { title: "Contact Support", href: "/contact-support" },
    { title: "Shipping & Returns", href: "shipping-returns" },
    { title: "Return & Refund Policy", href: "/return-refund-policy" }
  ]
};


  const socialLinks = [
    { icon: RiInstagramLine },
    { icon: RiTwitterXLine },
    { icon: RiFacebookLine },
    { icon: RiYoutubeLine },
    { icon: RiWhatsappLine }
  ];

  const renderLinks = (section) => (
    <div
      className={`footer_links text-sm ${openSection === section ? "open" : ""}`}
    >
      <div className="footer_links_group">
        {footerLinks[section].map((link, idx) => (
          <Link href={link.href} key={idx} className="footer_link_item">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="footer_container">
      <div className="footer_grid">
        {/* Shop */}
        <div>
          <div
            className="footer_section_header"
            onClick={() => toggleSection("shop")}
          >
            <h3 className="footer_section_title text-base ">Shop</h3>
            <RiArrowDownSLine
              size={20}
              className={`footer_arrow ${openSection === "shop" ? "rotate" : ""
                }`}
            />
          </div>
          {renderLinks("shop")}
        </div>

        {/* Help */}
        <div>
          <div
            className="footer_section_header"
            onClick={() => toggleSection("help")}
          >
            <h3 className="footer_section_title text-base ">Help</h3>
            <RiArrowDownSLine
              size={20}
              className={`footer_arrow ${openSection === "help" ? "rotate" : ""
                }`}
            />
          </div>
          {renderLinks("help")}
        </div>

        <div className="footer_email_parent">
          <div className="footer_email_parent_inner">
            <p className="footer_newsletter_text">
              Sign up now and be the first to know about exclusive offers, latest
              fashion news & style tips!
            </p>
            <div className="footer_newsletter_form">
              <input
                className="footer_input text-base"
                type="text"
                placeholder="Enter Email Address"
              />
              <button className="footer_button">
                <p className="text-sm">Subscribe</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Store name */}
      <div>
        <h3 className="footer_store_name text-2xl ">The Sensei&apos;s Store</h3>
      </div>

      {/* Bottom section */}
      <div className="footer_bottom">
        <div className="footer_copy">
          <p className="footer_newsletter_text">
            The content of this site is copyright-protected and is the property
            of The Sensei's Store.
          </p>
          <h3 className="footer_credit  text-base">Developed by Zerror Studios</h3>
        </div>
        <div className="footer_socials">
          {socialLinks.map(({ icon: Icon }, idx) => (
            <Icon key={idx} size={20} className="footer_social_icon" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
