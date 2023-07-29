import { useState } from "react";

import "./styles/register.scss";
import { useAppState } from "../context/manageState";

import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [login, setLogin] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { registerCommuter, isLoading } = useAppState();
  console.log(isLoading);

  const handleLogin = () => setLogin(!login);

  const success = () => {
    messageApi.open({
      type: "success",
      content: `OTP Code sent to ${email}`,
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const status = await registerCommuter(userName, phone, email, dob);
    if (status == 201) {
      success();
    } else {
      error();
    }
  }

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 17,
        color: "white",
      }}
      spin
    />
  );

  return (
    <>
      {contextHolder}
      <main className="main">
        <div className="form-box">
          <div className="form-header"></div>

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
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <span className="title">Activate account</span>
              <span className="subtitle">
                Create a free account with your email.
              </span>
              <div className="form-container">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="email"
                  className="input"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="date"
                  className="input"
                  placeholder="Date of Birth"
                  value={dob}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <button>
                {isLoading ? <Spin indicator={antIcon} /> : "Sign up"}
              </button>
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
              personal data in order to improve the user experience for a
              service that you are subscribed to.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};
