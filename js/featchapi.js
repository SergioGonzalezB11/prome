const URL_API ='data/data.txt';
//referencia boton carga Data
const loadDataBtn = document.querySelector('#cargarData');

loadDataBtn.addEventListener("click",getData);

function getData(){
    fetch(URL_API)
    .then(response=> {
        console.log("🚀 ~ file: featchapi.js:13 ~ getData ~ response:", response)
        return response.text();   
    })
    .then((datos)=> {
        console.log("🚀 ~ file: featchapi.js:14 ~ .then ~ datos:", datos)
    })
    .catch((err) => {
        console.log("🚀 ~ file: featchapi.js:17 ~ getData ~ err:", err)
    })
}
