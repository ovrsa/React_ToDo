import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EditForm from "./components/EditForm";
import "./styles.css";

// 　・ID(連番もしくはuuidを設定)
// uuid React
// React17に変更

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
