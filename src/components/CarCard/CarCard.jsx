import { useState } from "react";
import css from "./CarCard.module.css";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <button
        type="button"
        onClick={() => setIsFavourite((prev) => !prev)}
        className={css.heartBtn}
      >
        <svg width="16" height="16">
          <use
            href={`/icons/svg-sprite.svg#${
              isFavourite ? "icon-heart-active" : "icon-heart-default"
            }`}
          ></use>
        </svg>
      </button>
      <img src={car.img} alt={car.brand} className={css.photo} />
      <div className={css.brandPrice}>
        <p>
          {`${car.brand} `}
          <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <p>${car.rentalPrice}</p>
      </div>
      <div className={css.description}>
        <p className={css.subText}>
          {car.address.split(",")[1].trim()} |{" "}
          {car.address.split(",")[2].trim()} | {car.rentalCompany} |
        </p>
        <p className={css.subText}>
          {car.type} |{" "}
          {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km |
        </p>
      </div>
      <button
        type="button"
        onClick={() => navigate(`/catalog/:${car.id}`)}
        className={css.readMoreBtn}
      >
        Read more
      </button>
    </div>
  );
}

export default CarCard;
