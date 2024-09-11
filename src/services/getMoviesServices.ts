import API from "@/config/API";
import { AxiosResponse } from "axios";

export const getMoviesService = (query: string, movieType: string, signal: AbortSignal): Promise<AxiosResponse<IResponse<ReadonlyArray<IMovieList>>>> =>{
    return API.get<IResponse<ReadonlyArray<IMovieList>>>(`/?apikey=${process.env.NEXT_APP_API_KEY}&s=${query}${movieType !== "all" ? `&type=${movieType}` : ""}`, {
        signal
    });
}

export const getMovieService = (imdbId: string): Promise<AxiosResponse<IMovie>> => {
    return API.get<IMovie>(`/?apikey=${process.env.NEXT_APP_API_KEY}&i=${imdbId}`);
}