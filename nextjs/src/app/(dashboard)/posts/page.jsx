"use client";

import { useRouter } from "next/navigation";

const PostListPage = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="mb-3 text-2xl font-semibold">Post List</h1>

      <ul>
        {[1, 2, 3].map((index) => (
          <li key={index} onClick={() => router.push(`/posts/${index}`)}>
            Post {index}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostListPage;
