import React from 'react'
import {MdChevronRight} from 'react-icons/md';
import Poster from './Poster';

const MovieCarousel = (props) => {
    const {title,items} = props;
    
    const scrollRight = () => {
      const slider = document.getElementById(`slider-${title}`);
      slider.scrollLeft += 500;
    }

  return (
    <div className="">
      <h2 className="font-bold text-amber-300 text-3xl mb-4">{title}</h2>
      <div className="relative group">
        <div className="flex items-center overflow-x-scroll overflow-y-hidden" id={`slider-${title}`}>
          {/* Movie list goes here */}
          {items.map((item) => (
            <Poster key={item.id} item={item} mode="add"/>
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full bg-gray-900/50 hidden group-hover:block cursor-pointer" onClick={scrollRight}>
          <div className="flex justify-center items-center h-full">
            <MdChevronRight size={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel