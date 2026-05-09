import { useState } from "react";
import "./PlayerPicker.css";

export function PlayerPicker({ players }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  function pickRandomPlayer() {
    if (!players || players.length === 0) return;
    const index = Math.floor(Math.random() * players.length);
    setSelectedPlayer(players[index]);
  }

  return (
		<>
		  <div className="player-picker">
				<h2>Chi fa la penitenza?</h2>
				<button onClick={pickRandomPlayer}>Scegli un giocatore</button>

				{selectedPlayer && (
					<p className="player-result">
						Tocca a: <strong>{selectedPlayer}</strong>
					</p>
				)}
			</div>
		</>
		

  );
}
