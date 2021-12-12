import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";
import "../styles/Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const toggleLogin = (event) => {
    event.preventDefault();
    setIsLogin((prevState) => !prevState);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let name;
    if (nameInputRef.current) {
      if (!nameInputRef.current.value.trim().isEmpty) {
        name = nameInputRef.current.value;
      }
      setError(true);
    }
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (
      email.trim().isEmpty ||
      password.trim().isEmpty ||
      !email.includes("@") ||
      !email.includes(".") ||
      password.length < 5
    ) {
      setError(true);
    }
    let url = `${process.env.REACT_APP_BACKEND_URL}signup`;
    if (isLogin) {
      url = `${process.env.REACT_APP_BACKEND_URL}login`;
    }
    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
    } catch (error) {
      setError(true);
    }

    if (response.ok) {
      const responseData = await response.json();
      dispatch(
        authActions.login({
          token: responseData.token,
          user: responseData.data.user
        })
      );
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__heading">{isLogin ? "LOGIN" : "SIGNUP"}</h1>
        <form className="auth__form" onSubmit={handleFormSubmit}>
          {!isLogin && (
            <div className="auth__form__group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
          )}

          <div className="auth__form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className="auth__form__group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              minLength="5"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="auth__form__action">
            <a href="/" onClick={toggleLogin}>
              {isLogin ? "New User? Register now" : "Already Registered? Login"}
            </a>
            <button type="submit" className="auth__button">
              {isLogin ? "LOGIN" : "SIGNUP"}
            </button>
            {error && <h2>An error occurred while authenticating</h2>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
