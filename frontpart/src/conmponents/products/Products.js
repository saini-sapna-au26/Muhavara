import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

import { AiOutlineDown } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useState, useEffect } from "react";
const axios = require("axios");

const Products = () => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(1);
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://run.mocky.io/v3/175ea56f-f4b7-427c-b772-84a768319e88",
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const filterItem = (item) => {
    const filteredData = orders.filter((el) => {
      if (item === "") {
        return el;
      } else {
        return el.product_cat.includes(item);
      }
    });
    setData(filteredData);
  };

  useEffect(() => {
    //loader thing

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setOrders(response.data);
        setData(response.data);
        //loader thing
      })
      .catch(function (error) {
        console.error(error);
        //loader thing
      });
  }, []);

  return (
    <div className="products">
      <div className="head">
        <div className="title">
          <div className="div">
            <h2 className="name">Space for Taste</h2>
            <p className="date"> Saturday 16 July 2022</p>
          </div>
          <div className="search1">
            <input
              onChange={(e) => {
                filterItem(e.target.value);
              }}
              className="search"
              placeholder=" search food item here..."
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div className="choose">
        <div className="items">
          <a
            className="item12"
            onClick={() => {
              filterItem("sweet");
            }}
          >
            Sweet
          </a>
          <a
            className="item12"
            onClick={() => {
              filterItem("dessert");
            }}
          >
            Dessert
          </a>
          <a
            className="item12"
            onClick={() => {
              filterItem("noodles");
            }}
          >
            Noodles
          </a>
          <a
            className="item12"
            onClick={() => {
              filterItem("burger");
            }}
          >
            Burger
          </a>
          <a
            className="item12"
            onClick={() => {
              filterItem("veg");
            }}
          >
            Veg
          </a>
          <a
            className="item12"
            onClick={() => {
              filterItem("nonveg");
            }}
          >
            Non Veg
          </a>
        </div>
      </div>
      <div className="kuch">
        <div className="dishes">
          <h4>Choose Items</h4>
          <button
            className="button12"
            onClick={() => {
              setHide(!hide);
              filterItem("");
            }}
          >
            <div>
              <AiOutlineDown />
              Dine In
            </div>
          </button>
        </div>
        {!hide && (
          <div className="toggle">
            <ul className="toggle-item">
              <li
                onClick={() => {
                  filterItem("sweet");
                }}
                className="t-item"
              >
                Sweet
              </li>
              <li
                onClick={() => {
                  filterItem("nonveg");
                }}
                className="t-item"
              >
                Non Veg
              </li>
              <li
                onClick={() => {
                  filterItem("dessert");
                }}
                className="t-item"
              >
                Dessert
              </li>
              <li
                onClick={() => {
                  filterItem("veg");
                }}
                className="t-item"
              >
                Veg
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="products">
        <div>
          <div className="product">
            {data &&
              data.map((orde) => {
                return (
                  <div className="pro">
                    <img className="img1" src={orde.product_img} alt=".." />
                    <h6 className="item1">{orde.product_name}</h6>
                    <p className="price1">
                      <BiRupee />
                      {orde.price}
                    </p>
                    <p className="avl1">{orde.available}</p>
                    <button
                      className="buy"
                      onClick={() =>
                        handleAdd({
                          id: orde.id,
                          product_img: orde.product_img,
                          product_name: orde.product_name,
                          price: orde.price,
                          quantity: 1,
                        })
                      }
                    >
                      Buy Now
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
