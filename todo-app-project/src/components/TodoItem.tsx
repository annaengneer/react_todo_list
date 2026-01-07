type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

type BaseProps = {
  todo: Todo;
  onComplete: (id: number) => void;
  onDelete?: (id: number) => void;
};

type EditingProps = BaseProps & {
  mode: "editing";
  editText: string;
  onChangeEditText: (value: string) => void;
  onUpdate: () => void;
  onCancel: () => void;
};

type DefaultProps = BaseProps & {
  mode: "default";
  onEdit: (todo: Todo) => void;
};
type CompleteProps = BaseProps & {
  mode: "complete";
};

type Props = EditingProps | DefaultProps | CompleteProps;

export const TodoItem = (props: Props) => {
  const { todo } = props;

  if (props.mode === "editing") {
    return (
      <div className="list-row">
        <input
          type="text"
          value={props.editText}
          onChange={(e) => props.onChangeEditText(e.target.value)}
        />
        <button onClick={props.onUpdate}>保存</button>
        <button onClick={props.onCancel}>キャンセル</button>
      </div>
    );
  }
  if (props.mode === "complete") {
    return (
      <div className="list-row">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => props.onComplete(todo.id)}
        />
        <p className="todo-item">{todo.text}</p>
      </div>
    );
  }
  return (
    <div className="list-row">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => props.onComplete(todo.id)}
      />
      <p className="todo-item">{todo.text}</p>
      <button onClick={() => props.onEdit(todo)}>編集</button>
      <button onClick={() => props.onDelete?.(todo.id)}>削除</button>
    </div>
  );
};
