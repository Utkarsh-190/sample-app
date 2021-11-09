import { useState } from "react";
import classes from "./App.module.css";
import Login from "./components/login/Login";
import Body from "./components/app/Body";

function App() {
  let [loggedIn, setLoggedIn] = useState(false);

  const authenticate = (_loggedIn) => {
    setLoggedIn(_loggedIn);
  };

  return loggedIn ? (
    <Body onClick={authenticate} />
  ) : (
    <Login onClick={authenticate} />
  );
}

export default App;
