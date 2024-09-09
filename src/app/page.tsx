"use client";
import { useState, useEffect } from "react";


export default function Home() {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovie = async () => {
      const URL = "http://www.omdbapi.com/?s=spider&man&apikey=6068f22a";
      const res = await fetch(URL);
      const fd = await res.json();
      // console.log(fd.Search);
      setMovies(fd.Search)
    };
    fetchMovie();
  }, []);

  return (
    <>
      {
       movies.map((val) => {
        return (
          <img src={val.Poster} alt="image" />
        )
      })
      }
    </>
  )
}
