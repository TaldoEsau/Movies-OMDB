import { FC } from "react";
import Image from "next/image";
import { FileImage } from "phosphor-react";

interface IMovieImageProps extends Pick<IMovie, "Poster" | "Title"> {
    fill?: boolean;
    imgClassName?: string;
}

const MovieImage: FC<IMovieImageProps> = ({ Poster, Title, imgClassName, fill = true }) => {
    return (
        <>
            {fill ? (
                <Image src={Poster.includes("http") ? Poster : FileImage} alt={Title} width={200} height={200} className={imgClassName} />
            ) : (
                <Image src={Poster.includes("http") ? Poster : FileImage} alt={Title} width={200} height={200} className={imgClassName} />
            )}
        </>
    )
}

export default MovieImage;