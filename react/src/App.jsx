import { ClassComponent, FunctionComponent } from "./components";

// Data flow top-down, one-way
function App() {
  return (
    <>
      <FunctionComponent>
        <ClassComponent>
          <h2>Children</h2>
        </ClassComponent>
        <ClassComponent>
          <h2>Children</h2>
        </ClassComponent>
      </FunctionComponent>
    </>
  );
}

export default App;
