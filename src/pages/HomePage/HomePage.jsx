import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <h2 className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </h2>
      <button
        type="button"
        onClick={() => navigate("/catalog")}
        className={css.btn}
      >
        View Catalog
      </button>
    </div>
  );
};

export default HomePage;
