import "../styles/App.scss";
import Logo from "../assets/logo.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const history = useHistory();
  const handleSubmit = () => {
    //simple login
    if (username === "admin" && password === "admin") {
      setLogin(true);
      history.push("/dashboard");
      setLogin("");
    } else {
      setLogin(false);
      history.push("/");
    }
  };

  return (
    <Router>
      <div className="login__background lg:p-20 sm:p-0">
        <div className="login__container h-auto p-12 lg:w-80 m-auto sm:w-full">
          <form>
            <img src={Logo} alt="Logo" className="h-auto w-48 m-auto mb-10" />
            <input
              type="text"
              name="user"
              placeholder="Username or email"
              className="w-full mb-6 login__form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-6 login__form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-primary" onClick={() => handleSubmit()}>
              Log in
            </button>
            <div className="text-center">
              <span className="text-md text-red-700 block">
                {!login ? "Invalid credentials" : " "}
              </span>
              <span className="text-sm">
                Don't have account?{" "}
                <Link to="/" className="text-white">
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Router>
  );
}

export default Login;
