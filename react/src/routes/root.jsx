import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export const Root = () => {
  const { userList } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => (isActive ? { color: "green" } : {})}
            >
              Contact us
            </NavLink>
          </li>

          {userList.length > 0
            ? userList.map(({ id, name }) => (
                <li key={id}>
                  <NavLink
                    to={`/users/${id}`}
                    style={({ isActive }) =>
                      isActive ? { color: "green" } : undefined
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))
            : null}
        </ul>

        <Form method="post">
          <button type="submit">Create New User</button>
        </Form>
      </nav>

      {navigation.state === "loading" ? "Loading..." : <Outlet />}
    </>
  );
};
