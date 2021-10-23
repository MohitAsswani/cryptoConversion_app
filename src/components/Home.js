import React from 'react'
import Navbar from './Navbar'
import { useState , useEffect } from 'react';
import Data from './Data.json';
import Coins from './Coins.json';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const imageCheck = (key) => {
    if(Coins[key])
    {
        return Coins[key];
    }
    return undefined
}

function Home() {

const axios = require('axios');

var imageURL = "";
// const coins = JSON.parse(Coins); 

    return (
        <>
        <div>
            <Navbar />
            <h2 className="d-flex justify-content-center m-4">Scips to trade!</h2>
           
            { Data.data.map(({id, name, symbol,quote})=>(
                    <div className="row d-flex py-3 px-1 card__border m-auto" >
                        <div className="col-3">
                            <img className="coin__img" src={imageCheck(symbol)} alt="coin_img" />
                        </div>
                        <div className="col-3 m-auto">
                            <div><strong>{name}</strong></div>
                            <div>${quote.USD.price}</div>
                        </div>
                        <div className="col-5 m-auto">
                            <div className={"price_range " + (quote.USD.percent_change_24h <0 ? 'price_red' : 'price_green')}>{Number(quote.USD.percent_change_24h).toFixed(2)}%&nbsp;
                                <span style={{color:"black"}}>(24hrs)</span>
                            </div>
                            <div className={"price_range " + (quote.USD.percent_change_7d <0 ? 'price_red' : 'price_green')}>{Number(quote.USD.percent_change_7d).toFixed(2)}%&nbsp;
                            <span style={{color:"black"}}>(7Days)</span>
                            </div>
                        </div>
                    </div>
                ))
            }            
        </div>
         <div className="bottom d-flex justify-content-center">
         <form action="/crypto" className="convert__form">
            <button className="my-2 convert__btn">Convert to other coin</button>
        </form>
     </div>
     </>
    )
}

export default Home
