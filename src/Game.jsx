import { useState } from "react";

function Game() {
  const [round, increaseRound] = useState(1);

  const gridSize = 4;
  const totalSquares = gridSize * gridSize;

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1>Round {round}</h1>
      <div className="grid grid-cols-4 gap-4 w-full">
        {Array.from({ length: totalSquares }).map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 bg-gray-200 border border-gray-400 flex items-center justify-center cursor-pointer"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
