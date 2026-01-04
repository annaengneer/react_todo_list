type Props = {
  total: number;
  complete: number;
  incomplete: number;
};

export const TodoCount = ({ total, complete, incomplete }: Props) => {
  return (
    <p className="count">
      全てのタスク：{total} 完了済み：{complete} 未完了：
      {incomplete}
    </p>
  );
};
