'use client'

import { Movie, Search } from "@/components";
import useMovie from "@/hook/useMovie"
import { useState } from "react";

const Home = () => {

  const [selectedMovie, setSelectMovie] = useState<IMovieList>()

  const { search, setSearch, movies, isLoading, setMovieType, movieType } = useMovie();

  return (
    // <section>
    <div className="bg-black">
      <div className="flex items-center justify-center bg-black">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div>
        {(movies && movies.length) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8">
            {movies.map(movie => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="h-96 flex justify-center items-center">
            {(search.length > 2) ? (
              <h2 className="text-white text-4xl">Opsss</h2>
            ) : (
              <h2 className="bg-black">Search Movie</h2>
            )}
          </div>
        )}
      </div>
    </div>
    // </section>
  );

}

export default Home;