export default function() {
    return(
        <>
        <h1>Movie Characters</h1>
        <h2>Learn more about your favorite movie characters</h2>

        <h3>Select a movie to view the movie characters</h3>
        <label for="GameOfThrone">Game of Throne</label>
        <input
        type="radio"
        value = "character"
        name = "game of throne"
        onChange={(e)=> e.target.value}
    
        
        >
        </input>
        </>
    )
}