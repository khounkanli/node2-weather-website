
const request = require('postman-request')
const utf8 = require('utf8')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + utf8.encode(address)+ ".json?access_token=pk.eyJ1Ijoia2hvdW5rYW5saSIsImEiOiJja2U2ZnF1eWkxY2VyMnJwZHZkMGJlYWtlIn0.dlPAWwtmVL4Q4LMvR0eU2g"

    request({url, json: true}, (error, response, body) => {
    if (error) {
        callback("Unable to connect to location services!", undefined)
    } else if(body.features[0]===undefined){
        callback("Unable to find location. Try another search!", undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[0],
            longitude: body.features[0].center[1],
            location: body.features[0].place_name
            })       
        }
    })
}

module.exports = geocode



// const Nominatim = require('nominatim-geocoder')
// const geocoder = new Nominatim()

// geocoder.search( { q: 'Lome, Togo' } )
//     .then((response) => {
//         console.log(response[0].lat, response[0].lon )
//         console.log(response[1].lat, response[1].lon )
//         console.log(response[2].lat, response[2].lon )
//     })
//     .catch((error) => {
//         console.log(error)
//     })
