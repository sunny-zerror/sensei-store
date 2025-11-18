import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "@remixicon/react";

const buttonsData = [
  { label: "Chat", icon: "/icons/helpBtn/message-3-line.svg", delay: 1 },
  { label: "Accessibility", icon: "/icons/helpBtn/accessibility-line.svg", delay: 201 },
  { label: "Order Status", icon: "/icons/helpBtn/instance-line.svg", delay: 401 },
  { label: "Exchanges", icon: "/icons/helpBtn/logout-box-line.svg", delay: 601 },
];

const HelpBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="helpbtn_short_links">
      <AnimatePresence>
        {isOpen && (
          <div className="helpbtn_short_links__panel">
            {buttonsData.map((btn) => (
              <motion.button
                key={btn.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.1, delay: btn.delay / 2500 }}
                className="helpbtn_short_links__button glass"
              >
                <div className="helpbtn_short_links__button_content">
                  <span className="helpbtn_short_links__icon">
                    <img src={btn.icon} alt={btn.label} />
                  </span>
                  <p className="helpbtn_short_links__label text-xs">{btn.label}</p>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="helpbtn_short_links__toggle glass"
      >
        <span className="helpbtn_short_links__icon">
          <img className="helpbtn_short_links__icon_plus_img" src="/icons/helpBtn/plusIcon.svg" alt="" />
        </span>
        <p className="helpbtn_short_links__toggle_label text-xs ">Help</p>
      </button>
    </div>
  );
};

export default HelpBtn;
