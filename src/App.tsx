import { useEffect, useState } from "react";
import { fetchDiscoverMovies } from "./api/fetchMovies";
import Search from "./components/Search";

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
      <div className="bg-primary p-8 font-black text-white">
         <div className="w-[500px]">
            <Search />
         </div>
      </div>
   );
};
export default App;
