const buttons = document.getElementsByClassName('borough');
let display = document.querySelector(".display");
let result = document.querySelector(".result");

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

for (let i = 0; i < buttons.length; i++) {

buttons[i].addEventListener('click', () => {
  result.textContent = "";
  console.log("Hello");
  let xhr = new XMLHttpRequest();
  let value = buttons[i].id;
  console.log(value);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      result.textContent = `${value}` + "'s Air Quality Index today is: " + data;

      console.log(data);
    }
  };

  xhr.open('GET', `/GroupName=${value}`, true);
  xhr.send();
});
}
