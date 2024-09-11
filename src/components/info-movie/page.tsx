import { FC } from "react";

interface IMovieImageProps {
    infoType: string;
    title: string;
    wrapperClassName?: string;
}

const MovieInfo: FC<IMovieImageProps> = ({ infoType, title, wrapperClassName }) => {
    return (
        <div className={wrapperClassName ?? ""}>
            <small className="border-l border-red-600 pl-1"><span className="capitalize">{title}: </span></small><span>{infoType}</span>
        </div>
    );
}

export default MovieInfo;