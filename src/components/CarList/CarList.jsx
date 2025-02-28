import css from "./CarList.module.css";
import CarCard from "../CarCard/CarCard";

const cars = [
  {
    id: 4340,
    year: 2008,
    brand: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
    rentalPrice: 40,
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    mileage: 5858,
  },
  {
    id: 4341,
    year: 2008,
    brand: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
    rentalPrice: 40,
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    mileage: 5858,
  },
  {
    id: 4342,
    year: 2008,
    brand: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
    rentalPrice: 40,
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    mileage: 5858,
  },
  {
    id: 4343,
    year: 2008,
    brand: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
    rentalPrice: 40,
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    mileage: 5858,
  },
];

function CarList() {
  return (
    <ul className={css.container}>
      {cars.map((car) => {
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
