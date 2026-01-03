import { useState } from "react";
import "./App.css";

import { TodoCount } from "./components/TodoCount.tsx";
import { TodoAdd } from "./components/TodoAdd.tsx";
import { IncompleteTodos } from "./components/IncompleteTodos.tsx";
import { CompleteTodos } from "./components/CompleteTodos.tsx";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index: number) => {
    const isConfirmed = window.confirm("本当に削除してよろしいですか?");
    if (!isConfirmed) return;

    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const totalCount = incompleteTodos.length + completeTodos.length;
  const incompleteCount = incompleteTodos.length;
  const completeCount = completeTodos.length;

  const onClickEdit = (index: number) => {
    setEditIndex(index);
    setEditText(incompleteTodos[index]);
  };

  const onClickUpdate = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos[index] = editText;
    setIncompleteTodos(newTodos);
    setEditIndex(null);
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
        editIndex={editIndex}
        editText={editText}
        onChangeEditText={setEditText}
        onComplete={onClickComplete}
        onEdit={onClickEdit}
        onUpdate={onClickUpdate}
        onCancel={() => setEditIndex(null)}
        onDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onBack={onClickBack} />
    </>
  );
};
