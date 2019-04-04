document.onload = function() {
    // if (document.readyState === "complete") {
        let xhr = new XMLHttpRequest();
        console.log('hellp')

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log('hellp')
                console.log("This is our response", data);
            }
        }

    xhr.open('GET', '/', true);
    xhr.send();
    
}