const request = require('request');

const handleLondon = (req, res) => {

        request("http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/Json", (error, response, body) => {
            if (error) {
                console.log("There's an error");
                return;
            }
            else {
            // console.log('error:', error);
            // 
            // console.log("This is the response", body);
            // console.log("This is the list of local authorities", response);



            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(body);
            }
        });
}


module.exports = {
    handleLondon,
}
