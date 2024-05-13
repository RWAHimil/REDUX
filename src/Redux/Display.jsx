import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "./Action";

function Display() {
  const data = useSelector((store) => store.reducer);
  const dispatch = useDispatch();

  const deleteTODO = (id) => {
    dispatch(Delete(id));
  };

  // const editTodo = (index, newValue) => {
  //   const newData = [...data];
  //   newData[index] = newValue;
  //   dispatch(Edit({ index, newValue }));
  // };

  const editTodo = (index, newValue) => {
    const newData = [...data];
    newData[index] = newValue;
    dispatch(Edit({ index, newValue }));
  };

  return (
    <div>
      <h1>Display</h1>
      {data.map((ele, i) => {
        return (
          <>
            <li key={i}>{ele}</li>
            <button onClick={() => deleteTODO(i)}>Delete</button>
            <button
              onClick={() => {
                const newValue = prompt("Enter Value");

                if (newValue !== null) {
                  editTodo(i, newValue);
                }
              }}
            >
              Edit
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Display;
