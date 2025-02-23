import { useEffect, useState } from "react";

type CardProps = {
   imgUrl?: string;
   booked?: boolean;
};

const Card = ({ imgUrl, booked = false }: CardProps) => {
   const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

   useEffect(() => {
      setIsBookmarked(booked);
   }, [booked]);

   return (
      <div className="card relative">
         <img
            className="h-full w-full"
            src={imgUrl || "./images/placeholder.jpg"}
            alt="Placeholder"
         />
         <div
            className="absolute top-1/20 right-1/20 z-10 cursor-pointer duration-300 hover:scale-105 active:scale-100"
            onClick={() => {
               setIsBookmarked(!isBookmarked);
            }}
         >
            {isBookmarked ? (
               <img src="./images/bookmarked.svg" alt="Bookmark Icon" />
            ) : (
               <img src="./images/bookmark.svg" alt="Bookmark Icon" />
            )}
         </div>
      </div>
   );
};

export default Card;
