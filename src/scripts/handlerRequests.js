const request = require('request');
const boroughFunc = require('./boroughFunc');

// const handleLondon = (req, res) => {
//   request(
//     'http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/Json',
//     (error, response, body) => {
//       if (error) {
//         console.log("There's an error");
//         return;
//       } else {
//         const result = boroughFunc(body);
//         console.log(result);
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(result));
//       }
//     }
//   );
// };

const handleLondonBoroughs = (req, res, url) => {
  console.log('handler url ', url);
  let requestURL = `http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest${url}/Json`;
  request(requestURL, (error, response, body) => {
    if (error) {
      console.log("There's an error");
      return;
    } else {
      let data = boroughFunc(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  });
};

module.exports = {
  // handleLondon,
  handleLondonBoroughs
};
