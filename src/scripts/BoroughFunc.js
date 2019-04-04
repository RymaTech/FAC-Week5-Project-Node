const boroughFunction = json => {
  const boroughObj = JSON.parse(json);

  let arr = boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site'].map(
    x => {
      return parseInt(x['Species'][0]['@AirQualityIndex']);
    }
  );

  return arr;
};

module.exports = boroughFunction;
