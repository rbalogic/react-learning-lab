import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { ACTIONS } from "../actions";

export const Items = ({ handleClick }) => {
  const stateContext = useContext(TodoContext);
  return (
    <div>
      {" "}
      {stateContext.items.map((item, index) => {
        const isCompleted = stateContext.completed.includes(index);
        return (
          <div key={index}>
            {isCompleted ? <s>{item}</s> : <p>{item}</p>}
            <button
              onClick={() => {
                handleClick({ type: ACTIONS.DELETE, value: index });
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleClick({ type: ACTIONS.COMPLETED, value: index });
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
