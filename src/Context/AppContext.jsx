import { createContext,useState,useEffect } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [isLoading, setIsLoading] = useState(false);
    const [searchTitle, setSearchTitle] = useState('');
    const [popularMovies, setPopularMovies] =useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [searchResults, setsearchResults] = useState([]);

   

    async function fetchPopularMovies() {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=dd7e19e4d22271ba1809233a8946f5af`;

      setIsLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    async function fetchPopularSeries() {
        const URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=dd7e19e4d22271ba1809233a8946f5af`;
      setIsLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setPopularSeries(data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    async function fetchSearchResults() {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=dd7e19e4d22271ba1809233a8946f5af&query=${searchTitle}`;
      setIsLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log("search results")
        console.log(data.results);
        setsearchResults(data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    useEffect(() => {
      fetchPopularMovies();
      fetchPopularSeries();
    }, []);

    useEffect(() => {
      if(searchTitle.trim()){
        fetchSearchResults();
      }
    }, [searchTitle]);

    const value = {
        isLoading,
        setIsLoading,
        searchTitle,
        setSearchTitle,
        popularMovies,
        setPopularMovies,
        popularSeries,setPopularSeries,
        searchResults,
        setsearchResults
        
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}