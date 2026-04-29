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
    case "DELETE":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.value),
        // Re-index completed entries after deletion.
        completed: state.completed
          .filter((index) => index !== action.value)
          .map((index) => (index > action.value ? index - 1 : index)),
      };
    case "COMPLETED":
      return {
        ...state,
        completed: state.completed.includes(action.value)
          ? state.completed.filter((index) => index !== action.value)
          : [...state.completed, action.value],
      };

    default:
      return state;
  }
};

export default reducer;
