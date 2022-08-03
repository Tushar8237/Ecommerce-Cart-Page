import React from "react";
import Payment from "../PaymentMethod/Payment";
import "./home.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import white_tshirt from "../../asset/white_tshirt.jpg";
import black_tshirt from "../../asset/black_tshirt.jpg";

const Home = () => {
  const totalPrice = 67000;
  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };
  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_VdGdvprTKB8u1w",
      currency: "INR",
      amount: amount * 100,
      name: "Tushar",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Tushar",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <div className="cart_icon">
        <AiOutlineShoppingCart className="icon" id="icon_cart" />
        <TbTruckDelivery className="icon" />
        <p>Your Cart</p>
      </div>
      <div className="wrapper">
        <div className="shipping_input_div">
          <div className="shipping">Shipping and Payment</div>
          <div className="shipping_info"> Shipping information</div>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Address" /> <br />
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="City" /> <br />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Postal code/ZIP" /> <br />
          <input type="number" placeholder="Phone number" />
          <input type="text" placeholder="Country" />
        </div>
        <Payment />

        <div className="cart_div">
          {/* <AiOutlineShoppingCart className="icon" id="icon_cart" />
          <TbTruckDelivery className="icon" />
          <p>Your Cart</p> */}
          <div className="cart_item1">
            <img className="cart_img" src={white_tshirt} alt="white_tshirt" />
            <p>T-shirt</p>
            <p>Summer Vibes</p>
            <p>#261311</p>
            <p>$89.99</p>
          </div>
          <div className="cart_item2">
            <img className="cart_img" src={black_tshirt} alt="black_tshirt" />
            <p>Basic Slim</p>
            <p>Fit T-shirt</p>
            <p>#212315</p>
            <p>$69.99</p>
          </div>
          <div>
            {/* <div className="total">Total cost $159.98</div> */}
            <button className="total">Total cost $159.98</button>

            <div className="shipping_cost">
              You are $30.02 away <br /> from free shipping
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="cart_btn1">CONTINUE SHOPPING</button>
        <button
          onClick={() => displayRazorpay(totalPrice)}
          className="cart_btn2"
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </>
  );
};

export default Home;
