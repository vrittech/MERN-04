import { Component, useState } from "react";

// 1. State is stored somewhere else outside of component
// 2. useState returns current value of the state variable
// 3. On mount, count --> 0
// 4. Render Count: 0
// 5. Click increase count button
// 6. setCount runs --> Request re-render
// 7. Before re-render, state is updated
// 8. useState returns new value of state variable on re-render
export const LearnState = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "John Doe", age: 10 });
  const [cars, setCars] = useState(["Mustang", "Porsche"]);

  console.log("User", user);

  const handleCount = () => {
    console.log("Button clicked");
    setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };

  const addUserCountry = () => {
    setUser({ ...user, country: "Nepal" });
  };

  const removeUserAge = () => {
    const { age, name } = user;
    setUser({ name });
  };

  const addCar = () => {
    const updatedCars = [...cars, "Nexon"];
    setCars(updatedCars);
    // setCars(cars.concat(["Nexon"]));
  };

  const removeCar = () => {
    const updatedCars = cars.filter((car) => car !== "Mustang");
    setCars(updatedCars);
  };

  const updateCar = () => {
    // const updatedCars = [...cars];
    // updatedCars[1] = "Ferrari";
    const updatedCars = cars.map((car, index) =>
      index === 1 ? "Ferrari" : car
    );
    setCars(updatedCars);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>I&apos;m {user.name}.</h1>
      <p>I&apos;m {user.age} old</p>
      {user.country && <p>I&apos;m from {user.country}</p>}

      <h1>Cars: {cars.toString()}</h1>

      <button onClick={handleCount}>Increase count</button>
      <button onClick={addUserCountry}>Add user country</button>
      <button onClick={removeUserAge}>Remove user age</button>
      <button onClick={addCar}>Add car</button>
      <button onClick={removeCar}>Remove car</button>
      <button onClick={updateCar}>Update car</button>
    </>
  );
};

// export class LearnState extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//       user: {
//         name: "John Doe",
//         age: 10,
//       },
//     };
//   }

//   handleCount = () => {
//     console.log("Button clicked");
//     this.setState({ count: this.state.count + 1 });
//     // this.setState({ count: this.state.count + 1 });
//     this.setState((prev) => ({
//       count: prev.count + 1,
//     }));
//   };

//   addUserCountry = () => {
//     this.setState(
//       (prev) => ({
//         user: { ...prev.user, country: "Nepal" },
//       }),
//       () => console.log("setState executed")
//     );
//   };

//   removeUserAge = () => {
//     this.setState((prev) => {
//       const {
//         user: { age, ...rest },
//       } = prev;
//       return { user: { ...rest } };
//     });
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <h1>Count: {this.state.count}</h1>
//         <h1>I&apos;m {this.state.user.name}.</h1>
//         <p>I&apos;m {this.state.user.age} old</p>
//         {this.state.user.country && (
//           <p>I&apos;m from {this.state.user.country}</p>
//         )}

//         <button onClick={this.handleCount}>Increase count</button>
//         <button onClick={this.addUserCountry}>Add user country</button>
//         <button onClick={this.removeUserAge}>Remove user age</button>
//       </>
//     );
//   }
// }
