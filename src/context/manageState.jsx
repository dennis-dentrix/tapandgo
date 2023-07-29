import { createContext, useContext, useReducer } from "react";

const AppState = createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  token: "",
  error: "",
};

const BASE_URL = "https://tapandgokenya.com/api/v1";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { isLoading: true };
    case "user/login":
      return { ...state, isLoading: false };
    case "user/register":
      return { ...state, isLoading: false };
    case "user/activated":
      return { ...state, isLoading: false };
    case "error":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error("Something went wrong");
  }
}

function AppProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, token }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function registerCommuter(firstName, phoneNumber, email, dob) {
    dispatch({ type: "loading" });
    try {
      var res = await fetch(`${BASE_URL}/auth/commuter/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          phone_number: phoneNumber,
          email: email,
          dob: dob,
        }),
      });

      const data = await res.json();

      if (data.status == false) {
        dispatch({ type: "error", payload: "Something went wrong" });
      }

      dispatch({ type: "user/register" });
      return data.status;
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "error", payload: "Something went wrong" });
    }
  }

  async function logIn(email) {
    dispatch({ type: "loading" });
    try {
      var res = await fetch(`${BASE_URL}/auth/commuter/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await res.json();

      console.log(data);
      dispatch({ type: "user/login" });
    } catch (err) {
      dispatch({ type: "error", payload: "Something went wrong" });
    }
  }

  async function activateOtp(otp) {
    try {
      var res = await fetch(`${BASE_URL}/auth/commuter/activate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otpcode: otp }),
      });

      var data = await res.json();
      console.log(data);

      dispatch({ type: "user/activated" });
    } catch (error) {
      dispatch({ type: "error", payload: "something went wrong" });
    }
  }

  return (
    <AppState.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        token,
        dispatch,
        registerCommuter,
        logIn,
        activateOtp,
      }}
    >
      {children}
    </AppState.Provider>
  );
}

function useAppState() {
  const context = useContext(AppState);
  if (context === undefined) throw new Error("Context used in the wrong place");
  return context;
}

export { AppProvider, useAppState };
