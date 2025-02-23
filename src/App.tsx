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
      <div className="bg-accent p-10 font-black text-white">
         <h1>Entertain</h1>
         <h2>Entertain</h2>
         <h3>Entertain</h3>
         <h4>Entertain</h4>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus error? Placeat delectus fugit iste blanditiis cupiditate doloribus ipsum. Suscipit soluta aspernatur autem architecto exercitationem. Provident nulla expedita libero officia minus nisi omnis illo vero, earum incidunt itaque deleniti cum ea rerum ipsum consequuntur ratione quam! Amet suscipit temporibus architecto.</p>
         <p className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A voluptatem repellat et! Esse porro exercitationem eum possimus nisi magni, alias necessitatibus fugit ullam voluptatibus, at rerum eos quis. Est, dolor?</p>
      </div>
   );
};
export default App;
