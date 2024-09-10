import { getAccessToken } from "@/constants/constants";
import React, { useEffect, useState } from "react";

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const sessionToken = getAccessToken();
  // const sessionToken = sessionStorage.getItem('access_token')

  useEffect(() => {
    setIsAuthenticated(sessionToken ? true : false);
    setUserToken(sessionToken ? sessionToken : null);
  }, []);

  return {
    isAuthenticated,
    userToken,
  };
};

export default useAuthentication;
