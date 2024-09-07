import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]); // Store the fetched posts
  const [loading, setLoading] = useState(true); // Show loading state
  const [error, setError] = useState(null); // Handle any errors

  // UseEffect to fetch data when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch('https://jsonplaceholder.typicode.com/post');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data); // Set the posts to state
      } catch (error) {
        setError(error.message); // Handle error
      } finally {
        setLoading(false); // Stop loading after fetch is complete
      }
    };

    fetchPosts(); // Call the fetch function when component mounts
  }, []); // Empty dependency array means it runs only once when the component mounts

  return (
    <div className="App">
      <h1>Posts</h1>
      
      {/* Show loading state */}
      {loading && <p>Loading posts...</p>}
      
      {/* Show error if any */}
      {error && <p>Error: {error}</p>}
      
      {/* Show posts if available */}
      <ul>
        {!loading && !error && posts.map(post => (
          <li key={post.id}>
            <h2>{JSON.stringify(post)}</h2>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
