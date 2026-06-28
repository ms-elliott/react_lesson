const List = ({todos, deleteTodo}) => {
  const done = (id) => {
    deleteTodo(id)
  };
  return (
    <div>
        {todos.map(todo => {
            return (
        <div key={todo.id}>
          <button
            id={todo}
            onClick={() => done(todo.id)}
          >
            完了
          </button>
          <span>{todo.content}</span>
        </div>
            )
        })}
    </div>
  );
};

export default List;
