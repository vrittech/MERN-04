import { PostList, TodoList } from "../../../components";

export const dynamic = "force-dynamic";

const getPostList = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
    // {
    //   cache: "no-store",
    //   next: { tags: ["posts"], revalidate: 0 },
    // }
  );

  if (!res.ok) {
    throw new Error("Post list fetch failed");
  }

  return res.json();
};

const getTodoList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    throw new Error("Post list fetch failed");
  }

  return res.json();
};

const PostListPage = async () => {
  const postListData = getPostList();
  const todoListData = getTodoList();
  const [postList, todoList] = await Promise.all([postListData, todoListData]);

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-4">
        <h1
          className="text-2xl font-semibold"
          style={{ fontFamily: "Inter", fontWeight: 400 }}
        >
          Post List
        </h1>
        <PostList posts={postList} />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Todo List</h1>
        <TodoList todos={todoList} />
      </div>
    </div>
  );
};

export default PostListPage;
