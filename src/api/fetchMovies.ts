export const fetchTrendingMovies = async (): Promise<any> => {
   const url = "https://api.themoviedb.org/3/movie/popular";
   const response = await fetch(url, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${import.meta.env.VITE_TMBD_API_KEY}`,
      },
   });

   if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
   }

   const data = await response.json();
   return data;
};
