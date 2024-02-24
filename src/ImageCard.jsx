import React from "react";
const ImageCard = ({ imgSrc, heading, para1, price }) => {
  return (
    <div className="imageContainer">
      <img src={imgSrc} alt="" />
      <div className="containerContent">
        <h3>{heading}</h3>
        <p>{para1.slice(0, 90) + "..."}</p>
        <div className="priceContainer">
          <div className="price">
            <p> &#x20B9; {price}</p>
          </div>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
