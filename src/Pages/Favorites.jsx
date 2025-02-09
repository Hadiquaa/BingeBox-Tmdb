import React from 'react'
import { useSelector } from 'react-redux'
import Poster from '../Components/Poster';

const Favorites = () => {
  const favList = useSelector(state => state.favorites.list);
  console.log(favList);
  return (
    <div className=" mx-auto  bg-gray-700 pt-[4.25rem] max-w-[1600px]">
      <div className="mx-8">
        <h1 className="font-bold text-amber-300 text-3xl my-4">
          Your Favorites
        </h1>
        <div>
          {favList.length > 0 ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4'>
              {favList.map((item) => (
                <Poster key={item.id} item={item} mode="remove" />
              ))}
            </div>
          ) : (
            <div className='flex justify-center items-center gap-6 text-3xl font-semibold flex-col '>
              <p>You haven't added any movies to your favorites yet.</p>
              <p>Click on a movie poster to add it to your favorites.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites