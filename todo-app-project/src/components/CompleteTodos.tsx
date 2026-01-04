type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

type Props = {
  todos: Todo[];
  onBack: (id: number) => void;
};

export const CompleteTodos = ({ todos, onBack }: Props) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="list-row">
              <input type="checkbox" checked onChange={() => onBack(todo.id)} />
              <p className="todo-item">{todo.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
