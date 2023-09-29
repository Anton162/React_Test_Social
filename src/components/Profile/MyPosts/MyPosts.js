import React from "react";
import style_myPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Have a nice day", likesCount: 3 },
    { id: 3, message: "It is my first post!", likesCount: 23 },
  ];

  let postsElements = postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

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
      <div className={style_myPosts.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
