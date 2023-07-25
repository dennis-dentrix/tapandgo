import { useRef } from "react";
import { useState } from "react";

import { InfoCircle } from "react-bootstrap-icons";
import { User } from "../components/User";

import "./styles/register.scss";

export const Register = ({ setToken }) => {
  // const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);

  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputPassword = useRef("");

  const handleLogin = () => setLogin(!login);

  async function handleRegister(ev) {
    ev.preventDefault();
    // navigate("/");

    const token = await User({
      userName,
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

        {login ? (
          <form className="form" onSubmit={handleRegister}>
            <span className="title">Sign up</span>
            <span className="subtitle">
              Create a free account with your email.
            </span>
            <div className="form-container">
              <input
                autoFocus
                type="text"
                className="input"
                placeholder="Full Name"
                ref={inputName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                ref={inputEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                ref={inputPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Sign up</button>
          </form>
        ) : (
          <form className="form" onSubmit={handleRegister}>
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
        )}
        <div className="form-section">
          {login ? (
            <p>
              Already have an account? <span onClick={handleLogin}>Login</span>
            </p>
          ) : (
            <p>
              Don&apos;t have an account yet?{" "}
              <span onClick={handleLogin}>Sign up</span>
            </p>
          )}
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
// Register.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
