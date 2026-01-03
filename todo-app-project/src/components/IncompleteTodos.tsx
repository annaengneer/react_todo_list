import { TodoItem } from "./ TodoItem.tsx";

type Props = {
  todos: string[];
  editIndex: number | null;
  editText: string;
  onChangeEditText: (value: string) => void;
  onComplete: (index: number) => void;
  onEdit: (index: number) => void;
  onUpdate: (index: number) => void;
  onCancel: () => void;
  onDelete: (index: number) => void;
};

export const IncompleteTodos = ({
  todos,
  editIndex,
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
        {todos.map((todo, index) => (
          <li key={todo}>
            <TodoItem
              todo={todo}
              isEditing={editIndex === index}
              editText={editText}
              onChangeEditText={onChangeEditText}
              onComplete={() => onComplete(index)}
              onEdit={() => onEdit(index)}
              onUpdate={() => onUpdate(index)}
              onCancel={onCancel}
              onDelete={() => onDelete(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
