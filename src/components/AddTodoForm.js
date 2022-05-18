export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>ToDo List</h2>
      <label htmlFor="todo"></label>
      <div className="ui input">
        <input
          name="todo"
          type="text"
          placeholder="ToDoを入力"
          value={todo}
          onChange={onAddInputChange}
        />
      </div>
      <button className="ui primary button" type="submit" onClick={onAddFormSubmit}>
        ＋ 追加
      </button>
    </form>
  );
}
