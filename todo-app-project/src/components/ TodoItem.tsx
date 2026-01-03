type Props = {
  todo: string;
  isEditing: boolean;
  editText: string;
  onChangeEditText: (value: string) => void;
  onComplete: () => void;
  onEdit: () => void;
  onUpdate: () => void;
  onCancel: () => void;
  onDelete?: () => void;
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
          <input type="checkbox" onClick={onComplete} />
          <p className="todo-item">{todo}</p>
          <button onClick={onEdit}>編集</button>
          <button onClick={onDelete}>削除</button>
        </>
      )}
    </div>
  );
};
