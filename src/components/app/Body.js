import { useState, useRef } from "react";
import classes from "./Body.module.css";
import Input from "./Input";
import defaultProfileImage from "../../public/defaultProfileImage.jpg";

const Body = (props) => {
  const inputTypes = ["Name", "Date of birth", "Religion", "Height"];
  let [profileImage, setProfileImage] = useState(defaultProfileImage);
  let inputImageRef = useRef(null);

  const logoutHandler = () => {
    props.onClick(false);
  };

  const onFileChange = (event) => {
    let uploadedImage = event.target.files[0];
    let imageURL = URL.createObjectURL(uploadedImage);
    setProfileImage(imageURL);
  };

  return (
    <div className={classes.bodyPage}>
      <div className={classes.navbar}>
        <div>Profile</div>
        <button onClick={logoutHandler}>Logout</button>
      </div>

      <div className={`${classes.body} ${classes.card}`}>
        <div className={classes.image}>
          <input ref={inputImageRef} type="file" onChange={onFileChange} />
          <img
            onClick={() => inputImageRef.current.click()}
            src={profileImage}
            alt="profile image"
          />
        </div>

        <div className={classes.details}>
          {inputTypes.map((input) => {
            return <Input key={input} input={input} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
