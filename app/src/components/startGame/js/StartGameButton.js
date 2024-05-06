export default function StartGameButton({startGame, setData}) {

    function requestGame() {
        startGame(true)
        setData()
    }    

    return (
        <div>
            <button onClick={requestGame}> Inizia il gioco </button>
        </div>
    );
}