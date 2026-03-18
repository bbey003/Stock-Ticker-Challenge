import getStockData from "./fakeStockAPI.js";
import green from "./svg/green.svg"
import red from "./svg/red.svg"
import grey from "./svg/grey.svg"
let data = {}
/*
App requirements:
 - The app should display the name, symbol, and 
   price of the stock, with a timestamp as per the 
   screenshot. 
 - The triangle compares the current stock price to 
   its previous price. If the price has increased, it 
   should be a green triangle pointing up, if the price 
   has decreased it should be a red triangle pointing 
   down, and if there has been no change it should be a 
   grey triangle pointing to the right.
 - The price should update every 1.5 seconds. 
*/

/*
Challenge:
  1. Find a way to get fresh stock data every 1.5 seconds.
  2. Call the renderStockTicker function with the fresh data.
  3. Add logic to renderStockTicker to display the correct 
     information.
  ⚠️ You will need to write code here in index.js and in
   fakeStockAPI.js.
*/


function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

  //render stock ticker conditional image based on price change
    if (data.price > stockData.price) {
      stockDisplayPriceIcon.innerHTML = '<img src="./svg/red.svg" width="100" height="100">'
    } else if (data.price < stockData.price) {
      stockDisplayPriceIcon.innerHTML = '<img src="./svg/green.svg" width="100" height="100">'
    } else {
      stockDisplayPriceIcon.innerHTML = '<img src="./svg/grey.svg" width="12" height="12">'
    }
    data = stockData

  //update HTML with data
    stockDisplayName.innerText = stockData.name
    stockDisplaySymbol.innerText = stockData.sym
    stockDisplayPrice.innerText = stockData.price
    stockDisplayTime.innerText = stockData.time
    
}

//Call function every 1.5 seconds
setInterval(() => {
  renderStockTicker(getStockData())
}, 1500)
