const axios = require("axios").default;

// console.log(axios);

// axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5b4b7609')
// .then((response) =>{
//     console.log(response.data);
// })
async function fetch(){
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5b4b7609');
    console.log(response.data);
}


fetch();