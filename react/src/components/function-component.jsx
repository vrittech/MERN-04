import { useEffect, useState } from "react";

export function FunctionComponent({
  user /*  = { name: "Jane", age: 20 } */,
  country,
  cars,
  salary,
  children,
  displayChildren,
}) {
  console.log(user, country, cars, salary);

  const [count, setCount] = useState(1);

  // if (displayChildren) {
  //   return children;
  // } else {
  //   return (
  //     <>
  //       <h1>I&apos;m {user.name}</h1>
  //       <h2>Count: {count}</h2>
  //       <h1>Function Component</h1>
  //       <button onClick={() => setCount(2)}>Change to 2</button>
  //     </>
  //   );
  // }

  // Mount, If dependency changed runs again, Unmount
  useEffect(() => {
    console.log("Effect run", count);
    return () => {
      console.log("Cleanup function call");
    };
  }, [count]);

  return displayChildren ? (
    children
  ) : (
    <>
      {user && <h1>I&apos;m {user.name}</h1>}
      <h2>Count: {count}</h2>
      <h1>Function Component</h1>
      <button onClick={() => setCount(2)}>Change to 2</button>
    </>
  );
}
