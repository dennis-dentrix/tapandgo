import { Link } from "react-router-dom";
import { InfoCircle } from "react-bootstrap-icons";
import "./styles/register.scss";
import { useState } from "react";

export async function handleUser(credentials) {
  return fetch("http://localhost:8080/register", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export const Register = ({ setToken }) => {
  // const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleRegister(ev) {
    ev.preventDefault();
    // navigate("/");

    const token = await handleUser({
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Already have an account? <Link to="/login">Log in</Link>{" "}
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
// Register.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
