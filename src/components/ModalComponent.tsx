import React, { useMemo, useEffect, useState } from "react";
import Modal from "react-modal";

import "./ModalComponent.css";

const ModalComponent = ({ modalOpen, currentField, endGame, throwsHistory}: any) => {
  const [avg, setAvg] = useState<number>(0);
  let numberOfThrows = throwsHistory.length;

  useEffect(() => {
    const sum: number = throwsHistory.reduce((a: any, b: any) => a + b, 0);
    const avg: number = sum / throwsHistory.length;
    setAvg(avg);
  }, [throwsHistory]);

  const renderEndGameTitle = useMemo(() => {
    if (currentField === 20) {
      return <div>You won!</div>;
    } else if (currentField === 12) {
      return <div>You lost!</div>;
    }
    return;
  }, [currentField]);

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={endGame}
        className="modal"
        ariaHideApp={false}
      >
        <div className="modal-content">
          <span className="result-span">{renderEndGameTitle}</span>
          <br />
          <span>Number of throws: {numberOfThrows}</span>
          <br />
          <span>Average throw value: {avg.toFixed(2)}</span>
          <br />
          <button onClick={endGame} className="play-again-button">
          Play again!
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
