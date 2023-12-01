"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => router.push("/")}>Try again</button>
    </div>
  );
};

export default Error;
