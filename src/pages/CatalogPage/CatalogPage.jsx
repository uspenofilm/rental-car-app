import css from "./CatalogPage.module.css";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import CarList from "../../components/CarList/CarList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../../redux/Cars/operations.js";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <FilterPanel />
      <CarList />
    </div>
  );
};

export default CatalogPage;
