import css from "./CarList.module.css";
import CarCard from "../CarCard/CarCard";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/Cars/slice";

function CarList() {
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <ul className={css.container}>
      {cars.cars.map((car) => {
        return (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        );
      })}
    </ul>
  );
}

export default CarList;
