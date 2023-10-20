import React from "react";


const Card = ({ backImg, cardData, handlclick, flipped }) => {

  return (
        <div className='cards'  key={cardData.id}>
          <div className={`CardsItem ${flipped&&'flip'}` }>
          <img src={cardData.src} alt="" className="frontbg"/>
          <img src={backImg} alt="" className="backBg" onClick={()=>handlclick(cardData)}/>
          </div>
        </div>
    
  );
};

export default Card;
