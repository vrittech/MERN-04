import { useLoaderData, useParams } from "react-router-dom";

export const User = () => {
  let { id } = useParams();
  const { user } = useLoaderData();

  return (
    <>
      <h1>{id}</h1>
      <h1>Name: {user.name}</h1>
      <h2>Email: {user.email}</h2>
    </>
  );
};
