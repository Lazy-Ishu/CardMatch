import React from "react";

const Scores = ({ totalTurns, timeTaken }) => {
  console.log(totalTurns);
  return (
    <div className="finalScore">
      <h1>You Won</h1>
      <div className="scoreContent">
        <p className="truns">
          <span className="w-5">Turns: </span>
          {totalTurns}
        </p>
        <p className="timeTaken">
          <span className="w-5">Time Taken: </span>
          {timeTaken}
        </p>
      </div>
    </div>
  );
};

export default Scores;
