import { useEffect, useState } from "react";

function Game({ onBack }) {
  const [round, setRound] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [roundArray, setRoundArray] = useState([]);
  const [correctSquares, setCorrectSquares] = useState([]);
  const [mistakes, setMistakes] = useState(0);

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
    setMistakes(0);
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
    } else if (correctSquares[i] === 0 && roundArray[i] === 0) {
      console.log(`Square ${i} is incorrect`);
      const arr = [...roundArray];
      arr[i] = 2;
      setRoundArray(arr);
      setMistakes((prevMistakes) => prevMistakes + 1);
      if (mistakes + 1 >= 3) {
        console.log("Game Over! Too many mistakes.");
        setRound(1);
      }
    } else {
      console.log(`Square ${i} was already clicked`);
    }
  }

  useEffect(() => {
    if (round > 0 && correct === round) {
      console.log("All squares are correct!");
      setRound((prevRound) => prevRound + 1);
    }
  }, [correct, round]);

  return (
    <div className="w-full min-h-screen flex items-center justify-centre flex-col bg-[#FBF1C7] p-32">
      <div className="mb-4 text-[#A89984] text-8xl">Round {round}</div>
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="aspect-square w-1/3 grid grid-cols-5 gap-4">
          {roundArray.map((value, i) => (
            <div
              key={i}
              onClick={() => checkSquare(i)}
              className="border border-gray-400 rounded-[1vw] flex items-center justify-center cursor-pointer bg-[#A89984]"
            >
              <div
                className={`w-7/8 aspect-square bg-[#A89984] rounded-4xl relative ${
                  value === 1
                    ? "bg-green-400"
                    : value === 2
                    ? "bg-red-400"
                    : "bg-[#FBF1C7]"
                }
              `}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`absolute inset-0 w-full h-full ${
                    value === 1
                      ? "opacity-0"
                      : value === 2
                      ? "text-[#A89984]"
                      : "text-[#FBF1C7]"
                  }
              `}
                >
                  <line
                    x1="4"
                    y1="4"
                    x2="20"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="20"
                    y1="4"
                    x2="4"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className={`absolute inset-0 w-full h-full ${
                    value === 1
                      ? "text-[#A89984]"
                      : value === 2
                      ? "opacity-0"
                      : "text-[#FBF1C7]"
                  }
              `}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4 10-10"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      {round === 0 && (
        <div
          onClick={() => setRound((prevRound) => prevRound + 1)}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl p-8 bg-[#A89984] text-[#FBF1C7] rounded hover:border hover:border-[#A89984] hover:bg-[#FBF1C7] cursor-pointer transition-colors duration-300 hover:text-[#A89984] font-bold"
        >
          Start
        </div>
      )}
      {round != 0 && (
        <div
          onClick={() => setRound(() => onBack())}
          className="text-4xl p-8 bg-[#A89984] text-[#FBF1C7] rounded hover:border hover:border-[#A89984] hover:bg-[#FBF1C7] cursor-pointer transition-colors duration-300 hover:text-[#A89984] font-bold"
        >
          Back
        </div>
      )}
    </div>
  );
}

export default Game;
