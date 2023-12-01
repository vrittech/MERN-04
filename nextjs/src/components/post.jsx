import Link from "next/link";

export const Post = ({ post: { id, title, body } }) => {
  console.log("Id", id, title);

  return (
    <Link href={`/posts/${id}`}>
      <div className="border-solid border-2 border-black p-2" key={id}>
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm font-medium">{body}</p>
      </div>
    </Link>
  );
};
