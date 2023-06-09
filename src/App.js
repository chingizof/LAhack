import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import HotelPage from './hotelPage/HotelPage'
import Recommendation from './gpt/Recommendation'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OrderList } from './orderList/OrderList';

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/daun">
            <Recommendation />
          </Route> 
          <Route path="/map">
            <OrderList />
          </Route>
          <Route path="/hotel/:id">
            <HotelPage />
          </Route> 
          

          <Route path="/">
            <Home />
          </Route>
          
          
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
