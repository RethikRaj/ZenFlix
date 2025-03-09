import { useRef } from "react";
// import openai from "../utils/openai";
import model from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSuggestedMovies } from "../utils/GptSlice";

const GptSearchBar = () => {
  const searchTextRef = useRef(null); 
  const dispatch = useDispatch();


  // const searchMovies = async ()=>{
  //   console.log("Request made")

  //   const query = `Generate a list of 10 ${searchTextRef.current.value}, formatted as a comma-separated list. Only provide the movie names without any additional text. Example: Movie 1, Movie 2, Movie 3, ...`;

  //   const completion = await openai.chat.completions.create({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {"role": "user", "content": query},
  //     ],
  //   });

  //   console.log(completion.choices);

  // }


  const fetchMovieDetails = async (movieName)=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
    const jsonResponse = await response.json();
    return jsonResponse?.results[0];
  }


  const searchMovies = async ()=>{
    console.log("Request made")

    const prompt = `Generate a list of 10 ${searchTextRef.current.value}, formatted as a comma-separated list. Only provide the movie names without any additional text. Example: Movie 1, Movie 2, Movie 3, ...`;

    const result = await model.generateContent(prompt);

    if(!result){
      return null;
    }

    const movieResults = result.response.text().split(", ");

    // Now make requests for each movie in movieResults through tmdb api and get movie details
    const allMovieDetails = movieResults.map((movie)=>fetchMovieDetails(movie));
    // allMovieDetails will be an array of promises 

    const resolvedAllMovieDetails = await Promise.all(allMovieDetails);
    console.log(resolvedAllMovieDetails);

    // Update the store with the suggested movies
    dispatch(addSuggestedMovies(resolvedAllMovieDetails));
  }

  return (
    <div className="w-full -translate-y-20">
      <form className="w-full flex justify-center" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchTextRef} type="text" placeholder="What would you like to watch today?" className="border-4 border-red-500 text-white placeholder-white p-2 w-1/3 outline-none rounded-lg bg-red-500/20"/>
        <button className="ml-2 bg-red-600 text-white px-4 rounded-lg hover:bg-red-500 cursor-pointer" onClick={searchMovies}>Search</button>
      </form> 
    </div>
  )
}

export default GptSearchBar