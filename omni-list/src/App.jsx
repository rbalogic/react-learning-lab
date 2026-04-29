import { useReducer } from "react";
import reducer from "./reducer";

const initialState = { items: [], value: "", completed: [] };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Omni List</h1>
      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          dispatch({ type: "SET_VALUE", value: e.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "ADD", value: state.value });
        }}
      >
        Save
      </button>
      <h3>Items</h3>
      {state.items.map((item, index) => {
        const isCompleted = state.completed.includes(index);
        return (
          <div key={index}>
            {isCompleted ? <s>{item}</s> : <p>{item}</p>}
            <button
              onClick={() => {
                dispatch({ type: "DELETE", value: index });
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                dispatch({ type: "COMPLETED", value: index });
              }}
            >
              {isCompleted ? "Undo" : "Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
