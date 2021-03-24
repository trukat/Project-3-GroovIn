import axios from "axios";


function eventData() {

    const options = {
      method: 'GET',
      url: "https://api.seatgeek.com/2/events?client_id=MTkzMTk4OTF8MTYxNjI2MDQzOS42NTA5OTM2&client_secret=eaa2b57cbac19f713878974519146130e5a5d57fab22c28ff8315e014544aea0",
      headers: {
        'x-rapidapi-key': '102e0fee92mshced132a3d779a81p1b9eb5jsnb602debd05bb',
        'x-rapidapi-host': 'seatgeek-seatgeekcom.p.rapidapi.com',
        // 'Access-Control-Allow-Headers': 'x-rapidapi-host', 
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};



export default eventData;