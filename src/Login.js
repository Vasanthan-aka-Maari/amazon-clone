import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" onClick={login}>
            sign in
          </button>
        </form>
        <p>
          By siging in you agree to amazon's terms and conditions of use and
          sale. Please see our privacy policies. We use your browser cookies and
          search details to suggest you products by ads.
        </p>
        <button type="submit" onClick={register}>
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
