import { useState } from "react";
import { ClassComponent, FunctionComponent } from "./components";

// Data flow top-down, one-way
function App() {
  const [display, setDisplay] = useState(false);
  let a = "apple";
  console.log(a, display);

  return (
    <>
      {display ? (
        <ClassComponent>
          <h2>Children</h2>
        </ClassComponent>
      ) : (
        <FunctionComponent
          user={{ name: "John Doe", age: 10 }}
          displayChildren={display}
          country="Nepal"
          cars={["Mustang", "Nexon"]}
          salary={10_00_000}
        >
          {/* <ClassComponent>
          <h2>Children</h2>
        </ClassComponent> */}
        </FunctionComponent>
      )}

      <button
        onClick={() => {
          setDisplay(!display);
          a = "banana";
          console.log(a);
        }}
      >
        Display
      </button>
    </>
  );
}

export default App;
