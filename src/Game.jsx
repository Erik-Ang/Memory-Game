import { useEffect, useState } from "react";

function Game() {
  const [round, increaseRound] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [roundArray, setRoundArray] = useState([]);
  const [correctSquares, setCorrectSquares] = useState([]);

  const gridSize = 5;
  const totalSquares = gridSize * gridSize;

  async function waitFor(functionToCall, timeOut) {
    await new Promise((resolve) => setTimeout(resolve, timeOut));

    functionToCall();
  }

  useEffect(() => {
    if (round > 0) setUpRound();
  }, [round]);

  function setUpRound() {
    const arr = Array(totalSquares)
      .fill(0)
      .map((_, i) => (i < round ? 1 : 0));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    setCorrectSquares(arr);
    setRoundArray(arr);
    setCorrect(0);
    waitFor(setupForUserInput, 1000);
  }

  function setupForUserInput() {
    const arr = Array(totalSquares).fill(0);
    arr.fill(0);
    setRoundArray(arr);
    console.log(correctSquares);
  }

  function checkSquare(i) {
    console.log(correctSquares);
    if (correctSquares[i] === 1 && roundArray[i] === 0) {
      console.log(`Square ${i} is correct`);
      const arr = [...roundArray];
      arr[i] = 1;
      setRoundArray(arr);
      setCorrect((prevCorrect) => prevCorrect + 1);
    } else {
      console.log(`Square ${i} is incorrect`);
      const arr = [...roundArray];
      arr[i] = 2;
      setRoundArray(arr);
    }
  }

  useEffect(() => {
    if (round > 0 && correct === round) {
      console.log("All squares are correct!");
      increaseRound((prevRound) => prevRound + 1);
    }
  }, [correct, round]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <h1 className="mb-4">Round {round}</h1>
      <div className="flex-1 flex items-center justify-center">
        <div className="aspect-square w-1/3 grid grid-cols-5 gap-4">
          {roundArray.map((value, i) => (
            <div
              key={i}
              onClick={() => checkSquare(i)}
              className={`border border-gray-400 flex items-center justify-center cursor-pointer
                ${
                  value === 1
                    ? "bg-green-400"
                    : value === 2
                    ? "bg-red-400"
                    : "bg-gray-200"
                }
              `}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => increaseRound((prevRound) => prevRound + 1)}
        className="ml-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-blue-600"
      >
        Start
      </button>
    </div>
  );
}

export default Game;
