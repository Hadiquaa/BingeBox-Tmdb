import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite,removeFavorite } from '../Redux/FavoritesSlice';

const Poster = (props) => {
    const {item, mode} = props;
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch();
    const favList = useSelector(state => state.favorites.list);


    const isFavorite = favList.some(f => f.id === item.id);

    const image_path = item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` :"https://fakeimg.pl/600x400?text=oops+";

    const addFav = (e) => {
        e.stopPropagation();
        if(!isFavorite){
             dispatch(addFavorite(item));
             toast.success("Added to Favorites! 🚀");
        }
    }
    const removeFav = (e) => {
      e.stopPropagation();
      dispatch(removeFavorite(item.id));
      toast.success("Removed from Favorites! 🗑️");
    };
  return (
    <div
      className="cursor-pointer w-[300px] inline-block  hover:scale-105 ease-in-out duration-300 relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" w-[300px]  p-2 relative ">
        <img
          src={image_path}
          alt={item.original_title}
          className="w-[300px] h-[400px] object-cover"
        />
        {isHovered && (
          <div
            className="absolute bottom-6 w-[95%] h-14 flex justify-center items-center bg-gray-900/50 cursor-pointer transition-opacity duration-300"
            onClick={mode === "add" ? addFav : removeFav}
          >
            <div
              className={`flex gap-4 items-center text-neutral-200 font-semibold text-lg ${
                mode === "add" && isFavorite
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              {mode === "add" ? (
                <>
                  {isFavorite ? "Added to Favorites" : "Add to Favorites"}
                  <FaHeart
                    className={isFavorite ? "text-gray-400" : "text-red-500"}
                  />
                </>
              ) : (
                <>
                  Remove from Favorites <FaHeart className="text-red-500" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Poster