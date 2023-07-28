import { useState } from "react";

import { User } from "../components/User";

import "./styles/register.scss";

export const Register = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleLogin = () => setLogin(!login);

  return (
    <main className="main">
      <div className="form-box">
        <div className="form-header">
          {/* <h1 className="form-welcome">
            Welcome to <span>Tap&Go-KE</span>
          </h1>
          <p className="form-note">
            The best commute experience to your destination
          </p> */}
        </div>

        {login ? (
          <form className="form" onSubmit={(e) => console.log(e)}>
            <span className="title">Log in</span>
            <span className="subtitle">Log in to access your account.</span>
            <div className="form-container">
              <input
                autoFocus
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button>Log in</button>
          </form>
        ) : (
          <form className="form" onSubmit={(e) => console.log(e)}>
            <span className="title">Activate account</span>
            <span className="subtitle">
              Create a free account with your email.
            </span>
            <div className="form-container">
              <input
                type="password"
                className="input"
                placeholder="OTP Code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Sign up</button>
          </form>
        )}
        <div className="form-section">
          {login ? (
            <p>
              Don&apos;t have an account yet?{" "}
              <span onClick={handleLogin} style={{ cursor: "pointer" }}>
                Sign up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={handleLogin} style={{ cursor: "pointer" }}>
                Login
              </span>
            </p>
          )}
        </div>
        <footer className="footer">
          {/* <InfoCircle style={{ color: "red", fontSize: "2rem" }} /> */}
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
