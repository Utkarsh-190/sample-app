import classes from "./Login.module.css";

const Login = (props) => {
  const loginHandler = () => {
    props.onClick(true);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="name">Username</label>
        <input type="text" />
      </div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
