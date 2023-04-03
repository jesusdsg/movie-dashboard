import { userStore } from "@stores/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@assets/logo.png";

interface LoginProps {
  darkMode: boolean;
}

export default function Login({ darkMode }: LoginProps) {
  const setLogged = userStore((store: any) => store.setLogged);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      credentials.email === "admin@mail.com" &&
      credentials.password === "admin"
    ) {
      setLogged(true);
      setError(false);
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-20">
      <form className="login-container">
        <img src={logo}></img>
        <div className="login-container__input-container">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@movie.com"
            className={
              !darkMode
                ? "login-container__input--light"
                : "login-container__input--dark"
            }
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="login-container__input-container">
          <input
            type="password"
            name="password"
            placeholder="password"
            className={
              !darkMode
                ? "login-container__input--light"
                : "login-container__input--dark"
            }
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="login-container__input-container">
          {error ? (
            <span className="login_container__label--error">
              Invalid credentials, please try again.
            </span>
          ) : null}
        </div>
        <div className="login-container__input-container">
          <a
            aria-label="Forgotten password"
            className="login-container__forgot"
            href="#"
          >
            <span>Forgot your password?</span>
          </a>
        </div>

        <div className="login-container__btn-container">
          <button
            type="submit"
            className="btn btn--main"
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
