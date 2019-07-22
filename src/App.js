import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Morteza from './Morteza';
import Home from './Home';


function App() {
  return (

    <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/morteza" exact={true} component={Morteza}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
