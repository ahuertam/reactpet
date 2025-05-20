import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar/index.js";
import Board from "./Board/index.js";
import Info from "./Info/index.js";

export default function GameBoard() {
  const [turn, setTurn] = useState(0);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [action, setAction] = useState("none");
  const initialStats = {
    life: 100,
    age: 0,
    hunger: 0,
    dirty: 0,
    bored: 0,
    happiness: 0
  };
  const [stats, setStats] = useState(initialStats);

  const nextTurn = () => {
    setTurn(turn + 1);
  };

  const restart = () => {
    setTurn(0);
    // Set stats to 0
    setStats(initialStats);
  };
  const lifeBehaviour = () => {
    let tempStats = stats;
    if (tempStats.life <= 0) {
      // If Health below 0 game ends
      setGameOver(true);
      restart();
      return;
    }
    if (action !== "eat" && tempStats.hunger > 0) {
      tempStats.hunger--;
    }
    if (turn > 100) {
      // getting old are we?
      tempStats.life--;
    }
    if (tempStats.hunger >= 90) {
      // so hungry it hurts
      tempStats.life--;
    }
    if (tempStats.dirty >= 60) {
      tempStats.life--;
    }
    setStats(tempStats);
  };

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        nextTurn();
        lifeBehaviour();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [start, turn, nextTurn]);

  const startGame = () => {
    setStart(!start);
  };

  const actionChecker = (action) => {
    setAction(action);
    let tempStats = stats;
    switch (action) {
      case "eat":
        if (stats.hunger > 10) {
          tempStats.hunger = tempStats.hunger - 10;
          setStats(tempStats);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Info turn={turn} action={action} stats={stats} />
      <Board turn={turn} stats={stats} action={action} />
      <Toolbar
        gameStarted={start}
        nextTurn={nextTurn}
        startGame={startGame}
        actionChecker={actionChecker}
        restart={restart}
        gameOver={gameOver}
      />
    </div>
  );
}
