import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { useState } from 'react';
import Player from './Pages/Player';

function App() {
  const [hidenav,setHidenav]=useState(true)
  return (
    <div className="App h-screen w-screen m-0 p-0 flex flex-col overflow-x-hidden">
      <Navbar className='p-6 flex justify-between h-20 w-full' hidenav={hidenav} setHidenav={setHidenav}/>
      <Routes >
          <Route path='/'  element={<Home hidenav={hidenav}/>}></Route>
          <Route path='/player/:categoryId/:videoId' element={<Player />}></Route>
      </Routes>
    </div>
  );
}

export default App;
