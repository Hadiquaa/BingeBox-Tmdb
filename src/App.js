import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import SearchPage from './Pages/SearchPage';

function App() {
  
  return (
    <div className="App bg-gray-700 text-white pb-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </div>
  );
}

export default App;
