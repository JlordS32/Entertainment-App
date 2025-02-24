const Header = () => {
   return (
      <header className="w-full">
         <div className="bg-secondary sticky top-0 h-[55px] w-full">
            <div className="flex items-center justify-between">
               <img src="./images/logo.svg" alt="Logo" />

               <nav className="flex">
                  <div className="">
                     
                  </div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
               </nav>
               <div className="w-[32px] overflow-hidden rounded-full border-2 border-white">
                  <img
                     src="./images/pfp_placeholder.png"
                     alt="Profile Picture"
                  />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
