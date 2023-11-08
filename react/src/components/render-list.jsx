import { Fragment } from "react";

export const RenderList = ({ cars, users }) => {
  return (
    <>
      <ul>
        {cars.map((car) => (
          // Car --> Mustang
          <li key={car}>{car}</li>
        ))}
      </ul>

      {users.map((user) => (
        <Fragment key={user.name}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </Fragment>
      ))}
    </>
  );
};
