import React from "react";
import style_myPosts from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style_myPosts.item}>
      <img src="https://moscoweyes.ru/images/sergushev-sergey-gennadevich_300%D1%85300.jpg" />
      {props.message}
      <span>like</span> {props.likesCount}
    </div>
  );
};

export default Post;
