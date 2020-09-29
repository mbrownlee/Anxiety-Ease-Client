import React, { useRef } from "react";
// import "./Login.css";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const Login = (props) => {
  const username = useRef();
  const password = useRef();
  const { login } = useSimpleAuth();

  
  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };

    login(credentials).then(() => {
      props.history.push({
        pathname: "/activities",
      });
    });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form--login" onSubmit={handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <fieldset className="form--box">
          <label htmlFor="userName"> Username </label>
          <input
            ref={username}
            type="username"
            className="form-control"
            placeholder="username"
            required
            autoFocus
          />
        </fieldset>
        <fieldset className="form--box">
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset className="form--box">
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </main>
  );
};
export default Login;