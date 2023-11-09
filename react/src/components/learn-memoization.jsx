import { useEffect, useMemo, useRef, useState } from "react";

export const LearnMemoization = ({ user }) => {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState([
    "Mustang 1",
    "Porsche 1",
    "Ferrari 1",
    "Mustang 2",
    "Porsche 2",
    "Ferrari 2",
    "Mustang 3",
    "Porsche 3",
    "Ferrari 3",
  ]);

  const renderCount = useRef(0);

  const mustangCars = useMemo(
    () =>
      cars.filter((car) => {
        console.log("Car", car);
        return car.startsWith("Mustang");
      }),
    [cars]
  );

  // const mustangCars = cars.filter((car) => {
  //   console.log("Car", car);
  //   return car.startsWith("Mustang");
  // });

  const handleCount = () => {
    setCount(count + 1);
  };

  const addCar = () => {
    const updatedCars = [...cars, "Nexon"];
    setCars(updatedCars);
  };

  useEffect(() => {
    console.log("Before", renderCount.current);
    renderCount.current += 1;
    console.log("After", renderCount.current);
  });

  return (
    <>
      <h1>Count: {count}</h1>

      <h1>Cars: {cars.toString()}</h1>
      <h1>Mustangs: {mustangCars.toString()}</h1>

      <button onClick={handleCount}>Increase count</button>
      <button onClick={addCar}>Add car</button>
    </>
  );
};
