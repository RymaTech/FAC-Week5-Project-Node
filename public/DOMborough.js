let barking = document.querySelector("#barkinganddagenham");
let barnet = document.querySelector("#barnet");
let bexley = document.querySelector("#bexley");

barking.addEventListener("click", (event) => {
    if (document.readyState === "complete") {
        let xhr = new XMLHttpRequest();
        const data = JSON.parse(xhr.responseText);

                let url = ""
                  url = barking.id;
                  console.log(url);
                })



                });

    xhr.open('GET', `/GroupName=${url}`, true);
    xhr.send();
    }
}
