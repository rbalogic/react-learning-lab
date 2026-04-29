import { ACTIONS } from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        items: [...state.items, action.value],
        value: "",
      };
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.value),
        // Re-index completed entries after deletion.
        completed: state.completed
          .filter((index) => index !== action.value)
          .map((index) => (index > action.value ? index - 1 : index)),
      };
    case ACTIONS.COMPLETED:
      return {
        ...state,
        completed: state.completed.includes(action.value)
          ? state.completed.filter((index) => index !== action.value)
          : [...state.completed, action.value],
      };
    case ACTIONS.CLEAR_COMPLETED: {
      const completedSet = new Set(state.completed);
      return {
        ...state,
        items: state.items.filter((_, index) => !completedSet.has(index)),
        completed: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
