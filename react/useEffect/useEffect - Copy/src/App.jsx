

import { useState, createContext, useContext } from "react";
import './App.css';

// function App() {
//   const [posts, setPosts] = useState([]); // Store the fetched posts
//   const [loading, setLoading] = useState(true); // Show loading state
//   const [error, setError] = useState(null); // Handle any errors

//   // UseEffect to fetch data when component mounts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true); // Start loading
//         const response = await fetch('https://jsonplaceholder.typicode.com/post');
//         if (!response.ok) {
//           throw new Error('Failed to fetch posts');
//         }
//         const data = await response.json();
//         setPosts(data); // Set the posts to state
//       } catch (error) {
//         setError(error.message); // Handle error
//       } finally {
//         setLoading(false); // Stop loading after fetch is complete
//       }
//     };

//     fetchPosts(); // Call the fetch function when component mounts
//   }, []); // Empty dependency array means it runs only once when the component mounts

//   return (
//     <div className="App">
//       <h1>Posts</h1>
      
//       {/* Show loading state */}
//       {loading && <p>Loading posts...</p>}
      
//       {/* Show error if any */}
//       {error && <p>Error: {error}</p>}
      
//       {/* Show posts if available */}
//       <ul>
//         {!loading && !error && posts.map(post => (
//           <li key={post.id}>
//             <h2>{JSON.stringify(post)}</h2>
//             <p></p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//  function C1() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//         console.log('Timer running');
//     }, 1000);
//     // console.log("mounted")

//     return () => {
//         clearInterval(timer); // Cleanup
//         // console.log("cleanup")
//     };
// });
//   return (
//     <div>C1</div>
//   )
// }


// function App(){
//   const [posts, setPosts] = useState(true);
//   console.log("render")

//   useEffect(() => {
//     // const timer = setInterval(() => {
//     //     console.log('Timer running');
//     // }, 1000);
//     console.log("mounted")

//     return () => {
//         // clearInterval(timer); // Cleanup
//         console.log("cleanup")
//     };
// },[posts]);


// return(
//   <>
//   {/* <h1>{posts && <C1/>}</h1> */}
//   <button onClick={() => setPosts((state)=>!state)}>chng</button>
//   </>
// )
// }



// Create a context for the user
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    // Provide both user and setUser to the context
    <UserContext.Provider value={{ user, setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  // Access user and setUser from context
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      {/* Button to change the user */}
      <button onClick={() => setUser("Jane Doe")}>Change User</button>
    </>
  );
}




export default App;
