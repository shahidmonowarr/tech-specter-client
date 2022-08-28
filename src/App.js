import './App.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import OfferServices from './Components/OfferServices/OfferServices';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <OfferServices></OfferServices>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer> 
      </BrowserRouter>
    </div>
  );
}

export default App;
