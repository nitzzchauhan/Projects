// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     console.log("first")
//     // Fetch data when the component mounts
//     fetch("https://fakestoreapi.com/products")
//       .then(response => response.json())
//       .then(result => setData(result))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []); // Empty dependency array: runs only on mount

//   console.log(Array.isArray(data), data)
//   return (
//     <div>
//       {data[0]}
//       {/* {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>} */}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     console.log('Component rendered or updated!');
    
//     // Optionally return a cleanup function
//     return () => {
//       console.log('Cleanup on unmount or before the next effect!');
//     };
//   },[]);

//   return <div>Hello, World!</div>;
// }

// export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered or updated!');

    return () => {
      console.log('Cleanup on unmount or before the next effect!');
    };
  },[count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;

   