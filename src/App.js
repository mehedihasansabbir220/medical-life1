import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Appointment from './pages/appointment/Appointment';
import Contact from './pages/contact/Contact';
import Found from './pages/404/Found';
import Services from './pages/Services/Services';
import Booking from './pages/Booking/Booking/Booking';
import Loging from './login/Loging';
import Register from './login/Register/Register';
import ProvideAuth from './hooks/ProvideAuth/ProvideAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Loging></Loging>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          
          <PrivateRoute path="/booking/:Id">
            <Booking></Booking>
          </PrivateRoute>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <Found></Found>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ProvideAuth>

  );
}

export default App;
