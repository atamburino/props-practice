import React from "react";
import "./insta.css";
// Task 1: Import the necessary modules here and assign them to the appropriate variables used below. Remember that JSON files are also treated like modules.
import posts from "./demopost.json"
import Post from "./InstagramPost.js"


function App() {

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.
        />
      ))}
    </div>
  );
}

export default App;
