const boroughFunction = json => {
    
    const boroughObj = JSON.parse(json);
    let arr = []
  
    boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site'].map(x => {
            if(Array.isArray(x['Species'])){
                x['Species'].map((y) => {
                    arr.push(parseInt(y['@AirQualityIndex']));
                })
            }
            else {
                arr.push(parseInt(x['Species']['@AirQualityIndex']));
            }
        })

        let sum = arr.reduce((a, b) => a + b, 0);
        let result = sum/arr.length;
        return Math.round(result);
};
  
module.exports = boroughFunction;