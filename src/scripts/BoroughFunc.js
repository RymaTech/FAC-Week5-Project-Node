const boroughFunction = json => {
  const boroughObj = JSON.parse(json);

  let arr = boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site'].map(
    x => {
      return parseInt(x['Species'][0]['@AirQualityIndex']);
    }
  );

  let sum = arr.reduce((a, b) => a + b, 0);
  let result = sum/arr.length;
  return result;
};

module.exports = boroughFunction;
