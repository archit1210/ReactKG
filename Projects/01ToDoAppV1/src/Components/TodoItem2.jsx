function TodoItem2() {
  let todo = "Go to college";
  let todoDate = "04/10/2023";
  return (
    <div className="row row-container">
      <div className="col-4">{todo}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger buttons">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem2;
