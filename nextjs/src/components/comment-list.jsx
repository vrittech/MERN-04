export const dynamic = "force-dynamic";

const getPostComments = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  if (!res.ok) {
    throw new Error("Post list fetch failed");
  }

  return res.json();
};

export const preload = (id) => {
  void getPostComments(id);
};

export const CommentList = async ({ id }) => {
  const comments = await getPostComments(id);

  return (
    <div className="flex flex-col gap-4">
      {comments.map(({ id, email, body }) => (
        <div className="border-solid border-2 border-black p-2" key={id}>
          <h1 className="text-xl font-medium">{email}</h1>
          <p className="text-sm font-medium">{body}</p>
        </div>
      ))}
    </div>
  );
};
