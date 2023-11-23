import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import { $axios } from "../lib";

export const PostList = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => $axios.get("posts").then((data) => data),
  });

  const createPostMutation = useMutation({
    mutationFn: (post) => $axios.post("/posts", { id: 101, ...post }),
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const posts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (old) => [
        { id: 101, ...newPost },
        ...old,
      ]);

      return { posts };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["posts"], context.posts);
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: (post) => $axios.put(`/posts/${post.id}`, { ...post }),
    onMutate: async (updatedPost) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const posts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (old) =>
        old.map((post) => (post.id === updatedPost.id ? updatedPost : post))
      );

      return { posts };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["posts"], context.posts);
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: (id) => $axios.delete(`/posts/${id}`),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const posts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (old) =>
        old.filter((post) => post.id !== id)
      );

      return { posts };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["posts"], context.posts);
    },
  });

  if (isError) return <p>{error.message}</p>;
  if (isPending) return <p>Loading...</p>;

  const createPost = () => {
    createPostMutation.mutate({
      title: "Learn react",
      body: "Learn JSX, State, Props etc",
      userId: 5,
    });
  };

  const updatePost = (id) => {
    updatePostMutation.mutate({
      id,
      title: "Learn react",
      body: "Learn JSX, State, Props etc",
      userId: 5,
    });
  };

  const deletePost = (id) => {
    deletePostMutation.mutate(id);
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold underline">Post List</h1>

        <button
          className="rounded border-2 border-solid border-black p-1"
          onClick={createPost}
        >
          Create Post
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-4 mt-4">
        {data.map((post) => (
          <div
            key={post.id}
            className="rounded border-2 border-solid border-black p-1"
          >
            <h2 className="text-xl">{post.title}</h2>
            <p className="text-sm">{post.body}</p>

            <button
              onClick={() => updatePost(post.id)}
              className="rounded border-2 border-solid border-emerald-300"
            >
              Edit
            </button>
            <button
              onClick={() => deletePost(post.id)}
              className="rounded border-2 border-solid border-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
