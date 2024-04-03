import React from "react";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();

  return (
    <div className="basket">
      <h1>Welcome to Basket </h1>
      <p>This page is under Development.</p>
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Basket;
