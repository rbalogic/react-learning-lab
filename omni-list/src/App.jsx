import { useReducer } from "react";
import reducer from "./reducer";
import Input from "./components/Input";
import { TodoContext } from "./TodoContext";
import { Items } from "./components/Items";
import { ACTIONS } from "./actions";

const initialState = { items: [], value: "", completed: [] };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={state}>
      <h1>Omni List</h1>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.CLEAR_COMPLETED });
        }}
      >
        Delete Completed
      </button>
      <Input handleChange={dispatch} />
      <h3>Items (Total: {state.items.length - state.completed.length})</h3>
      <Items handleClick={dispatch} />
    </TodoContext.Provider>
  );
};

export default App;
