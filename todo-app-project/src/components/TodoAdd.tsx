type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};

export const TodoAdd = ({ todoText, onChange, onAdd }: Props) => {
  return (
    <div className="input-area">
      <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onAdd}>追加</button>
    </div>
  );
};
