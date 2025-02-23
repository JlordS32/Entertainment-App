import Home from "./pages/Home";
import Nav from "./components/Nav";

// TODO: Read ReactQuery Docs and start implement ReactQuery
// TODO: Install react router
// TODO: Add page routes
// TODO: Make the navigation

const App = () => {
   return (
      <div className="flex">
         <Nav />
         <div className="pl-[150px] flex-1">
            <Home />
         </div>
      </div>
   );
};
export default App;
