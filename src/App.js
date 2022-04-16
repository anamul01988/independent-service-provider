import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div >
        <Header/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/blog" element = {<Blog/>} />
            <Route path="/about" element = {<AboutMe/>} />
        </Routes>
    </div>
  );
}

export default App;
