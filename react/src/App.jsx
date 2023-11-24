// bg-black

import { useDispatch, useSelector } from "react-redux";
import { changeTheme, fetchUserById } from "./store/app";

// text-white
function App() {
  const theme = useSelector((state) => state.app.theme);
  const error = useSelector((state) => state.app.error);
  const dispatch = useDispatch();

  return (
    <div className={theme === "light" ? "bg-white" : "bg-black"}>
      <h1
        className={`text-2xl font-bold underline ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Hello World
      </h1>

      {error && (
        <h1
          className={`font-bold ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {error}
        </h1>
      )}

      <button
        className="rounded border-2 border-solid border-black p-1"
        onClick={() => dispatch(changeTheme())}
      >
        Change Theme
      </button>

      <button
        className="rounded border-2 border-solid border-black p-1"
        onClick={() => {
          dispatch(
            // login({ id: 1, name: "John Doe", email: "john.doe@example.com" })
            fetchUserById(1)
          )
            .unwrap()
            .then((data) => console.log("Data", data))
            .catch((err) => console.log("Error", err.message));
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
