import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Deatils';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import Cart from './components/cart/Cart'

function App() {
  return (
   <React.Fragment>       
        <Navbar />
            <Switch>              
              <Route exact  path='/' component={ProductList} />            
              <Route  path='/details' component={Details} />
              <Route  path='/cart' component={Cart} />

              <Route  component={Default} />
            </Switch>
            <Modal />
   </React.Fragment>
  );
}

export default App;
