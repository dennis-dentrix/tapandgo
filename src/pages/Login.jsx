import { useState } from "react";
import { Link } from "react-router-dom";
import { InfoCircle } from "react-bootstrap-icons";
import { handleUser } from "./Register";

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function handleLogin(ev) {
    ev.preventDefault();
    // navigate("/");

    const token = await handleUser({
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
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
