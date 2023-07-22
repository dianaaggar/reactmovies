// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
// import React from "react";

import React from "react";

function MovieDisplay(props) {
  //The component must return some JSX
  return (
    <div>
      <h1>{props.movie.Title}</h1>
      <h2>{props.movie.Genre}</h2>
      <hr />
      <img src={props.movie.Poster} alt={props.movie.Title} />
      <h3>Actors: {props.movie.Actors}</h3>
      <p>Awards: {props.movie.Awards}</p>
    </div>
  );
}
//   // We must export the component to use it in other files
export default MovieDisplay;