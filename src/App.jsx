import "./App.css";
import { RxReset } from "react-icons/rx";
import Card from "./component/Card";
import { boardData } from "./BoardData";
import { useEffect, useState } from "react";
import CustomiseButtons from "./component/CustomiseButtons";
import StartPop from "./component/StartPop";
import Scores from "./component/Scores";

function App() {
  let [board, setboard] = useState(boardData[0]);
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [turns, setturns] = useState(0);
  const [startGame, setStartGame] = useState("StartPop");
  let [sec, setSec] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    randomCards();
  }, [board]);

  useEffect(() => {
    if (cards.length > 0) {
      let cardsTure = cards.every((ele) => ele.matched);
      if (cardsTure) {
        setStartGame("Scores");
        setTimer(false);
        console.log(timer);
      }
    }
  }, [cards]);

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.src === secondCard.src) {
        setCards((pevCard) => {
          return pevCard.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true };
            } else return card;
          });
        });
        reset();
      } else {
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    let intervel;
    if (startGame === "Scores" || startGame === "StartPop") {
      return;
    }

    setTimeout(() => {
      intervel = setInterval(() => {
        setSec((pre) => pre + 1);
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(intervel);
    };
  }, [startGame]);

  const randomCards = () => {
    const suffledCards = [...board.cards, ...board.cards]
      .sort(() => Math.random() - 0.8)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(suffledCards);
  };

  const handleCardChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const reset = () => {
    setFirstCard(null);
    setSecondCard(null);
    setturns((turns) => turns + 1);
  };

  const handleResetbutton = () => {
    setFirstCard(null);
    setSecondCard(null);
    setturns(0);
    randomCards();
    setSec(0);
    setTimer(false);
  };

  const handleBoardChoose = (e) => {
    boardData.find((item) => {
      item.name === e.currentTarget.value ? setboard(item) : "";
      handleResetbutton();
    });
  };

  const handleStartButton = () => {
    setStartGame(false);
    setTimer(true);
    randomCards();
  };

  let getZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else return num;
  };

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const second = sec % 60;
    return `${getZero(min)}:${getZero(second)}`;
  };

  return (
    <div className="site-wrapper">
      {startGame && (
        <div className="popup">
          {startGame === "StartPop" ? (
            <StartPop startButton={handleStartButton} buttonTitle={"Start"} />
          ) : startGame === "Scores" ? (
            <div className="scorePop">
              <Scores totalTurns={turns} timeTaken={formatTime(sec)} />
              <StartPop
                startButton={handleStartButton}
                buttonTitle={"Restart"}
              />
            </div>
          ) : (
            ""
          )}

          <CustomiseButtons BoardChoose={handleBoardChoose} />
        </div>
      )}
      <div className="upper_bar">
        <h1>
          Match <span>Card</span>
        </h1>

        <div className="sidebar">
          <button className="icon" onClick={handleResetbutton}>
            <RxReset size={30} />
          </button>
        </div>
        <div className="score">
          <h3 className="turns">{getZero(turns)}</h3>
          <h3 className="timing">{formatTime(sec)}</h3>
        </div>
      </div>
      <div className="gameBoard">
        {cards.map((item) => (
          <Card
            key={item.id}
            backImg={board.backImg}
            cardData={item}
            handlclick={handleCardChoice}
            flipped={item === firstCard || item === secondCard || item.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
