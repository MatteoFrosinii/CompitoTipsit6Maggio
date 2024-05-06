export default function StartGameButton({gameStatus, startGame, setData}) {

    function requestGame() {
        gameStatus ? startGame(false) : startGame(true)
        setData()
    }    

    return (
        <div>
            <button onClick={requestGame}> Inizia il gioco </button>
        </div>
    );
}