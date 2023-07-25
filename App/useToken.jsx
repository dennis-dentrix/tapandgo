import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    try {
      const tokenString = sessionStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    } catch (err) {
      console.log("Error getting the Token", err.message);
    }
  };

  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
