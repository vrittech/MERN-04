import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes";
import { Error, Home, User } from "./components";
import {
  createUserAction,
  getUserByIdLoader,
  userListLoader,
} from "./services/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <div>
      //   <h1>Hello World!</h1>
      // </div>
      <Root />
    ),
    errorElement: <Error />,
    loader: userListLoader,
    action: createUserAction,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/about-us",
            element: (
              <div>
                <h1>About us</h1>
              </div>
            ),
          },
          {
            path: "/contact-us",
            element: (
              <div>
                <h1>Contact us</h1>
              </div>
            ),
          },
          {
            path: "/users/:id",
            element: <User />,
            loader: getUserByIdLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
