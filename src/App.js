import './App.css';
import Home from "./screens/Home"
import About from "./screens/About"
import Shop from "./screens/Shop"
import Free from "./screens/Free"
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
<div>
  <BrowserRouter>
  <Switch>
   <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/shop" component={Shop} />
    <Route path="/free" component={Free} />
 </Switch>
 </BrowserRouter>
 
</div>
    
  
  );

}
export default App;
