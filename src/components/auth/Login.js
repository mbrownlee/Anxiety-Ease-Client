import React, { useRef } from "react";
// import "./Login.css";
import useSimpleAuth from "../../hooks/useSimpleAuth";

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const { login } = useSimpleAuth();

  // Simplistic handler for login submit
  const handleLogin = (e) => {
    e.preventDefault();

    /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
    const credentials = {
      email: email.current.value,
      password: password.current.value,
    };

    login(credentials).then(() => {
      props.history.push({
        pathname: "/",
      });
    });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form--login" onSubmit={handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <fieldset className="form--box">
          <label htmlFor="inputEmail"> Email </label>
          <input
            ref={email}
            type="email"
            className="form-control"
            placeholder="email"
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