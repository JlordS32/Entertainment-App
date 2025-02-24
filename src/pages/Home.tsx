import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/fetchMovies";
import Card from "../components/Card";
import Search from "../components/Search";

const Home = () => {
   const [data, setData] = useState<any>();

   useEffect(() => {
      fetchTrendingMovies()
         .then((data) => {
            setData(data);
         })
         .catch((error) => console.log(error));
   }, []);

   useEffect(() => {
      console.log(data);
   }, [data])

   return (
      <main className="px-4">
         <Search className="pt-[26px]" />
         <section className="recommendation">
            <h1>Recommended For You</h1>
            <div className="mt-4 grid grid-cols-2 gap-x-4">
               {data && data.results ? (
                  data.results.map((movie: any) => (
                     <Card
                        key={movie.id}
                        booked={movie.booked}
                        data={movie}
                     />
                  ))
               ) : (
                  <p>Loading</p>
               )}
            </div>
         </section>
      </main>
   );
};

export default Home;
