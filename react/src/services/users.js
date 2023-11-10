import { redirect } from "react-router-dom";

const endpoint = "https://jsonplaceholder.typicode.com/users";

export const listUser = async () => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Fetch failed!");
  }
  const results = await response.json();
  return results;
};

export const userListLoader = async () => {
  const userList = await listUser();
  return { userList };
};

export const getUserById = async ({ id }) => {
  const response = await fetch(`${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error("Fetch failed!");
  }
  const result = await response.json();
  return result;
};

export const getUserByIdLoader = async ({ params }) => {
  const user = await getUserById(params);
  return { user };
};

export const createUser = async () => {
  throw new Error("Oops couldn't create user");
  // const user = { name: "John Doe", email: "john.doe@gmail.com" };

  // const response = await fetch(endpoint, {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(user),
  // });

  // if (!response.ok) {
  //   throw new Error("Fetch failed!");
  // }
  // const result = await response.json();
  // return result;
};

export async function createUserAction() {
  const user = await createUser();
  // return redirect(`/users/${user.id}`);
  return redirect("/users/1");
}
