import React from "react";
import "./BoardTile.css";
import Pawn from "../images/pawn.png";

interface BoardTileProps {
  isStepped: boolean;
  numberOfTile: number;
  tileType: string;
}

const BoardTile: React.FC<BoardTileProps> = (props) => {
  return (
    <div className={`tile-${props.tileType}`}>
      <p className="tile-number"> {props.numberOfTile} </p>
      <p className="is-stepped">
        {props.isStepped && (
          <img className="pawn" src={Pawn} alt="not found" />
        )}
      </p>
    </div>
  );
};

export default BoardTile;
