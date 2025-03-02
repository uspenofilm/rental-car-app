import css from "./BrandFilter.module.css";
import { useState, useRef, useEffect } from "react";

const brands = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
  "Hyundai",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lincoln",
  "MINI",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Pontiac",
  "Subaru",
  "Volvo",
];

function BrandFilter() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
    // onFilterChange(brand); - надсилає дані на бекенд
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
        <label className={css.label}>Car brand</label>
        <div
          className={css.dropdownInput}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p>{selectedBrand || "Choose a brand"}</p>
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
            {brands.map((brand) => (
              <li
                className={css.listItem}
                key={brand}
                onClick={() => handleSelectBrand(brand)}
              >
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BrandFilter;
