
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import AboutMe from './components/AboutMe/AboutMe';
import Service from './components/Service/Service';
import Footer from './components/Shared/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Proceed from './components/Proceed/Proceed';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Protected from './components/Protected/Protected';

function App() {
  return (
    <div >
        <Header/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/service" element = {<Service/>} />
            <Route path="/service/:serviceId" element = {<CheckOut/>} />

            <Route path="/checkout" element = {
               <Protected>
                    <CheckOut/>
               </Protected>
            } />
            <Route path="/proceed" element = {<Proceed/>} />
            <Route path="/blog" element = {<Blog/>} />
            <Route path="/about" element = {<AboutMe/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/register" element = {<Register/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
