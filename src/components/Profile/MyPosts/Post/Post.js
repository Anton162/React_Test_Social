import React from "react";
import style_myPosts from "./Post.module.css";

const Post = () => {
  return (
    <div className={style_myPosts.item}>
      <img src="https://moscoweyes.ru/images/sergushev-sergey-gennadevich_300%D1%85300.jpg" />
      Hey,why nobody love me?
    </div>
  );
};

export default Post;
