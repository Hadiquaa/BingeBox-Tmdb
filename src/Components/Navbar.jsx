import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FaHeart} from 'react-icons/fa';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {

    const {setSearchTitle} =useContext(AppContext);

    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
          setSearchTitle(e.target.value);
          navigate('/search');
          setTitle('');
        }
    }

  return (
    <div className="bg-gray-800 h-16 fixed top-0 w-full z-10 ">
      <div className="flex justify-between items-center mx-auto h-full max-w-[1460px]">
        <Link to="/">
          <div className="text-3xl font-bold">
            Binge<span className="text-amber-300">Box</span>
          </div>
        </Link>
        <div className="flex gap-3 items-center">
          <div className="w-[28rem]">
            <input
              type="text"
              name="title"
              placeholder="Search for a movie"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => handleEnter(e)}
              className="bg-white text-gray-700 w-4/5 h-9 rounded-md px-2"
            />
          </div>
          <Link to="/favorites">
            <div className="flex gap-2 items-center cursor-pointer ">
              <p className="text-xl font-bold">Favorites</p>
              <FaHeart className=" h-6 w-6" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar