import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Login, SingleBlog} from "./pages";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/blog/:id" element = {<SingleBlog />} />
        <Route path = "/about" element = {<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
