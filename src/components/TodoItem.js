import React from "react";
import Filter from "./Filter";

export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
  return (
    <div
      className="ui raised segments"
      style={{ paddingTop: "10px", maxWidth: "500px", textAlign: "center" }}
    >
      <li key={todo.id}>
        {todo.text}
        <select
          className="ui compact menu"
          aria-label="Default select example"
          style={{ width: "80px", marginRight: "3.5px" }}
        >
          <option value="all" selected>
            全て
          </option>
          <option value="notStarted">未着手</option>
          <option value="inProgress">進行中</option>
          <option value="done">完了</option>
        </select>
        <button class="ui primary button" onClick={() => onEditClick(todo)}>
          編集
        </button>
        <button class="ui red button" onClick={() => onDeleteClick(todo.id)}>
          削除
        </button>
      </li>
    </div>
  );
}
// <div class="ui raised segments" style ={{ paddingTop:"10px", maxWidth: "500px", textAlign: "center"}} >
