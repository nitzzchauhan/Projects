import React, { useState } from "react";

function ThemeChanger() {
  // Define the state to store the current theme
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // Define the styles for light and dark themes
  const lightTheme = {
    backgroundColor: "  pink",
    color: "#414141",
    padding: "20px",
    textAlign: "center",
    height: '100vh',
  };

  const darkTheme = {
    backgroundColor: "#333333",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center",
    height: '100vh',
  };

  return (
    <div style={theme === "light" ? lightTheme : darkTheme}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default ThemeChanger;
