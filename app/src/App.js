import './App.css';
import { useEffect, useState } from "react";
import StartGameButton from './components/startGame/js/StartGameButton.js';
import GuessNumber from './components/guessNumber/js/GuessNumber.js';

function App() {
  const [game, setGame] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);

  return (
    <>
    { gameStatus ? 
      (
        <>
          <GuessNumber />
        </>
      )
      :
      ( 
        <div>
          <StartGameButton startGame={setGameStatus} setData={} />
        </div>
      )
    } 
    </>
  );
}

export default App;
