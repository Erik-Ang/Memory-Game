import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./Homepage.jsx";
import Game from "./Game.jsx";
import Instructions from "./Instructions.jsx";

function App() {
  const [view, setView] = useState("home"); // "home", "game", or "instructions"

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FBF1C7]">
      {view === "home" && (
        <Homepage
          onStart={() => setView("game")}
          onInstructions={() => setView("instructions")}
        />
      )}
      {view === "game" && <Game onBack={() => setView("home")} />}
      {view === "instructions" && (
        <Instructions onBack={() => setView("home")} />
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
