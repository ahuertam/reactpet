import React, { useEffect, useRef, useCallback, useState } from "react";

export default function Board({ turn, stats, action }) {
  const widthF = 50;
  const heightF = 50;
  const petImage = new Image();
  const eggImage = new Image();
  const originalPetPos = { posX: 70, posY: 70 };
  const [petPos, setPetPos] = useState(originalPetPos);

  const boardSpace = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
    [0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const myCanvas = useRef();
  const drawImageOnBoard = (context, image, posx, posy) => {
    context.fillStyle = "#74b9ff";
    context.drawImage(image, posx, posy, 100, 100);
  };

  const drawImageOfBoard = (ctx, x, y, tileMap, tile) => {
    ctx.drawImage(
      tileMap,
      tile * 32,
      0,
      32,
      32,
      widthF * x,
      heightF * y,
      widthF,
      heightF
    );
  };
  const paintBoard = useCallback((ctx, tileMap) => {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 15; x++) {
        var tile = boardSpace[y][x];
        drawImageOfBoard(ctx, x, y, tileMap, tile);
      }
    }
  }, []);

  const petLogic = (turn) => {
    const context = myCanvas.current.getContext("2d");
    const tempPos = petPos;
    // check if action in progress
    // if so wait till finish
    // Check pending Orders
    // if possible do one
    // else wander around doing nothing
    tempPos.posX = 89;
    tempPos.posY = 74;
    setPetPos(tempPos);
    // or random action
    // if any parameter is hight enougth then will do that
    //paint action animation or movement
    petImage.onload = drawImageOnBoard(
      context,
      petImage,
      petPos.posX,
      petPos.posY
    );
  };
  useEffect(() => {
    petLogic(turn);
  }, [turn]);

  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    let tileMap = new Image();
    tileMap.src = process.env.PUBLIC_URL + "/assets/JKnq-tilemap.png"; // Modificado aquí
    tileMap.onload = () => paintBoard(context, tileMap);

    petImage.src = process.env.PUBLIC_URL + "/assets/bicho2.png"; // Modificado aquí
    petImage.onload = () => drawImageOnBoard(
      context,
      petImage,
      petPos.posX,
      petPos.posY
    );

    eggImage.src = process.env.PUBLIC_URL + "/assets/egg.png"; // Modificado aquí
    eggImage.onload = () => drawImageOnBoard(context, eggImage, 200, 200);
  }, [paintBoard, petImage, eggImage]);

  return (
    <div>
      <canvas ref={myCanvas} width={500} height={500} />
    </div>
  );
}
