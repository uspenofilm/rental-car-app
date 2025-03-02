import css from "./CatalogPage.module.css";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import CarList from "../../components/CarList/CarList";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <FilterPanel />
      <CarList />
    </div>
  );
};

export default CatalogPage;
