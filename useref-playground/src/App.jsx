import { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const autoFocusRef = useRef(null);

  useEffect(() => {
    autoFocusRef.current?.focus();
  }, []);

  const handleFocus = () => {
    inputRef.current.value = "";
    inputRef.current?.focus();
  };
  return (
    <div>
      <h1>Focus Input</h1>
      <input type="text" ref={inputRef} placeholder="will be cleared" />
      <input type="text" ref={autoFocusRef} placeholder="will be focused" />
      <button onClick={handleFocus}>Clear & Focus</button>
    </div>
  );
};

export default App;
