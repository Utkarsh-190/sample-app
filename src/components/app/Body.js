import { useState } from "react";
import classes from "./Body.module.css";
import Input from "./Input";
import defaultProfileImage from "../../public/defaultProfileImage.jpg";

const Body = (props) => {
  const inputTypes = ["Name", "Date of birth", "Religion", "Height"];

  const logoutHandler = () => {
    props.onClick(false);
  };

  let [profileImage, setProfileImage] = useState(null);

  const onFileChange = (event) => {
    console.log(event);
    // setProfileImage(event.target))
  };

  return (
    <div className={classes.bodyPage}>
      <div className={classes.navbar}>
        <div>Profile</div>
        <button onClick={logoutHandler}>Logout</button>
      </div>

      <div className={`${classes.body} ${classes.card}`}>
        <div className={classes.image}>
          <img src={defaultProfileImage} alt="profile image" />
          <input type="file" onChange={onFileChange} />
        </div>

        <div className={classes.details}>
          {inputTypes.map((input) => {
            return <Input input={input} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
