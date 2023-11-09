import { useUserList } from "../hooks";

// const endpoint = "https://jsonplaceholder.typicode.com/users";

// function reducer(state, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case "FETCH_SUCCESSFUL":
//       return { ...state, isLoading: false, data: payload };
//     case "FETCH_FAILED":
//       return { ...state, isLoading: false, fetchFailed: true };
//     default:
//       return state;
//   }
// }

export const LearnReducer = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [fetchFailed, setFetchFailed] = useState(false);
  //   const [userList, setUserList] = useState([]);
  //   const [userList, setUserList] = useState({
  //     isLoading: true,
  //     fetchFailed: false,
  //     data: [],
  //   });

  //   const [userList, dispatch] = useReducer(reducer, {
  //     isLoading: true,
  //     fetchFailed: false,
  //     data: [],
  //   });

  //   useEffect(() => {
  //     fetch(endpoint)
  //       .then(async (res) => {
  //         if (!res.ok) throw new Error("Fetch failed");
  //         const results = await res.json();
  //         dispatch({ type: "FETCH_SUCCESSFUL", payload: results });
  //         // setUserList({ isLoading: false, fetchFailed: false, data: results });
  //         // setUserList(results);
  //         // setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log("Fetch failed", err);
  //         dispatch({ type: "FETCH_FAILED" });
  //         // setUserList({ isLoading: false, fetchFailed: true, data: [] });
  //         // setFetchFailed(true);
  //       });
  //   }, []);

  const { userList } = useUserList();

  if (userList.fetchFailed) return <p>Fetch failed</p>;
  if (userList.isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>User List</h1>

      <ul>
        {userList.data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};
