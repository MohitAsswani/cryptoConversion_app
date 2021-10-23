import React from 'react'
import Navbar from './Navbar'
import Data from './Data.json'
import { useState , useEffect } from 'react';

function Crypto() {
const [amount, setamount] = useState("");
const [convertedAmount, setconvertedAmount] = useState("");
const [selectedAmount, setSelectedAmount] = useState("");

const onSelection = (event) => { 
    let usdTotal = amount * event.target.value
    setSelectedAmount(usdTotal)
}

const onSelection2 = (event) => {
    let usdTotal = 1 * event.target.value
    setconvertedAmount(selectedAmount/usdTotal)
}


    return (
        <div>
            <Navbar />
            <div className="row mt-3 mx-auto d-block text-align-center">
                <div className="col-6 m-auto">

                    <div>
                        <input className="d-flex m-auto"
                         type="number"
                         onChange = {(e) => setamount( e.target.value)}
                         />
                         
                    </div>
                    <div className="my-2">
                        <label><strong>Convert From</strong></label>
                    </div>
                    <div className="my-2">  
                        <select onChange={onSelection}>
                            <option value={0} >Crypto 1</option>
                            { Data.data.map(({id, name, symbol,quote})=>(
                                <option value={quote.USD.price} >{name}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                </div>
                <div className="col-6 m-auto ">
                    <div className="my-2">
                        <label><strong>Convert To</strong> </label>
                    </div>
                    <div className="my-2">
                        <select onChange={onSelection2}>
                        <option value={0} >Crypto 2</option>
                            {Data.data.map(({id,name,quote}) =>(
                                <option value={quote.USD.price}>{name}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div>
                        <span style={{width:"100%"}} >{convertedAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crypto
