import css from "./CatalogPage.module.css";

import CarList from "../../components/CarList/CarList";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <CarList />
    </div>
  );
};

export default CatalogPage;
