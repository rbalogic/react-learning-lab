import { useReducer } from "react";
import reducer from "./reducer";
import Input from "./components/Input";

const initialState = { items: [], value: "", completed: [] };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Omni List</h1>
      <Input />
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
