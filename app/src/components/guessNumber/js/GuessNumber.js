import { useEffect, useState } from "react";
import StartGameButton from '../../startGame/js/StartGameButton';

export default function GuessNumber({gameData, gameStatus, startGame, setData}) {
    const [number, setNumber] = useState("");
    const [gameState, setGameState] = useState(false);
    const [gameStateDescription, setGameStateDescription] = useState("");

    function handleNumberChange(event) {
        setNumber(event.target.value);
        
    }

    async function tryGuess() {
        const response = await fetch(`http://localhost:8080/partita/${gameData.id}`,
        {
            method : "PUT",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                numero: number
            })
        })
        const data = await response.json();
        
        if (data.risultato === 1) {
            setGameStateDescription("Numero troppo grande")
            setGameState(false)
        } else if (data.risultato === 0) {
            setGameStateDescription("Hai indovinato in " + data.tentativi + " tentativi")
            setGameState(true)
        } else if (data.risultato === -1) {
            setGameStateDescription("Numero troppo piccolo")
            setGameState(false)
        }
    }

    return (
        <div>
            {
                gameState ? 
                <div>
                    <StartGameButton gameStatus={gameStatus} startGame={startGame} setData={setData} />
                    <br />
                </div>
                :
                <div>
                    <h1> Indovina numero </h1>
                    id partita : {gameData.id} <br />
                    numero di tentativi {gameData.tentativi} <br />
                    inserisci un numero tra 1 e 100 <br />
                    <input type="number" onChange={handleNumberChange} value={number} placeholder="numero"></input> <br />
                    <button onClick={tryGuess}> Indovina </button>    
                </div>
            }
            {
                gameStateDescription
            }
        </div>
    )
}