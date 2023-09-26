import React from "react";
import style_profile from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" />
      </div>

      <div>avatar discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
