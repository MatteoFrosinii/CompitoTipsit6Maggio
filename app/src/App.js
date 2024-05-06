import './App.css';
import { useEffect, useState } from "react";
import StartGameButton from './components/startGame/js/StartGameButton.js';
import GuessNumber from './components/guessNumber/js/GuessNumber.js';

function App() {
  const [gameStatus, setGameStatus] = useState(false);
  const [gameData, setGameData] = useState([]);

  async function loadData(params) {
      const response = await fetch(`http://localhost:8080/partita`,
      {
        method : "POST",
        headers : {'Content-Type' : 'application/json'}
      })
      const data = await response.json();
      setGameData(data)
  }

  return (
    <>
    { gameStatus ? 
      (
        <>
          <GuessNumber gameData={gameData} gameStatus={gameStatus} startGame={setGameStatus} setData={loadData}/>
        </>
      )
      :
      ( 
        <div>
          <StartGameButton gameStatus={gameStatus} startGame={setGameStatus} setData={loadData} />
        </div>
      )
    } 
    </>
  );
}

export default App;
