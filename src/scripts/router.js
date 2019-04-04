const handlers = require('./handlers.js');
const apiRequestHandlers = require('./handlerRequests');

const router = (request, response) => {
  let url = request.url;
console.log('request url ',request.url);
  if (url === '/') {
    handlers.handleHomeRoute(request, response);
  } else if (url.indexOf('public') !== -1) {
    handlers.handlePublic(request, response, url);
  } else if (url.indexOf('/GroupName=London') !== -1) {
    console.log('hello received a request')
    apiRequestHandlers.handleLondon(request, response, "http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/GroupName=London/Json");
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 file not found</h1>');
  }
};

module.exports = router;
