// "use client";

import { Suspense } from "react";
import { CommentList, preload } from "../../../../components";

// import { useParams } from "next/navigation";

// const PostListPage = () => {
//   const params = useParams();

//   return <h1 className="mb-3 text-2xl font-semibold">Post {params.id}</h1>;
// };

// export default PostListPage;

export const dynamic = "force-dynamic";

const getPostById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Post list fetch failed");
  }

  return res.json();
};

const PostListPage = async ({ params }) => {
  preload(params.id);
  const post = await getPostById(params.id);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Post {params.id}</h1>

      <div className="border-solid border-2 border-black p-2">
        <h1 className="text-xl font-medium">{post.title}</h1>
        <p className="text-sm font-medium">{post.body}</p>
      </div>

      {/* <Suspense fallback={<div>Loading comments...</div>}>
        <CommentList id={post.id} />
      </Suspense> */}
      {post.id === 1 ? <CommentList id={params.id} /> : null}
    </div>
  );
};

export default PostListPage;
