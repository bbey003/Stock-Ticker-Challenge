function getStockData() {
    let today = new Date();
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),/* return a random number between 0 and 3 to two decimal places */
        time: `${today.getHours()}/${today.getMinutes()}/${today.getSeconds()}`/* return a timestamp in this format: hh/mm/ss */
    }
}
  
export default getStockData;
