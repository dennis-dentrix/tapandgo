import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { InfoCircle } from "react-bootstrap-icons";
import { User } from "../components/User";

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const inputEmail = useRef("");
  const inputPassword = useRef("");

  async function handleLogin(ev) {
    ev.preventDefault();

    const token = await User({
      email,
      password,
    });
    setToken(token);
  }
  return (
    <main className="main">
      <div className="form-box">
        <div className="form-header">
          <h1 className="form-welcome">
            Welcome to <span>Tap&Go-KE</span>
          </h1>
          <p className="form-note">
            The best commute experience to your destination
          </p>
        </div>

        <form className="form" onSubmit={handleLogin}>
          <span className="title">Log in</span>
          <span className="subtitle">Log in to access your account.</span>
          <div className="form-container">
            <input
              autoFocus
              type="email"
              className="input"
              placeholder="Email"
              ref={inputEmail}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => console.log("Clicked")}
            />
            <input
              type="password"
              disabled={false}
              className="input"
              placeholder="Password"
              ref={inputPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Log in</button>
        </form>
        <div className="form-section">
          <p>
            <Link to="/register" href="">
              Sign up
            </Link>{" "}
            instead
          </p>
        </div>
        <footer className="footer">
          <InfoCircle style={{ color: "red", fontSize: "2rem" }} />
          <p className="footer-text">
            Tap&Go- KE collects your activity which is not associated wit your
            personal data in order to improve the user experience for a service
            that you are subscribed to.
          </p>
        </footer>
      </div>
    </main>
  );
};
