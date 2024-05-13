import { useDispatch } from "react-redux";
import { useState } from "react";
import { Add } from "./Action";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function FormSubmit(e) {
    dispatch(Add(input));
    e.preventDefault();
    e.target.reset();
  }

  // Rest of your component code
  return (
    <div>
      <h1>Input</h1>
      <form action="" onSubmit={FormSubmit}>
        <input
          type="text"
          placeholder="Enter To DO"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <br />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default Input;
