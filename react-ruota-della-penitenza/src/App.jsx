import { useState } from "react";
import { penalties } from "./data/penalties";
import { players } from "./data/players";
import { Wheel } from "./component/Wheel/Wheel";
import { PlayerPicker } from "./component/PlayerPicker/PlayerPicker";

function App() {
  const [selectedPenalty, setSelectedPenalty] = useState(null);

  return (
    <>
      <div className="app">
        <h1>Ruota della Fortuna – Penitenze</h1>

        <div className="layout">
          <div className="left-panel">
            <Wheel penalties={penalties} onSelect={setSelectedPenalty} />
          </div>

          <div className="right-panel">
            <div className="penalty-box">
              <h2>Penitenza estratta</h2>
              {selectedPenalty ? (
                <p className="penalty-text">{selectedPenalty}</p>
              ) : (
                <p className="penalty-placeholder">
                  Gira la ruota per scoprire la penitenza!
                </p>
              )}
            </div>

            <PlayerPicker players={players} />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
