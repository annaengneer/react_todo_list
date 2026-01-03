type Props = {
  todos: string[];
  onBack: (index: number) => void;
};

export const CompleteTodos = ({ todos, onBack }: Props) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <input type="checkbox" checked onClick={() => onBack(index)} />
              <p className="todo-item">{todo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
