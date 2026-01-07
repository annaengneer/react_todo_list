import { TodoItem } from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

type Props = {
  todos: Todo[];
  editTodoId: number | null;
  editText: string;
  onChangeEditText: (value: string) => void;
  onComplete: (id: number) => void;
  onEdit: (todo: Todo) => void;
  onUpdate: () => void;
  onCancel: () => void;
  onDelete: (id: number) => void;
};

export const IncompleteTodos = ({
  todos,
  editTodoId,
  editText,
  onChangeEditText,
  onComplete,
  onEdit,
  onUpdate,
  onCancel,
  onDelete,
}: Props) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              mode={editTodoId === todo.id ? "editing" : "default"}
              editText={editText}
              onChangeEditText={onChangeEditText}
              onComplete={() => onComplete(todo.id)}
              onEdit={() => onEdit(todo)}
              onUpdate={onUpdate}
              onCancel={onCancel}
              onDelete={() => onDelete(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
