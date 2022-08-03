import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mens from "../src/pages/mens/Mens";
import Womens from "../src/pages/womens/Womens";
import Kids from "../src/pages/Kids/Kids";
import Home from "./pages/home/Home";
import Navebar from "../src/component/navbar/Navebar";
import LogIn from "./component/logIn/LogIn";
import SignUp from "./component/logIn/SignUp";
import LogOut from "./component/logIn/LogOut";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        {user ? (
          <>
            <Navebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="mens" element={<Mens />} />
              <Route path="womens" element={<Womens />} />
              <Route path="kids" element={<Kids />} />
            </Routes>
            <LogOut />
          </>
        ) : (
          <>
            <LogIn />
            <SignUp />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
