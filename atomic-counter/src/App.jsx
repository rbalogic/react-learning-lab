import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    case "SET_COUNTER_VALUE":
      return {
        ...state,
        counterChangeValue: action.value,
      };
    case "CHANGE_COUNTER_VALUE":
      return {
        ...state,
        count: state.counterChangeValue,
      };

    default:
      break;
  }
};

const initialState = { count: 0, counterChangeValue: 0 };

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
      <input
        type="number"
        onChange={(e) => {
          dispatch({ type: "SET_COUNTER_VALUE", value: e.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_COUNTER_VALUE" });
        }}
      >
        Set {state.counterChangeValue}
      </button>
    </div>
  );
};
