import React from "react";
import style_profileInfo from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" />
      </div>

      <div className={style_profileInfo.descriptionBlock}>
        avatar discription
      </div>
    </div>
  );
};

export default ProfileInfo;
