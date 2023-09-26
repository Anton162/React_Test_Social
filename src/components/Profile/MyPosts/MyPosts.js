import React from "react";
import style_myPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;