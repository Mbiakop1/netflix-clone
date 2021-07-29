import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original/"



function Row({ title, fetchUrl, isLargeRow  }) {

    const [movies, setMovies] = useState([]);

    console.log(movies);
    // a snippet of code which runs baased on a specific condittion/varible
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/* all movie in that type */}
                {movies.map(movie => (
                    <img key={movie.id} className={`row_poster ${isLargeRow && "rowPosterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
