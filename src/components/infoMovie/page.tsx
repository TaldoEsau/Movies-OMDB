import { FC } from "react";

interface IMovieImageProps {
    infoType: string;
    title: string;
    wrapperClassName?: string;
}

const MovieInfo: FC<IMovieImageProps> = ({ infoType, title, wrapperClassName }) => {
    return (
        <div className={wrapperClassName ?? ""}>
            <small className="border-1 border-red-600"><span className="capitalize">{title}</span></small>
        </div>
    );
}

export default MovieInfo;