import React from "react";
import style_myPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style_myPosts.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={style_myPosts.posts}>
        <Post message="Hi, how are you?" likesCount="10" />
        <Post message="It is my first post!" likesCount="17" />
      </div>
    </div>
  );
};

export default MyPosts;
