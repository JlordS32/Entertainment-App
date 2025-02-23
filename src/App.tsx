import { useEffect, useState } from "react";
import { fetchDiscoverMovies } from "./api/fetchMovies";
import Search from "./components/Search";
import FormInput from "./components/FormInput";
import Button from "./components/Button";

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
            <form className="space-y-4">
               <FormInput placeholder="Email address" />
               <FormInput placeholder="First name" />
               <FormInput placeholder="Last name" />
               <FormInput
                  placeholder="Email address"
                  type="email"
                  required={true}
                  errorMsg="Can't be empty"
               />
            </form>
            <div className="mt-10">
               <Button text="Login to your account"/>
            </div>
         </div>
      </div>
   );
};
export default App;
