import css from "./PriceFilter.module.css";
import { useState, useRef, useEffect } from "react";

const prices = [30, 40, 50, 60, 70, 80, 90, 100];

function PriceFilter() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
    // onFilterChange(price); - надсилає дані на бекенд
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={css.dropdownContainer} ref={dropdownRef}>
        <label className={css.label}>Price/ 1 hour</label>
        <div
          className={css.dropdownInput}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p>{selectedPrice ? `To $${selectedPrice}` : "Choose a price"}</p>
          <svg width="13" height="7">
            <use
              href={`/icons/svg-sprite.svg#${
                isDropdownOpen ? "icon-chevron-active" : "icon-chevron-default"
              }`}
            ></use>
          </svg>
        </div>
        {isDropdownOpen && (
          <ul className={css.dropdownList}>
            {prices.map((price) => (
              <li
                className={css.listItem}
                key={price}
                onClick={() => handleSelectPrice(price)}
              >
                {price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PriceFilter;
