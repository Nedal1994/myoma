import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Services from './components/Services/Services';
import Contact from './components/Contact';
import FooterPage from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import  {Route,Routes} from 'react-router-dom'
import React from 'react';
import { useSelector } from 'react-redux';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
{   isLoggedIn && <Route exact path='/user' element={<Dashboard/>}/>
}        </Routes>
        <FooterPage/>
      </React.Fragment>
    </div>
  );
}

export default App;