import { useEffect, useState } from "react";
import { fetchDiscoverMovies } from "./api/fetchMovies";

const App = () => {
   const [data, setData] = useState<any>();

   useEffect(() => {
      fetchDiscoverMovies()
         .then((data) => setData(data))
         .catch((error) => console.log(error));
   }, []);

   useEffect(() => {
      console.log(data);
   }, [data]);

   return (
      <div className="bg-red-500 p-10 text-3xl font-black text-white">App</div>
   );
};

export default App;
