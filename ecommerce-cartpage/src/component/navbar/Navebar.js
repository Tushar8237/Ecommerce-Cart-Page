import React from "react";
import "./Navebar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";

const Navebar = () => {
  return (
    <div className="main_div">
      <div className="wrapper_div">
        <div className="left_div">
          <CgShoppingBag />
          <p> E-Shop</p>
        </div>
        <div className="center_div">
          <Link className="headings" to="/mens">
            Mens
          </Link>
          <Link className="headings" to="/womens">
            Womens
          </Link>
          <Link className="headings" to="/kids">
            Kids
          </Link>
        </div>
        <div className="right_div">
          <AiOutlineSearch className="icons" />
          <AiOutlineShoppingCart className="icons" />
          <BiUserCircle className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Navebar;
