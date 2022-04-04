import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import Dashbord from './components/Dashbord/Dashbord';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Notfound from './components/Notffound/Notfound';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
