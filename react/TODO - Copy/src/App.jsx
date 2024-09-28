// import { useRef } from "react";


// function MyComponent() {
//   const countRef = useRef(0); // Track the count
//   const prevCountRef = useRef(0); // Track the previous count

//   const incrementCount = () => {
//     prevCountRef.current = countRef.current; // Store the previous value
//     countRef.current += 1; // Update the current count
//     console.log('Count:', countRef.current); // Check the updated value without re-rendering
//   };

//   return (
//     <div>
//       <p>Current Count: {countRef.current}</p>
//       <p>Previous Count: {prevCountRef.current}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }
// export default MyComponent

import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => { 
    inputElement.current.focus();
    inputElement.current.style.color = 'red'
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App