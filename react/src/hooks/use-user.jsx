import { useEffect, useReducer } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/users";

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_SUCCESSFUL":
      return { ...state, isLoading: false, data: payload };
    case "FETCH_FAILED":
      return { ...state, isLoading: false, fetchFailed: true };
    default:
      return state;
  }
}

export const useUserList = (users = []) => {
  const [userList, dispatch] = useReducer(reducer, {
    isLoading: true,
    fetchFailed: false,
    data: users,
  });

  useEffect(() => {
    fetch(endpoint)
      .then(async (res) => {
        if (!res.ok) throw new Error("Fetch failed");
        const results = await res.json();
        dispatch({ type: "FETCH_SUCCESSFUL", payload: results });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, []);

  return { userList };
};
