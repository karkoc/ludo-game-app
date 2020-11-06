import React, { useState } from "react";
import Board from "../components/Board";
import "./Home.css";

const Home: React.FC = () => {
  const [throwValue, setThrowValue] = useState<number>(0);
  const [numberOfThrows, setNumberOfThrows] = useState<number>(0);

  const onClickHandler = (value: number) => {
    setThrowValue(value);
    setNumberOfThrows((numberOfThrows) => numberOfThrows + 1);
  };

  return (
    <div>
      <div className="top-container">
        <h3>Number of points thrown:</h3>
        <div className="buttons-container">
          {[1, 2, 3, 4, 5, 6].map((number: number) => (
            <button onClick={() => onClickHandler(number)}> {number} </button>
          ))}
        </div>
      </div>
      <Board throw={throwValue} numberOfThrows={numberOfThrows} />
    </div>
  );
};

export default Home;
