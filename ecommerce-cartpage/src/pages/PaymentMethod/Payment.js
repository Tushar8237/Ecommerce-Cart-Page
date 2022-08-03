import React from "react";
import "./Payment.css";
import paypal from "../../asset/paypal.png";
import visa from "../../asset/visa.png";
import mastercard from "../../asset/mastercard.png";
import maestro from "../../asset/maestro.png";
import discover from "../../asset/discover.png";
import ideal from "../../asset/ideal.png";
import inPost from "../../asset/inPost.jpg";
import dpd from "../../asset/dpd.jpg";
import dhl from "../../asset/dhl.png";
import fedex from "../../asset/fedex.png";

const data = [
  {
    id: 1,
    image: inPost,
    amount: "$20.00",
  },
  {
    id: 2,
    image: dpd,
    amount: "$12.00",
  },
  {
    id: 3,
    image: dhl,
    amount: "$15.00",
  },
  {
    id: 4,
    image: fedex,
    amount: "$10.00",
  },
];

const Payment = () => {
  return (
    <div className="payment_div">
      <div>
        <div>Payment Method</div>
        <div className="img_div">
          <img src={paypal} alt="paypal" className="img" />
          <img src={visa} alt="paypal" className="img" />
          <img src={mastercard} alt="paypal" className="img" /> <br />
          <img src={maestro} alt="paypal" className="img" />
          <img src={discover} alt="paypal" className="img" />
          <img src={ideal} alt="paypal" className="img" />
        </div>
      </div>
      <div>
        <div>Delivery Method</div>
        {data.map(({ id, image, amount }) => {
          return (
            <div key={id} className="inpost_div">
              <img src={image} alt="paypal" className="inpost_img" />
              <p>{amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Payment;
