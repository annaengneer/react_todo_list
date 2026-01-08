import { TodoItem } from "./TodoItem";

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
            <TodoItem todo={todo} mode="complete" onComplete={onBack} />
          </li>
        ))}
      </ul>
    </div>
  );
};
