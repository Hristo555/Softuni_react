import { useContext, useEffect } from "react";
import request from "../utils/request";
import { UserContext } from "../context/UserContext";

const baseURL = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
      const result = await request.post(`${baseURL}/login`, {email, password});

      return result;
    }

    return {
        login,
    }
};

export const useRegister = () => {
  const register = (email, password) => {
    return request.post(`${baseURL}/register`, {email, password});
  }

  return {
    register,
  }
};

export const useLogout = () => {
  const {accessToken, userLogOut} = useContext(UserContext);

  useEffect(() =>{
    if(!accessToken){
        return;
    }
    
    const options = {
        headers: {
        'X-Authorization': accessToken
        }
    };

    request.get(`${baseURL}/logout`, null, options)
            .then(userLogOut);

  }, [accessToken, userLogOut]);

  return {
    isLoggedOut: !!accessToken,
  };
};