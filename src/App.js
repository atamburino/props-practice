import React from "react";
import "./insta.css";
// Task 1: Import the necessary modules here and assign them to the appropriate variables used below. Remember that JSON files are also treated like modules.
import posts from "./demopost.json"
import Post from "./InstagramPost.js"


function App() {

  console.log("mydata", posts);

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.0
          key={index}
          liked={post.liked}
          saved={post.saved}
          totalLikes={post.totalLikes}
          caption={post.caption}
          userName={post.userName}
          postImgURL={post.postImgURL}
          userImgURL={post.userImgURL}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default App;
