import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

function TpoLogin({ login, setLogin }) {
  const [logInError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    console.log(response);
    try {
      const { data } = await axios.post("http://localhost:8000/tpo/google-login", {
        code: response.code,
      }, {
        withCredentials: true,
      });

      

      // const { email, name, token, google_creds } = data;
      // console.log("User email:", email);
      // console.log("User name:", name);
      // console.log("Token:", token);
      // console.log("Google creds:", google_creds);

      setLoginError(false);
      setLogin(true);
      if (data.status === 200) {
        navigate('/tpo_portal');
      }
    } catch (error) {
      setLoginError(true);
      console.error(error);
    }
  };

  const onFailure = (error) => {
    console.log("Google Sign-In was unsuccessful. Try again later", error);
    setLoginError(true);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => onSuccess(tokenResponse),
    onError: {onFailure},
    scope: "email profile https://www.googleapis.com/auth/gmail.addons.current.message.readonly",
    flow: 'auth-code',
  });

  return (
      <div className="flex">
        <div className="flex border-l-4 p-20 pt-10 flex-col flex-auto bg-[#F6F8FE]">
          <div className="flex flex-col">
            <div className="flex mt-10 justify-start items-center">
              <img
                className="w-60 h-60"
                src="/careersynclogo.svg"
                alt="CareerSync Logo"
              />
              <p className="text-6xl font-bebas flex justify-center relative right-5 py-3">
                CAREERSYNC Tpo Login
              </p>
            </div>
            <div className="text-6xl font-playFair mb-2">
              Unlock Your Future
            </div>
            <div className="text-1xl text-[#959595]">
              Enter your University Credentials
            </div>
          </div>
          <div className="flex flex-col items-center">
          <button onClick={()=>googleLogin()} >Sign in with Google 🚀 </button>
            {logInError && <div className="text-red-700">Failed to login with Google. Try again.</div>}
          </div>
        </div>
      </div>
  );
}

export default TpoLogin;