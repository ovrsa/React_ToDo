export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2 style={{ color: "#0E6EB8" }}>ToDoを編集</h2>
      <label htmlFor="updateTodo"></label>
      <div class="ui input">
        <input
          name="updateTodo"
          type="text"
          placeholder="Update todo"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
      </div>
      <button
        class="ui primary button"
        type="submit"
        onClick={onEditFormSubmit}
      >
        修正
      </button>
      <button class="ui button" onClick={() => setIsEditing(false)}>
        キャンセル
      </button>
    </form>
  );
}
