export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="Name" placeholder="name" />
      <button>Submit</button>
    </form>
  );
};
