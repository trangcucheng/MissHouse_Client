import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const UserLayOut = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [size, setSize] = useState("");
  const [temp, setTemp] = useState(true);
  const [outStock, setOutStock] = useState([]);
  const [buy, setBuy] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [header, setHeader] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setCartItem([]);
    setBuy([]);
  }, [temp]);

  const refresh = (data) => {
    setTemp(data);
  };

  const userHandler = (user) => {
    setUser(user);
  };

  const searchHandler = (keyword) => {
    setKeyword(keyword);
  };

  const changeHeaderHandler = (value) => {
    setHeader(value);
  };

  const buyHandler = (id) => {
    setBuy([...buy, id]);
  };

  const cancelBuyHandler = (id) => {
    const res = buy.filter((item) => item != id);
    setBuy(res);
  };

  const clearBuyHandler = () => {
    setBuy([]);
  };

  const changeSizeHandler = (event) => {
    const len = event.target.value;
    if (len < 220 || len > 320) {
      setSize("Kích thước không hợp lệ.");
    } else {
      if (len >= 200 && len <= 240) {
        setSize("Size: 39");
      } else if (len < 280) {
        setSize("Size: 40");
      } else {
        setSize("Size: 41");
      }
    }
  };

  const addHandler = (data) => {
    const res = cartItem.find((item) => item.id === data.id);
    if (res) {
      setCartItem(
        cartItem.map((item) =>
          item.id === data.id
            ? { ...res, quantity: res.quantity + data.quantity }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, data]);
    }
  };
  const cartHandler = (data) => {
    setCartItem(data);
  };

  const clearHandler = () => {
    const res = cartItem.filter((item) => !buy.includes(item.id + ""));
    setCartItem(res);
  };

  const outStockHandler = (data) => {
    setOutStock(data);
  };

  const setCartItemHandler = (data) => {
    setCartItem(data);
  };

  return (
    <div className="col-12">
      <Header
        header={header}
        searchHandler={searchHandler}
        user={user}
        userHandler={userHandler}
        refresh={refresh}
      ></Header>
      <Switch>
        <Route path="/" exact>
          <Home changeHeaderHandler={changeHeaderHandler} user={user}></Home>
        </Route>             
      </Switch>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UserLayOut;
