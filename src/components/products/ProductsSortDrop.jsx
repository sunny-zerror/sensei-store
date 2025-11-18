import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "@remixicon/react";

const ProductsSortDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Trending");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const options = ["Trending", "Newest", "Low to High", "High to Low"];

  return (
    <div className="sort_dropdown text-sm" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sort_dropdown__button"
      >
           <p className='text-sm'>
        {selectedOption}
                        </p>
        <RiArrowDownSLine
          size={14}
          className={`sort_dropdown__icon ${
            isOpen ? "sort_dropdown__icon_open" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="sort_dropdown__menu">
          <div className="sort_dropdown__list">
            {options.map((option, idx) => (
              <p
                key={idx}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className={`sort_dropdown__item ${
                  selectedOption === option
                    ? "sort_dropdown__item_active"
                    : ""
                }`}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsSortDrop;
