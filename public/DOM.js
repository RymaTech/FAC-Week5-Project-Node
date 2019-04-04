const button = document.getElementById('lambeth');

// document.onreadystatechange = function() {
//   if (document.readyState === 'complete') {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//       }
//     };

//     xhr.open('GET', '/GroupName=London', true);
//     xhr.send();
//   }
// };

button.addEventListener('click', () => {
  console.log("Hello");
  let xhr = new XMLHttpRequest();
  let value = button.id;
  console.log(value);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      let display = document.querySelector(".display");

      let result = document.createElement("span");
      result.textContent = "Lambeth's Air Quality Index today is: " + data;

      display.appendChild(result);

      console.log(data);
    }
  };

  xhr.open('GET', `/GroupName=${value}`, true);
  xhr.send();
});
