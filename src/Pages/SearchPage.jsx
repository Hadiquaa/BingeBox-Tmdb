import React, { useContext } from 'react'
import Spinner from '../Components/Spinner';
import { AppContext } from '../Context/AppContext'
import Poster from '../Components/Poster';

const SearchPage = () => {
    const {searchResults, isLoading} = useContext(AppContext);
  return (
    <div className=" mx-auto  bg-gray-700 pt-[4.25rem] max-w-[1600px]">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mx-8">
          {searchResults && searchResults.length > 0 ? (
            <div className="">
              <h1 className="font-bold text-amber-300 text-3xl my-4">
                Search Results
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((item) => (
                  <Poster item={item} key={item.id} mode="add"/>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h1>No Results Found</h1>
              <p>Please try a different search term.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage