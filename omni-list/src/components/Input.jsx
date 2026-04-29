import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { ACTIONS } from "../actions";

const Input = ({ handleChange }) => {
  const stateContext = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        value={stateContext.value}
        onChange={(e) => {
          handleChange({ type: ACTIONS.SET_VALUE, value: e.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          handleChange({ type: ACTIONS.ADD, value: stateContext.value });
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Input;
