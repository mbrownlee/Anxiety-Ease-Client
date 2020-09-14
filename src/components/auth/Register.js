import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import useSimpleAuth from "../../hooks/useSimpleAuth";
// import "./Login.css";

const Register = (props) => {
	const email = useRef();
	const userName = useRef();
	const password = useRef();
	const verifyPassword = useRef();
	const { register } = useSimpleAuth();

	const handleRegister = (e) => {
		e.preventDefault();

		const newUser = {
			username: userName.current.value,
			email: email.current.value,
			password: password.current.value,
		};

		register(newUser).then(() => {
			props.history.push({
				pathname: "/",
			});
		});
	};

	return (
		<main style={{ textAlign: "center" }}>
			<form className="form--login" onSubmit={handleRegister}>
				<h1 className="h3 mb-3 font-weight-normal">Register To Use Anxiety Ease</h1>
				<fieldset>
					<label htmlFor="userName"> Username </label>
					<input
						ref={userName}
						type="text"
						name="userName"
						className="form-control"
						placeholder="Username"
						required
						autoFocus
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="inputEmail"> Email address </label>
					<input
						ref={email}
						type="email"
						name="email"
						className="form-control"
						placeholder="Email address"
						required
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="inputPassword"> Password </label>
					<input
						ref={password}
						type="password"
						name="password"
						className="form-control"
						placeholder="Password"
						required
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="verifyPassword"> Verify Password </label>
					<input
						ref={verifyPassword}
						type="password"
						name="verifyPassword"
						className="form-control"
						placeholder="Verify password"
						required
					/>
				</fieldset>
				<fieldset>
					<button type="submit">Sign in</button>
				</fieldset>
			</form>
		</main>
	);
};
export default withRouter(Register);
