import React, { useContext } from 'react'
import MovieCarousel from '../Components/MovieCarousel';
import Spinner from '../Components/Spinner';
import { AppContext } from '../Context/AppContext';

const Home = () => {
    const {isLoading,popularMovies,popularSeries} = useContext(AppContext);
  return (
    <div className=" mx-auto  bg-gray-700 pt-[4.25rem] max-w-[1600px]">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mx-8 flex flex-col gap-7">
          <div className="">
            {popularMovies && popularMovies.length > 0 ? (
              <div className="relative group">
                <img
                  src={`https://image.tmdb.org/t/p/original${popularMovies[0].backdrop_path}`}
                  alt="MostPopular"
                  className="w-full h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent left-0" />
                <div className="absolute -bottom-4 left-10  font-extrabold leading-tight flex gap-6 ">
                  <span className="block special-number text-transparent text-[11rem]">
                    1
                  </span>
                  <div className="flex justify-center  flex-col italic gap-4 w-[70%] opacity-70 group-hover:opacity-100">
                    <h1 className=" text-amber-300 text-4xl ">
                      {popularMovies[0].title}
                    </h1>
                    <p className=" ">
                      {popularMovies[0].overview
                        .split(" ")
                        .slice(0, 50)
                        .join(" ") +
                        (popularMovies[0].overview.split(" ").length > 50
                          ? "..."
                          : "")}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
          <div className="">
            <MovieCarousel
              title={`Trending Movies this week`}
              items={popularMovies}
            />
          </div>
          <div className="">
            <MovieCarousel
              title={`Trending Series this week`}
              items={popularSeries}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home