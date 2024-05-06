export default function StartGameButton({startGame, setData}) {

    async function requestGame() {
        const response = await fetch(`http://localhost:8080/partita`,
        {
            method : "POST",
            headers : {'Content-Type' : 'application/json'}
        })
        startGame(true)
        setData()
    }    

    return (
        <div>
            <button onClick={requestGame}> Inizia il gioco </button>
        </div>
    );
}