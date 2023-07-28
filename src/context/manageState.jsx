import { createContext, useContext, useReducer } from "react";

const AppState = createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  token: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "user/login":
      return { ...state };
    default:
      throw new Error("Something went wrong");
  }
}

function AppProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, token }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AppState.Provider
      value={{ user, isAuthenticated, isLoading, token, dispatch }}
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
