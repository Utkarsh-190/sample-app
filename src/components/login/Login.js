import { useRef } from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  let usernameRef = useRef(null);
  let passwordRef = useRef(null);

  const loginHandler = () => {
    props.onClick(true);
  };

  return (
    <div className={classes.loginPage}>
      <div className={classes.card}>
        <div>Login</div>
        <div className={classes.form}>
          <div className={classes.username}>
            <input
              ref={usernameRef}
              type="text"
              placeholder={" "}
              className={classes.i}
            />
            <label
              onClick={() => usernameRef.current.click()}
              htmlFor="name"
              className={classes.l}
            >
              Username
            </label>
          </div>
          <div className={classes.password}>
            <input
              ref={passwordRef}
              type="password"
              placeholder={" "}
              className={classes.i}
            />
            <label htmlFor="name" className={classes.l}>
              Password
            </label>
          </div>
          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
