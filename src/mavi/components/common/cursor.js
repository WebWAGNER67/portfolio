import React from "react";
import { useContext } from "react";
import useMousePosition from "./useMousePosition";
import { MouseContext } from "../../context/mouseContext";

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
