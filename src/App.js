import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Lamborghini from './components/Lamborghini/Lamborghini';
import Porsche from './components/Porsche/Porsche';
import Nissan from './components/Nissan/Nissan';

const App = () => {
  return ( 
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/Lamborghini" element={<Lamborghini />} />
              <Route path="/Porsche" element={<Porsche />} />
              <Route path="/Nissan" element={<Nissan />} />
          </Routes>
        </BrowserRouter>
    
    </>)
}

export default App;
