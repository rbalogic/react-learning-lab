import { useReducer } from "react";

const initialState = { items: ["Read Books"], value: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, action.value],
        value: "",
      };
    case "SET_VALUE":
      return {
        ...state,
        value: action.value,
      };

    default:
      break;
  }
};

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
      {state.items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default App;
