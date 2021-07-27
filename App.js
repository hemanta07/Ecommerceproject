import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login  from './pages/login/login';
import Home from './pages/home/home'
import ListingsPage from './pages/listings-page/listings-page';
import Yourorder from './pages/your-order/your-order';
import Delivery from './pages/delivery/delivery';
import CollectfromStore from './pages/collect-from-store/collect-from-store';
import OrderSummaries from './pages/order-summaries/order-summaries';
import OrderSummary from './pages/order-summary/order-summary';

function App() {
  if(localStorage.getItem("userid")==null)
  {
     return(
    
      <Login/>

    
    
     )
  }
  else
  {
  
 
  return (
    <Router>
    <div>
    <Switch>
    
    
      
  
    <Route exact path="/" component={Login} />

      
      <Route exact path="/home" component={Home} />

      <Route path='/listing' component={ListingsPage} />
      <Route  path='/yourorder' component={Yourorder} />
      <Route  path='/delivery' component={Delivery} />
      <Route  path='/collect' component={CollectfromStore} />
      <Route  path='/order' component={OrderSummaries} />
      <Route  path='/ordersummary' component={OrderSummary} />
    </Switch>  
    </div>
    </Router>
    
  );
}

}
export default App;

