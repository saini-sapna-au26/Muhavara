import "./cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const axios = require("axios");

const Cart = () => {
  const [order, setOrder] = useState([]);
  const options = {
    method: "GET",
    url: "https://run.mocky.io/v3/9bd73d8b-26f4-43e7-815e-e2c3bb8da1c4",
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  const [discount, setDiscount] = useState(0);
  const [total, settotal] = useState(0);
  const sumtotal = () => {
    let total = 0;
    products.map((d) => {
      total += d.price * d.quantity;
    });
    total = total - discount;
    settotal(total);
  };

  return (
    <div onMouseMove={sumtotal} className="cart">
      <div className="title">
        <h2 className="orderid">Order #1236</h2>
      </div>
      <div className="button1">
        <button className="button">Dine In</button>
        <button className="button">To GO</button>
        <button className="button">Delivery</button>
      </div>
      <div className="heading">
        <p className="item">Item</p>
        <p className="qty">Qty</p>
        <p className="price">Price</p>
      </div>
      <div className="order">
        {products.length ? (
          products.map((data, id) => {
            return (
              <div key={data.id} className="order-deatils">
                <div className="data">
                  <img className="pro_img" src={data.product_img} alt=".." />
                  <div className="div">
                    <p className="p-name">{data.product_name}</p>
                    <p className="p-price">
                      <BiRupee />
                      {data.price}
                    </p>
                  </div>
                  <div className="quantity">{data.quantity}</div>
                  <div className="quantity1">
                    <p>
                      <BiRupee />
                      {data.quantity * data.price}
                    </p>
                  </div>
                </div>
                <div className="input">
                  <input
                    type="text"
                    className="input1"
                    placeholder="write something here.."
                  ></input>
                  <button
                    className="del"
                    onClick={() => {
                      handleRemove(id);
                    }}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="dummy"></div>
        )}
      </div>
      <div className="clac">
        <div className="dis">
          <p className="discount">Discount</p>
          <p className="paise">{discount}</p>
        </div>
        <div className="tot">
          <p className="total">Sub Total</p>
          <p className="total-paise">{total}</p>
        </div>
      </div>
      <div className="clear">
        <button className="pay">Continue To Payment</button>
      </div>
    </div>
  );
};

export default Cart;
