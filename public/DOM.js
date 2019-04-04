const button = document.getElementsByTagName('button');

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

lambeth.addEventListener('click', () => {
  let xhr = new XMLHttpRequest();
  let value = button[0].id;
  console.log(value);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      let sum = data.reduce((a, b) => a + b, 0);
      console.log(sum);
    }
  };

  xhr.open('GET', `/GroupName=${value}`, true);
  xhr.send();
});
