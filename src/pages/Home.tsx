import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/fetchMovies";
import Card from "../components/Card";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const Home = () => {
   const [data, setData] = useState<any>();

   useEffect(() => {
      fetchTrendingMovies()
         .then((data) => {
            setData(data);
         })
         .catch((error) => console.log(error));
   }, []);

   return (
      <main>
         <div>
            {data && data.results ? (
               data.results.map((movie: any) => (
                  <Card
                     key={movie.id}
                     booked={movie.booked}
                     imgUrl={IMG_URL + movie.backdrop_path}
                  />
               ))
            ) : (
               <p>Loading</p>
            )}
         </div>
      </main>
   );
};

export default Home;
