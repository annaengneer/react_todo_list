import { useState, useRef } from "react";
import "./App.css";

import { TodoCount } from "./components/TodoCount.tsx";
import { TodoAdd } from "./components/TodoAdd.tsx";
import { IncompleteTodos } from "./components/IncompleteTodos.tsx";
import { CompleteTodos } from "./components/CompleteTodos.tsx";

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};
export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const nextIdRef = useRef(1);
  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos: Todo = {
      id: nextIdRef.current,
      text: todoText,
      isComplete: false,
    };
    nextIdRef.current += 1;

    setTodos((prev) => [...prev, newTodos]);
    setTodoText("");
  };
  const onClickDelete = (id: number) => {
    const isConfirmed = window.confirm("本当に削除してよろしいですか?");
    if (!isConfirmed) return;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onClickComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const totalCount = todos.length;
  const incompleteCount = todos.filter((todo) => !todo.isComplete).length;
  const completeCount = todos.filter((todo) => todo.isComplete).length;

  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  const completeTodos = todos.filter((todo) => todo.isComplete);

  const onClickEdit = (todo: Todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };

  const onClickUpdate = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editTodoId ? { ...todo, text: editText } : todo
      )
    );
    setEditTodoId(null);
    setEditText("");
  };

  return (
    <>
      <TodoAdd
        todoText={todoText}
        onChange={onChangeTodoText}
        onAdd={onClickAdd}
      />
      <TodoCount
        total={totalCount}
        complete={completeCount}
        incomplete={incompleteCount}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        editTodoId={editTodoId}
        editText={editText}
        onChangeEditText={setEditText}
        onComplete={onClickComplete}
        onEdit={onClickEdit}
        onUpdate={onClickUpdate}
        onCancel={() => setEditTodoId(null)}
        onDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onBack={onClickComplete} />
    </>
  );
};
