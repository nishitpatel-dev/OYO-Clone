import React from "react";

const PromoCards = ({ imgSrc, title, description }) => {
  return (
    <>
      <div className="promocard">
        <div className="promocards">
          <span>
            <img src={imgSrc} alt="images" height={25} />
          </span>
          <div className="promoinfo">
            <p>{title}</p>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoCards;
