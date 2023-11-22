import { useEffect, useReducer } from "react";
import { $axios } from "../lib";

// const endpoint = "https://jsonplaceholder.typicode.com/todos";

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_SUCCESSFUL":
      return { ...state, isLoading: false, data: payload };
    case "FETCH_FAILED":
      return { ...state, isLoading: false, fetchFailed: true, error: payload };
    default:
      return state;
  }
}

export const useTodoList = () => {
  const [todoList, dispatch] = useReducer(reducer, {
    isLoading: true,
    fetchFailed: false,
    error: "",
    data: [],
  });

  useEffect(() => {
    // fetch(endpoint)
    //   .then(async (res) => {
    //     if (!res.ok) throw new Error("Fetch failed");
    //     const results = await res.json();
    //     dispatch({ type: "FETCH_SUCCESSFUL", payload: results });
    //   })
    //   .catch(() => {
    //     dispatch({ type: "FETCH_FAILED" });
    //   });
    $axios
      .get("todos")
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESSFUL", payload: data });
      })
      .catch((err) => dispatch({ type: "FETCH_FAILED", payload: err.message }));
  }, []);

  return { todoList };
};
