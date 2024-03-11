import React from "react";
import "./style.css"

const Product =({Name,Price,Image})=> {
  return (
    <div className="main">
        <h1>New Product</h1>
        <img src={Image} alt="" />
        <p>Name: <i>{Name}</i></p>
        <p>Price: <i>{Price}</i></p>
    </div>
  );
}

export default Product;