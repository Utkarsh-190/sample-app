import classes from "./Body.module.css";
import Input from "./Input";

const Body = (props) => {
  const inputTypes = ["Name", "Date of birth", "Religion", "Height"];

  const logoutHandler = () => {
    props.onClick(false);
  };

  return (
    <div className={classes.bodyPage}>
      <div className={classes.navbar}>
        <button onClick={logoutHandler}>Logout</button>
      </div>

      <div className={classes.body}>
        <div className={classes.image}>
          <img src="adfafa" alt="profile image" />
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
