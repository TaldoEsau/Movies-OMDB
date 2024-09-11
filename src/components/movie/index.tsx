import Link from "next/link";
import MovieTitle from "../title-movie/page";
import MovieImage from "../image-movie";

//passar o SELECTEDMOVIE (use state para ca, dentro do MOVIEIMAGE com ONCLICK)

const Movie = ({ movie }: { movie: IMovieList }) => {
    return (
        <div className="bg-red-600 w-full h-full">
            <article className="flex h-51 text-white">
                <div className="relative  h-full flex-1 mr-4">
                    {/* <Link href={`/movie/${imdbID}`}> */}
                    <MovieImage Title={movie.Title} Poster={movie.Poster} imgClassName={`object-contain ${movie.Poster === "N/A" ? "px-2" : ""}`} />
                    {/* </Link>
                 */}
                </div>
                <div className="flex-1 flex flex-col bg-red-600 ">
                    <MovieTitle Title={movie.Title} Year={movie.Year} />
                    <small className="mt-auto">{movie.Type}</small>
                </div>
            </article>
        </div>
    )
}

export default Movie;