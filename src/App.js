import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App h-screen w-screen m-0 p-0">
      <Navbar />
      <Routes >
          <Route path='/'  element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
