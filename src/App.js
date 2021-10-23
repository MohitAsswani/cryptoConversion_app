import './App.css';
import Home from './components/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState , useEffect } from 'react';
import Crypto from './components/Crypto';
import axios from 'axios'

function App() {

const [coinData, setcoinData] = useState("")

  useEffect(  (event) => {
     axios.get(
        `localhost:3000/coinData`,
        {
        headers: {
          "Access-Control-Allow-Origin": "*"   
        }
    }).then((response)=>{
        setcoinData(response)
    console.log(coinData)
    }   )
}, [])

  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/crypto">
            <Crypto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
