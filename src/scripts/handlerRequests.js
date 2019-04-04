const request = require('request');

const handleLondon = (req, res) => {
  request(
    'http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/Json',
    (error, response, body) => {
      if (error) {
        console.log("There's an error");
        return;
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      }
    }
  );
};

const handleLondonBoroughs = (req, res, url) => {
  console.log('handler url ', url);
  let requestURL = `http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/${url}/Json`;
  request(requestURL, (error, response, body) => {
    if (error) {
      console.log("There's an error");
      return;
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(body);
    }
  });
};

module.exports = {
  handleLondon,
  handleLondonBoroughs
};
