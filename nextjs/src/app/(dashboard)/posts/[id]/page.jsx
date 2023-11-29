// "use client";

// import { useParams } from "next/navigation";

// const PostListPage = () => {
//   const params = useParams();

//   return <h1 className="mb-3 text-2xl font-semibold">Post {params.id}</h1>;
// };

// export default PostListPage;

const PostListPage = ({ params }) => {
  return <h1 className="mb-3 text-2xl font-semibold">Post {params.id}</h1>;
};

export default PostListPage;
