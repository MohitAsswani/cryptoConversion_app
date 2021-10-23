const { response } = require("express");
var express = require("express")
var app = express()
require('dotenv').config();
var cors = require('cors')

app.get("/coinData",cors({credentials: true, origin: true}) ,function (req, res) {
    let responseData = ""
    const rp = require('request-promise');
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        },
        headers: {
            'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_PRO_API_KEY
        },
        json: true,
        gzip: true
    };

    rp(requestOptions).then((response) => {
        // console.log('API call response:', response);
        responseData = response
        // console.log(responseData)
    }).then(() => {
        res.send(responseData)
    }).catch((err) => {
        console.log('API call error:', err.message);
    });

})


app.listen(3000, () => {
    console.log("localserver running at 3000")
})