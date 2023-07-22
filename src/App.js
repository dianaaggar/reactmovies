import "./App.css";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
// WE IMPORT OUR COMPONENTS

function App() {
const apiKey = "78a2602d";
// variable with your apiKey

const [movie, setMovie] = useState(null);
// State to hold movie data. Set it to null initially.

// Function to getMovies
const getMovie = async (searchTerm) => {
try {
// Make fetch request and store the response
const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

// Check if the response was successful
if (!response.ok) {
throw new Error("Network response was not ok");
}

// Parse JSON response into a JavaScript object
const data = await response.json();

// Check if the movie was found
if (data.Response === "False") {
throw new Error("Movie not found");
}

// Set the retrieved data as the current movie
setMovie(data);
} catch (error) {
// Handle any errors that occurred during the fetch or data processing
console.error("Error fetching movie data:", error);
setMovie(null); // Set movie to null in case of an error
}
};

// This will run on the first render but not on subsequent renders
useEffect(() => {
getMovie("Clueless");
}, []);

return (
  <div className="App">
    <Form moviesearch={getMovie} />
    {movie ? <MovieDisplay movie={movie} /> : <p>No movie found.</p>}
    </div>
);
}

export default App;
