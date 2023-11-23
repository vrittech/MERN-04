import { useMutation, useQuery } from "@tanstack/react-query";
// import { useTodoList } from "../hooks";
import { $axios } from "../lib";
import { queryClient } from "../App";

// const endpoint = "https://jsonplaceholder.typicode.com/todos";

export const TodoList = () => {
  const postId = 1;
  const { data, error, /* isPending, */ status } = useQuery({
    queryKey: ["todos"],
    queryFn: () => $axios.get("todos").then((data) => data),
    // refetchOnWindowFocus: false,
    // refetchInterval: 3 * 1000,
  });

  const { data: post } = useQuery({
    queryKey: ["post", postId],
    queryFn: ({ queryKey }) => {
      const [, postId] = queryKey;
      return $axios.get(`posts/${postId}`).then((data) => data);
    },
  });

  const { data: commentList } = useQuery({
    queryKey: ["comments", postId],
    queryFn: ({ queryKey }) => {
      // page, pageSize, sort, order
      const [, postId] = queryKey;
      return $axios
        .get("comments", { params: { postId } })
        .then((data) => data);
    },
    enabled: !!post?.id,
  });
  console.log("Comment List", commentList);

  const mutation = useMutation({
    mutationFn: (todo) => $axios.post("/todos", { id: 201, ...todo }),
    onMutate: async (newTodo) => {
      const todos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (old) => [
        { id: 201, ...newTodo },
        ...old,
      ]);
      return { todos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["todos"], context.todos);
    },
    // onSuccess: (result, variables, context) => {
    //   console.log(result, variables, context);
    //   // Invalidate and refetch
    //   // queryClient.invalidateQueries({ queryKey: ["todos"] });
    //   queryClient.setQueryData(["todos"], (old) => [...old, result]);
    // },
  });

  // const { todoList } = useTodoList();

  // if (todoList.isLoading) return <p>Loading...</p>;
  // if (todoList.fetchFailed) return <p>{todoList.error}</p>;

  if (status === "error") return <p>{error.message}</p>;
  if (status === "pending") return <p>Loading...</p>;

  const createTodo = () => {
    // fetch(endpoint, {
    //   method: "post",
    //   body: JSON.stringify({
    //     title: "Learn React",
    //     completed: false,
    //     userId: 5,
    //   }),
    // })
    //   .then((res) => {
    //     if (!res.ok) throw new Error("Post failed");
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });

    // $axios
    //   .post("/todos", { title: "Learn react", completed: false, userId: 5 })
    //   .then((data) => console.log("Data", data))
    //   .catch((err) => console.log("Error", err.message));
    mutation.mutate({ title: "Learn react", completed: false, userId: 5 });
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold underline">Todo List</h1>

        <button
          className="rounded border-2 border-solid border-black p-1"
          onClick={createTodo}
        >
          Create Todo
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-4 mt-4">
        {data.map((todo) => (
          <div
            key={todo.id}
            className="rounded border-2 border-solid border-black p-1"
          >
            <h2 className="text-xl">{todo.title}</h2>
            <p className="text-sm">
              {todo.completed ? "Completed" : "Incomplete"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
