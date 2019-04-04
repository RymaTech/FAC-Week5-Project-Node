const request = require('request');

const handleLondon = (url) => {
    

        request("http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/Json", (error, response, body) => {
            console.log('error:', error);
            console.log('response:', response);
            console.log('statusCode:', response.statusCode);
            console.log('body:', body);
        });
}


module.exports = {
    handleLondon,
}