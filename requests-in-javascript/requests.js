const axios = require("axios");

const url = "http://localhost:5000/constellations";

// axios
//   .get(url)
//   .then((response) => {
//       // Get the constellations with < 10 starsWithPlanets
//     const result = response.data.filter((constellation) => {
//       return constellation.starsWithPlanets < 10;
//     });
//     console.log(result);
// })

/* // get the overall json
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
*/
/*
  .catch((error) => {
    console.log(error.message);
  });
*/
/*
axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });
*/
// function newOne() {
//   axios.post(url, {
//   name: "Mina",
//   meaning: "Love",
//   starsWithPlanets: 13,
//   quadrant: "SQ3"
//   }) .then ((response) => {
//     console.log(response.data)
//   })
// }
// newOne()

// axios
// .post(url, {
//   name: "Mina",
//   meaning: "Love",
//   starsWithPlanets: 13,
//   quadrant: "SQ3"
// })
// .then((response) => {
//   console.log(response.data);
// })

// function update(id, body){
//   axios.put(`${url}/${id}`, body)
//   .then(({data}) => {
//     console.log(data)
//   })
// }
// let body = {
//   "name": "Leo",
//   "meaning": "Lioness",
//   "starsWithPlanets": 19,
//   "quadrant": "NQ2",
//   "id": "_82bmC"
//   }
// update("j-BFpIq", body)

// function update(id, body) {
//   axios.put(`${BASE_URL}/${id}`, body).then(({ data }) => {
//     console.log(data);
//   });
// }

// function destroy(id) {
//   axios.delete(`${url}/${id}`).then(({ data }) => {
//     console.log(data);
//   });
// }
// destroy("The Id goes here")


// function update(id, body){
//   axios.put(`${url}/${id}`, body)
//   .then(({data}) => {
//     console.log(data)
//   })
// }
// let body = {
//   "name": "Leo",
//   "meaning": "Lioness",
//   "starsWithPlanets": 19,
//   "quadrant": "NQ2",
//   "reminder": "roars",
//   "id": "j-BFpIq"
//   }
// update("j-BFpIq", body)

// axios.patch(url[, data[, config]])

// async function correct(id) {
// const result = await axios.patch(`${url}/${id}`, {quadrant: 'SQ3'})
// console.log(result.data)
// }
// correct("peUhVio")

// execute simultaneous requests with .all

// axios.all([
//   axios.get('https://api.github.com/users/mapbox'),
//   axios.get('https://api.github.com/users/phantomjs')
// ])
// .then(responseArr => {
//   //this will be executed only when all requests are complete
//   console.log('Date created: ', responseArr[0].data.created_at);
//   console.log('Date created: ', responseArr[1].data.created_at);
// });

// logs:
// => Date created:  2011-02-04T19:02:13Z
// => Date created:  2017-04-03T17:25:46Z

// axios
//   .get(url)
//   .then((response) => {
//       // Get the constellations with < 10 starsWithPlanets
//     const result = response.data.filter((constellation) => {
//       return constellation.starsWithPlanets < 10;
//     }); result = 
// })

// axios.all([
//   axios.get(`${url}`/"peUhVio"),
//   axios.get(`${url}`/"bNHCxXb")
// ])
// .then(responseArr => {
//   //this will be executed only when all requests are complete
//   console.log('Name: ', responseArr[0].name);
//   console.log('Name: ', responseArr[1].name);
// });

// i used map to put them into an array but then the trick was to assign the values to new keys name,country -- something to do with countries and regions and i was asked to return the name region and currency they use -- i had to filter out the object to only display what they were asking about 

// We had to return three things from every country... I believe name, currency, and region. I messed up the advanced function part. so i used a map function had a parameter that was countrys... inside the map function it would return an object ie... 
//return {name: countrys.name, region: countrys.region, currency: countrys.currency}

// async function getData(){
//   const result = await axios.get(url)
//   .then ((response) => {
//     const cleaned = response.map(item => ({name: item.name, meaning: item.meaning}))
//   }); console.log(cleaned)
// }
// getData()

// function getThese() {
// axios.get(url)
// .then ((response) => {
//   const cleanedResponse = response.data.map(stuff => ({name: stuff.name, meaning: stuff.meaning}));
// console.log(cleanedResponse)
// })} getThese()

//------------------------------------------NEW API

const url2 = "https://restcountries.eu/rest/v2/";

// axios
// .get(url)
// .then((response) => {
//     console.log(response.data);
// })
// .catch((error) => {
//     console.log(error.message);
// });

async function getThese() {
    await axios.get(url2).then((response) => {
            const justThese = response.data.map
            (select => ({name: select.name, capital: select.capital}));
        console.log(justThese.slice(0, 6));
        })} console.log(getThese())