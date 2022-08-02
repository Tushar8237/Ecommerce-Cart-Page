import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "./logIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Please fill all the Fields");
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.warn(result);
      alert(`Login successful ${result.user.email}`);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="login_div">
      <div className="input_div">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login_button">
        <button className="btn1" type="submit" onClick={handleSubmit}>
          Login
        </button>
        <button className="btn2" type="submit">
          Register
        </button>
      </div>
    </div>
  );
};

export default LogIn;
