import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const Login = () => {
  //   const credentials = useState({ username: "", password: "" });
  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");

  async function handleSubmit() {
    console.log("onsubmit called");
    const response = await axios.post("http://localhost:8080/auth/login");
    console.log("response:" + response);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", passsword);

    console.log(sessionStorage);
  }
  function handleInputUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleInputPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
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
  );
};

export default Login;
