export const TodoList = ({ todos }) => {
  return (
    <div className="flex flex-col gap-4">
      {todos.map(({ id, title, body }) => (
        <div className="border-solid border-2 border-black p-2" key={id}>
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
      ))}
    </div>
  );
};
