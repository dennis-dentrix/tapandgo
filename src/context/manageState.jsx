import { createContext, useContext, useReducer } from "react";

const AppState = createContext();

const initialState = {
  user: {},
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
  const [{ state }, dispatch] = useReducer(reducer, initialState);

  return <AppState.Provider value={{ state }}>{children}</AppState.Provider>;
}

function useAppState() {
  const context = useContext(AppState);
  if (context === undefined) throw new Error("Context used in the wrong place");
  return context;
}

export { AppProvider, useAppState };
