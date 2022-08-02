import React, { useState } from "react";
import "./logIn.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.warn(result);
      alert("Register successful ");
    } catch (error) {
      alert("error");
    }
  };
  return (
    <div>
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
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="login_button">
          <button className="btn2" type="submit" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
