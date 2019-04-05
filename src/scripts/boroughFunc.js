//function to handle extremely nested api structure 
const boroughFunction = json => {
    
    const boroughObj = JSON.parse(json);
    let arr = []
  
    if ((boroughObj['DailyAirQualityIndex']['LocalAuthority']).hasOwnProperty('Site')){

            if(Array.isArray(boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site'])){
                boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site'].map(x => {
                        if(Array.isArray(x['Species'])){
                            x['Species'].map((y) => {
                                arr.push(parseInt(y['@AirQualityIndex']));
                            })}
                            else {
                                        arr.push(parseInt(x['Species']['@AirQualityIndex']));
                                    }
            })
        } else {
            if (Array.isArray(boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site']['Species'])){
                boroughObj['DailyAirQualityIndex']['LocalAuthority']['Site']['Species'].map( x => {
                    arr.push(parseInt(x['@AirQualityIndex']));
                })
            }
        }
  
  
        let sum = arr.reduce((a, b) => a + b, 0);
        let result = sum/arr.length;
    
        return Math.round(result);
    } else {
        return 'Sorry, no data available'
    }
};
  
module.exports = boroughFunction;