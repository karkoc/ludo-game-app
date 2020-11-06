import React, { useEffect, useState } from "react";
import BoardTile from "./BoardTile";
import "./Board.css";
import ModalComponent from "./ModalComponent";

interface BoardProps {
  throw: number;
  numberOfThrows: number;
}

const Board: React.FC<BoardProps> = (props) => {
  const [currentField, setCurrentField] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [throwsHistory, setThrowsHistory] = useState<number[]>([]);

  useEffect(() => {
    move(props.throw);
  }, [props.numberOfThrows]);

  useEffect(() => {
    if (currentField === 19) {
      setCurrentField(11);
    }
    if (currentField === 20 || currentField === 12) {
      setModalOpen(true);
    }
  }, [currentField]);

  useEffect(() => {
    addToThrowsHistory(props.throw);
  }, [props.numberOfThrows]);

  const move = (numberOfSteps: number) => {
    const numberOfFields = 20;
    let nextField = currentField + numberOfSteps;
    if (nextField > 20) {
      let numberOfFieldsToGoBack = nextField - numberOfFields;
      nextField = numberOfFields - numberOfFieldsToGoBack;
    }
    setCurrentField(nextField);
  };

  const addToThrowsHistory = (thrownValue: number) => {
    if (props.throw !== 0) {
      const newThrowsHistory: number[] = [...throwsHistory];
      newThrowsHistory.push(thrownValue);
      setThrowsHistory(newThrowsHistory);
    }
  }; 

  const endGame = () => {
    setModalOpen(false);
    setCurrentField(0);
    setThrowsHistory([]);
  };

  return (
    <div className="main-container">
      <div className="row-container">
        <BoardTile isStepped={currentField === 1} numberOfTile={1} tileType="regular"/>
        <BoardTile isStepped={currentField === 2} numberOfTile={2} tileType="regular"/>
        <BoardTile isStepped={currentField === 3} numberOfTile={3} tileType="regular"/>
        <BoardTile isStepped={currentField === 4} numberOfTile={4} tileType="regular"/>
        <BoardTile isStepped={currentField === 5} numberOfTile={5} tileType="regular"/>
        <BoardTile isStepped={currentField === 6} numberOfTile={6} tileType="regular"/>
      </div>
      <div className="row-container-end-justified">
        <BoardTile isStepped={currentField === 7} numberOfTile={7} tileType="regular"/>
      </div>
      <div className="row-container">
        <BoardTile isStepped={currentField === 13} numberOfTile={13} tileType="regular"/>
        <BoardTile isStepped={currentField === 12} numberOfTile={12} tileType="game-over"/>
        <BoardTile isStepped={currentField === 11} numberOfTile={11} tileType="regular"/>
        <BoardTile isStepped={currentField === 10} numberOfTile={10} tileType="regular"/>
        <BoardTile isStepped={currentField === 9} numberOfTile={9} tileType="regular"/>
        <BoardTile isStepped={currentField === 8} numberOfTile={8} tileType="regular"/>
      </div>
      <div className="row-container-single-tile">
        <BoardTile isStepped={currentField === 14} numberOfTile={14} tileType="regular"/>
      </div>
      <div className="row-container">
        <BoardTile isStepped={currentField === 15} numberOfTile={15} tileType="regular"/>
        <BoardTile isStepped={currentField === 16} numberOfTile={16} tileType="regular"/>
        <BoardTile isStepped={currentField === 17} numberOfTile={17} tileType="regular"/>
        <BoardTile isStepped={currentField === 18} numberOfTile={18} tileType="regular"/>
        <BoardTile isStepped={currentField === 19} numberOfTile={19} tileType="special"/>
        <BoardTile isStepped={currentField === 20} numberOfTile={20} tileType="won"/>
      </div>
      <ModalComponent
        modalOpen={modalOpen}
        currentField={currentField}
        throwsHistory={throwsHistory}
        endGame={endGame}
      />
    </div>
  );
};

export default Board;
