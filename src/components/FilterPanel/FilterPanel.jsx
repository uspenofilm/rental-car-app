import css from "./FilterPanel.module.css";
import PriceFilter from "../PriceFilter/PriceFilter";
import BrandFilter from "../BrandFilter/BrandFilter";
import MileageFilter from "../MileageFilter/MileageFilter";

const handleClick = () => {};

function FilterPanel() {
  return (
    <div className={css.container}>
      <BrandFilter />
      <PriceFilter />
      <MileageFilter />
      <button
        type="submit"
        className={css.searchBtn}
        onClick={() => handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default FilterPanel;
