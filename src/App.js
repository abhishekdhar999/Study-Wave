import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { Routes, Route } from 'react-router-dom'
import ExplorePage from './Pages/ExplorePage';
import Navbar from './Components/Navbar';
import EmailModal from './Components/EmailModal';
import AboutUs from './Components/About';
import ContactUs from './Components/Contact';
function App() {
  return (
    <>
<Navbar></Navbar>
<Routes>

          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/explorepage' element={<ExplorePage />}></Route>
          <Route path='/bookclass' element={<EmailModal />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
</Routes>

    </>
  );
}

export default App;
