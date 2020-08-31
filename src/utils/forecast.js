const request = require('postman-request')

const utf8 = require('utf8')



const forecast = (latitude, longitude, location, callback) => {
    var units= "m"
    if(location.includes("United States")) {  var units = "f" }
    const url = 'http://api.weatherstack.com/current?access_key=aaf5a0e902860773397b7389013b885b&query='+ longitude.toString()+','+latitude.toString()+'&units='+units.toString()

    request({url, json: true}, (error, response, body) => {
    if (error) {
        callback("Unable to connect to forecast services!", undefined)
    } else if(body.current===undefined){
        callback("Unable to find location. Try another search!", undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + " throughtout the day. it is currently " + body.current.temperature + " degrees, and it feels like " + body.current.feelslike + " degrees out.")       
        }
    })
}




module.exports = forecast
