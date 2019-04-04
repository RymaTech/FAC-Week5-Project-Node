document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        let xhr = new XMLHttpRequest();
        console.log('hellp')

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);


                // console.log("This is the response", data);
                // // console.log("This is the list of local authorities", data['DailyAirQualityIndex']['LocalAuthority']['0']);
                // // console.log(listOfBoroughs);
                // let selectedAuthority;
                // listOfBoroughs.map(borough => {
                //   console.log(borough['Site']['Species']);
                // });

                // for (let i = 0; i < listOfBoroughs.length; i++) {
                //   console.log(listOfBoroughs[i]['@LocalAuthorityName']);
                // }
                //
                // console.log(boroughs);

                // console.log(listOfBoroughs);

                // let listOfBoroughs = data['DailyAirQualityIndex']['LocalAuthority'];
                //
                // let boroughNames = [];
                //
                // listOfBoroughs.map(borough => {
                //
                //   boroughNames.push(borough['@LocalAuthorityName']);
                //
                // });
                //
                // let boroughLevels = [];
                //
                // listOfBoroughs.map(borough => {
                //
                //   boroughLevels.push(borough['Site']['Species']);
                //
                // });
                //
                // console.log(boroughLevels);
            }
        }

    xhr.open('GET', '/GroupName=London', true);
    xhr.send();
    }
}
