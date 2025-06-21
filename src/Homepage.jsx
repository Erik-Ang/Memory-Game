function Homepage({ onStart, onInstructions }) {
  return (
    <div className="w-full h-screen flex flex-col jsutify-center items-center text-black">
      <div className="flex-1"></div>
      <div className="flex-2 flex flex-col items-center text-[#A89984] gap-8">
        <div className="text-9xl font-bold text-center mb-20 text-black">
          Memory Squared
        </div>
        <div
          className="text-6xl font-bold text-center hover:text-black cursor-pointer"
          onClick={() => onStart()}
        >
          Start
        </div>
        <div
          className="text-6xl font-bold text-center hover:text-black cursor-pointer"
          onClick={() => onInstructions()}
        >
          Instructions
        </div>
        <div className="absolute bottom-0 mb-8">
          <p className="text-gray-600">Made by Erik & Aashish</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
