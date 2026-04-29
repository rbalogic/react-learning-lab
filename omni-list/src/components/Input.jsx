const Input = () => {
  return (
    <div>
      <input
        type="text"
        value={state.value} // TODO: fetch state from useContext
        onChange={(e) => {
          dispatch({ type: "SET_VALUE", value: e.target.value }); // TODO: pass dispatch function from parent
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "ADD", value: state.value }); // TODO: pass dispatch function from parent
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Input;
