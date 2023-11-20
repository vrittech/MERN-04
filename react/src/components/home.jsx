import { useNavigate, useSearchParams } from "react-router-dom";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <p>
        {searchParams.get("firstName")} {searchParams.get("lastName")}
      </p>

      <button
        onClick={() => {
          setSearchParams({ firstName: "Jane", lastName: "Dane" });
        }}
      >
        Change search params
      </button>

      <button onClick={() => navigate("/about-us")}>
        Redirect to About us
      </button>
    </>
  );
};
