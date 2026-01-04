type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

type Props = {
  todo: Todo;
  isEditing: boolean;
  editText: string;
  onChangeEditText: (value: string) => void;
  onComplete: (id: number) => void;
  onEdit: (todo: Todo) => void;
  onUpdate: () => void;
  onCancel: () => void;
  onDelete?: (id: number) => void;
};

export const TodoItem = ({
  todo,
  isEditing,
  editText,
  onChangeEditText,
  onComplete,
  onEdit,
  onUpdate,
  onCancel,
  onDelete,
}: Props) => {
  return (
    <div className="list-row">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => onChangeEditText(e.target.value)}
          />
          <button onClick={onUpdate}>保存</button>
          <button onClick={onCancel}>キャンセル</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => onComplete(todo.id)}
          />
          <p className="todo-item">{todo.text}</p>
          <button onClick={() => onEdit(todo)}>編集</button>
          <button onClick={() => onDelete?.(todo.id)}>削除</button>
        </>
      )}
    </div>
  );
};
