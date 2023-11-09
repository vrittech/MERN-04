import { useState } from "react";
import { LearnReducer } from "./components";

// Primitive data type
// Object, Array -- Heap
// 1st state update { name: "Julius Ceaser", age: 30 } --> abc
// 2nd state update { name: "Julius Ceaser", age: 30 } --> abd

function App() {
  const [user, setUser] = useState({ name: "John Doe", age: 10 });

  const handleClick = () => {
    setUser({ name: "Julius Ceaser", age: 30 });
  };

  return (
    <>
      <LearnReducer />
      {/* <LearnMemoization user={user} /> */}
      {/* <Stopwatch /> */}
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
      <button onClick={handleClick}>Change name</button>
    </>
  );
}

export default App;
