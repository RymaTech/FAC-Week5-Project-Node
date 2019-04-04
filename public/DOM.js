document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        let xhr = new XMLHttpRequest();
        console.log('hellp')

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
               
                console.log(data);
            }
        }

    xhr.open('GET', '/GroupName=London', true);
    xhr.send();
    }
}