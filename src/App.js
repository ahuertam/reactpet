import React, { useState } from "react";
import "./styles.css";
import Toolbar from "./GameBoard/Toolbar/index.js";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setGameStarted(!gameStarted);
  };

  const nextTurn = () => {
    // Lógica para avanzar el turno
    console.log('Turno avanzado');
    // Aquí podrías actualizar las estadísticas de la mascota
  };

  const actionChecker = (action) => {
    // Lógica para manejar las acciones
    switch(action) {
      case 'eat':
        console.log('Alimentando mascota');
        break;
      case 'clean':
        console.log('Limpiando mascota');
        break;
      case 'play':
        console.log('Jugando con mascota');
        break;
      case 'heal':
        console.log('Curando mascota');
        break;
      default:
        console.log('Acción no reconocida');
    }
  };

  const restart = () => {
    setGameStarted(false);
    setGameOver(false);
    // Lógica para reiniciar el juego
  };

  return (
    <div className="App">
      <h1>ReactPet</h1>
      <Toolbar
        nextTurn={nextTurn}
        startGame={startGame}
        actionChecker={actionChecker}
        restart={restart}
        gameStarted={gameStarted}
        gameOver={gameOver}
      />
      <h2>Juega con el</h2>
    </div>
  );
}
