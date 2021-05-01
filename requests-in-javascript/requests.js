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
//   "id": "_82bmC"
//   }
// update("j-BFpIq", body)