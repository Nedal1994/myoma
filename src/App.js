import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FooterPage from './components/Footer';
import Dashboard from './components/Dashboard';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
        <FooterPage/>
    </div>
  );
}

export default App;