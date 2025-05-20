export default function Toolbar({
    nextTurn,
    startGame,
    actionChecker,
    restart,
    gameStarted,
    gameOver
  }) {
    const startText = gameStarted && !gameOver ? "PAUSE" : "START";
    return (
      <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <button 
          style={{ margin: '5px', padding: '8px 16px' }} 
          onClick={() => startGame()}
          aria-label={startText}
        >
          {startText}
        </button>
        {gameStarted && !gameOver ? (
          <div>
            <button style={{ margin: '5px', padding: '8px 16px' }} onClick={() => restart()}> Reiniciar</button>
            <button style={{ margin: '5px', padding: '8px 16px' }} onClick={() => nextTurn()}> TURNO</button>
            <button style={{ margin: '5px', padding: '8px 16px' }} onClick={() => actionChecker("eat")}> Dar de Comer</button>
            <button style={{ margin: '5px', padding: '8px 16px' }} onClick={() => actionChecker("clean")}> Limpiar</button>
            <button style={{ margin: '5px', padding: '8px 16px' }} onClick={() => actionChecker("play")}> Jugar</button>
            <button style={{ margin: '5px', padding: '8px 16px' }} onClick={() => actionChecker("heal")}> Curar</button>
          </div>
        ) : null}
      </div>
    );
  }
  