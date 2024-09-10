"use client";
import { Fragment, useState, useMemo, useEffect, useRef } from 'react';


export default function Home() {


  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const URL = "http://www.omdbapi.com/?s=transformers&apikey=6068f22a";
  //     const res = await fetch(URL);
  //     const fd = await res.json();
  //     console.log(fd.Search);
  //     setMovies(fd.Search)
  //   };
  //   fetchMovie();
  // }, []);

  return (
    <div>

      {/* {
        movies.map((val) => {
          return (
            <div>
              <p>{val.Title}</p>
              <p>{val.Year}</p>
              <img src={val.Poster} alt="image" />
            </div>
          )
        })
      } */}
    </div>
  )
}
