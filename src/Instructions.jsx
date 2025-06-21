function Instructions({ onBack }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-screen p-4 text-black">
      <h2 className="text-8xl font-bold mb-32">Instructions</h2>
      <div className="w-full max-w-5xl flex flex-row gap-6 justify-center text-4xl">
        <div className="bg-[#A89984] rounded-4xl shadow p-6 flex-1 min-w-[220px]">
          <p className="w-full h-full bg-[#FBF1C7] rounded-xl p-4">
            <b>Memorize the Pattern</b>
            <br />
            <br />
            At the start of each round, the game will briefly highlight the
            correct squares. Pay close attention and try to remember their
            positions!
          </p>
        </div>
        <div className="bg-[#A89984] rounded-4xl shadow p-6 flex-1 min-w-[220px]">
          <p className="w-full h-full bg-[#FBF1C7] rounded-xl p-4">
            <b>Your Turn</b>
            <br />
            <br />
            After the highlighted squares disappear, click on the squares you
            think were shown. Be careful—choose wisely!
          </p>
        </div>
        <div className="bg-[#A89984] rounded-4xl shadow p-6 flex-1 min-w-[220px]">
          <p className="w-full h-full bg-[#FBF1C7] rounded-xl p-4">
            <b>Win the Round</b>
            <br />
            <br />
            Select all the correct squares without making 3 mistakes to win the
            round and move on to the next, more challenging level!
          </p>
        </div>
      </div>
      <div
        className="mt-16 text-4xl font-bold text-[#A89984] cursor-pointer hover:text-black"
        onClick={() => onBack()}
      >
        Back
      </div>
    </div>
  );
}

export default Instructions;
