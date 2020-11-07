import React, { useMemo, useEffect, useState } from "react";
import Modal from "react-modal";

import "./ModalComponent.css";

interface ModalComponentProps {
  modalOpen: boolean;
  currentField: number;
  endGame: any;
  throwsHistory: number[];
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {

  const [avg, setAvg] = useState<number>(0);
  let numberOfThrows = props.throwsHistory.length;

  useEffect(() => {
    const sum: number = props.throwsHistory.reduce((a: any, b: any) => a + b, 0);
    const avg: number = sum / props.throwsHistory.length;
    setAvg(avg);
  }, [props.throwsHistory]);

  const renderEndGameTitle = useMemo(() => {
    if (props.currentField === 20) {
      return <div>You won!</div>;
    } else if (props.currentField === 12) {
      return <div>You lost!</div>;
    }
    return;
  }, [props.currentField]);

  return (
    <div>
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.endGame}
        className="modal"
        // ariaHideApp={false}
      >
        <div className="modal-content">
          <span className="result-span">{renderEndGameTitle}</span>
          <br />
          <span>Number of throws: {numberOfThrows}</span>
          <br />
          <span>Average throw value: {avg.toFixed(2)}</span>
          <br />
          <button onClick={props.endGame} className="play-again-button">
          Play again!
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
