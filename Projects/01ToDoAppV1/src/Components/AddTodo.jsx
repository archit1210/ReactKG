function AddTodo() {
  return (
    <div className="row row-container">
      <div className="col-4">
        <input type="text" placeholder="Enter To-do here" name="" id="" />
      </div>
      <div className="col-4">
        <input type="date" name="" id="" />
      </div>
      <div className="col-1 ">
        <button type="button" className="btn btn-success buttons">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
