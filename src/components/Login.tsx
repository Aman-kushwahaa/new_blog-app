import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Link, redirect, unstable_HistoryRouter } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const credentials = {
    username,
    password,
  };
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  async function handleSubmit() {
    console.log("onsubmit called");
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      credentials
    );
    console.log("response:" + JSON.stringify(response.data));
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);

    console.log(sessionStorage);
    console.log(JSON.stringify(credentials));

    const token = response.data.token;
    console.log(token);

    if (token) {
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsUserLoggedIn(true);
    }
  }

  function handleInputUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleInputPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  if (!isUserLoggedIn) {
    return (
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center p-5 text-lg">Login</div>
            <input
              type="text"
              className="p-5 border border-gray-300 rounded"
              placeholder="Username..."
              onChange={handleInputUsername}
            />
            <br />
            <input
              type="password"
              className="p-5 border border-gray-300 rounded"
              placeholder="Password..."
              onChange={handleInputPassword}
            />
            <br />
            <button
              className="bg-slate-400 rounded p-3 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
};

export default Login;
