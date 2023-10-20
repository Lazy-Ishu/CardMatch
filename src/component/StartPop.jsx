import React from "react";

const StartPop = ({startButton, buttonTitle}) => {
  return (
    <button className={` ${buttonTitle==='Start'?'startButton':''} buttonComponent `} onClick={startButton}>
      {buttonTitle}
    </button>
  );
};

export default StartPop;
