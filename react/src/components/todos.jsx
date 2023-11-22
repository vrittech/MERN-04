import { useTodoList } from "../hooks";
import { $axios } from "../lib";

const endpoint = "https://jsonplaceholder.typicode.com/todos";

export const TodoList = () => {
  const { todoList } = useTodoList();

  if (todoList.isLoading) return <p>Loading...</p>;
  if (todoList.fetchFailed) return <p>{todoList.error}</p>;

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

    $axios
      .post("/todos", { title: "Learn react", completed: false, userId: 5 })
      .then((data) => console.log("Data", data))
      .catch((err) => console.log("Error", err.message));
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
        {todoList.data.map((todo) => (
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
