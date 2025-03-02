import css from "./CatalogPage.module.css";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import CarList from "../../components/CarList/CarList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../../redux/Cars/operations.js";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/Cars/slice";

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <FilterPanel />
      <CarList />
      <button
        className={css.btn}
        onClick={() => {
          const currentPage = Number.parseInt(cars.page);
          if (cars.totalPages > currentPage) {
            dispatch(fetchCars({ page: currentPage + 1 }));
          }
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default CatalogPage;
