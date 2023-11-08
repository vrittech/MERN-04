import { useReducer, useRef, useState } from "react";
import { Form, LearnState, RenderList, Stopwatch } from "./components";

function App() {
  const [style, setStyle] = useState({ color: "red" });

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Button Clicked");
  // };

  const ref = useRef("apple");
  console.log("ref", ref.current);

  let fruit = "apple";
  console.log("fruit", fruit);

  const changeColor = () => {
    setStyle({ color: "yellow" });
    fruit = "banana";
    console.log("fruit", fruit);
    ref.current = "banana";
  };

  // const appleRef = useRef();

  // const changeColor = () => {
  //   appleRef.current.style = "color: red";
  //   fruit = "banana";
  // };

  return (
    <>
      <p /* ref={appleRef} */ style={style}>{ref.current}</p>
      <button onClick={changeColor}>Change Text color</button>

      <Stopwatch />
      {/* <LearnState initialCount={1} /> */}
      {/* <Form onSubmit={onSubmit} /> */}
      {/* <RenderList
        cars={["Mustang", "Porsche", "Ferrari", "Nexon"]}
        users={[
          { name: "John Doe", age: 10 },
          { name: "Jane Doe", age: 20 },
          { name: "Alexander Doe", age: 30 },
          { name: "Joe Doe", age: 40 },
        ]}
      /> */}
    </>
  );
}

export default App;
