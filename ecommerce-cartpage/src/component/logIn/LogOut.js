import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const LogOut = () => {
  const logOut = () => {
    signOut(auth);
    alert("Logout Successfull !");
  };
  return (
    <div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default LogOut;
