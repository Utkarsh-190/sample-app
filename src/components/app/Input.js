import classes from "./Input.module.css";

const Input = ({ input }) => {
  let _input;

  if (input === "Name") {
    _input = <input type="text" />;
  } else if (input === "Date of birth") {
    _input = <input type="date" />;
  } else if (input === "Religion") {
    _input = <input type="text" />;
  } else if (input === "Height (in cm)") {
    _input = <input type="number" />;
  }

  return (
    <div className={`${classes.input} ${classes.card}`}>
      <label>{input}</label>
      {_input}
    </div>
  );
};

export default Input;
