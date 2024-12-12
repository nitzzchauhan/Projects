// import React, { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(4654);
//   console.log(inputRef)

//   const handleFocus = () => {
//     inputRef.current.focus(); // Focus the input element
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type something" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default FocusInput;




// import React, { useRef } from 'react';

// function ScrollToDiv() {
//   const divRef = useRef(null);
// //   console.log(divRef.current.scrollIntoView())

//   const handleScroll = () => {
//     divRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <button onClick={handleScroll}>Scroll to Div</button>
//       <div style={{ height: '100vh' }}>Scroll down to see the target div</div>
//       <div ref={divRef} style={{ height: '100px', backgroundColor: 'lightblue' }}>
//         Target Div
//       </div>
//     </div>
//   );
// }

// export default ScrollToDiv;


// import React, { useRef, useState } from 'react';

// function MeasureDiv() {
//   const divRef = useRef(45);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   const handleMeasure = () => {
//     console.log(divRef)
//     if (divRef.current) {
//       const { offsetWidth, offsetHeight } = divRef.current;
//       setDimensions({ width: offsetWidth, height: offsetHeight });
//     }
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         style={{ width: '200px', height: '150px', backgroundColor: 'lightgray' }}
//       >
//         Measure Me
//       </div>
//       <button onClick={handleMeasure}>Get Dimensions</button>
//       <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
//     </div>
//   );
// }

// export default MeasureDiv;


// =================value persistance=====================


// import React, { useRef, useState } from 'react';

// function Stopwatch() {
//   const timerRef = useRef(null);
//   const [count, setCount] = useState(0);

//   const startTimer = () => {
//     if (!timerRef.current) {
//       timerRef.current = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default Stopwatch;

import React, { useState, useRef, useEffect } from 'react';

function PreviousValueTracker() {
  const [value, setValue] = useState('');
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value; // Update ref after each render
  });

  return (
    <div style={{ padding: '20px' }}>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValueRef.current}</p>
    </div>
  );
}

export default PreviousValueTracker;




