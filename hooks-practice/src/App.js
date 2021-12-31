import { useState, useLayoutEffect, useMemo, useCallback, useRef } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const value = useMemo(() => {
    for (let x = 0; x <= 999999999; x++) {}

    return counter * counter;
  }, [counter]);

  const add = useCallback(() => {
    return counter + counter2;
  }, [counter, counter2]);

  useLayoutEffect(() => {
    console.log("counter changed");
    InputRef.current.style.width = "800px";
    InputRef.current.focus();
    return () => {};
  }, [counter, counter2]);

  const InputRef = useRef();
  console.log();
  return (
    <div className="App">
      <input
        ref={InputRef}
        type="number"
        value={counter}
        onChange={(e) => {
          setCounter(e.target.value);
        }}
      />
      <p>{`Count is ${counter}`}</p>
      <p>{`squared is ${value}`}</p>
      <p>{`Counter 2 is ${counter2}`}</p>
      <p>{`sum is ${add()}`}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increase counter2
      </button>
    </div>
  );
}

export default App;
