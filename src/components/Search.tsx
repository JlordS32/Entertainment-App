type SearchProps = {
   className?: string;
};

const Search = ({ className = "" }: SearchProps) => {
   return (
      <div className={`search-container ${className}`}>
         <img
            className="w-[24px]"
            src="./images/search.svg"
            alt="Search Icon"
         />
         <input className="search" type="text" placeholder="Search" />
      </div>
   );
};

export default Search;
