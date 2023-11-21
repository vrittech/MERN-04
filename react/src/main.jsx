import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       // <div>
//       //   <h1>Hello World!</h1>
//       // </div>
//       <Root />
//     ),
//     errorElement: <Error />,
//     loader: userListLoader,
//     action: createUserAction,
//     children: [
//       {
//         errorElement: <Error />,
//         children: [
//           { index: true, element: <Home /> },
//           {
//             path: "/about-us",
//             element: <AboutUs />,
//           },
//           {
//             path: "/contact-us",
//             element: (
//               <div>
//                 <h1>Contact us</h1>
//               </div>
//             ),
//           },
//           {
//             path: "/users/:id",
//             element: <User />,
//             loader: getUserByIdLoader,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
