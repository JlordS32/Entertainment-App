import { useEffect, useState } from "react";

type CardProps = {
   data?: any;
   booked?: boolean;
};

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const Card = ({ data, booked = false }: CardProps) => {
   const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

   useEffect(() => {
      setIsBookmarked(booked);
   }, [booked]);

   return (
      <div className="card">
         <div className="h-[110px] w-[165px] overflow-hidden rounded-lg">
            <img
               className="h-full w-full object-cover"
               src={IMG_URL + data.backdrop_path || "./images/placeholder.jpg"}
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
         <div>
            {data.release_date && (
               <span className="text-[11px] sm:text-sm">
                  {new Date(data.release_date).getFullYear()}
               </span> 
            )}
         </div>
         <h4>{data.title || "No Title"}</h4>
      </div>
   );
};

export default Card;
