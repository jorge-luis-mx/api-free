
const API = "https://jsonplaceholder.typicode.com";

const app = document.querySelector("#app");
const app_mayor = document.querySelector("#app-mayor");
const app_menor = document.querySelector("#app-menor");

let listDesordenada = document.createElement("ul");
let mayor = document.createElement("ul");
let menor = document.createElement("ul");


//utilizamos fecha consumir api
fetch(`${API}/users`)
   //nos devuelve una promesa
   .then((response)=>response.json())
   .then((peliculas)=>{
      

      let resultado = peliculas.sort();
      resultado.forEach(pelicula => {
         //creamos nuestro elemento li
         let lista_menor = document.createElement("li");
         //imprimimos los datos
         lista_menor.appendChild(
            document.createTextNode(`${pelicula.name} ${pelicula.id}`)
         );
         menor.appendChild(lista_menor);

      });
      app_menor.appendChild(menor).style.cssText = "list-style:none;line-height:1.5rem;";


      let result = peliculas.reverse();
      result.forEach(pelicula => {
         //creamos nuestro elemento li
         let lista_mayor = document.createElement("li");
         //imprimimos los datos
         lista_mayor.appendChild(
            document.createTextNode(`${pelicula.name} ${pelicula.id}`)
         );
         mayor.appendChild(lista_mayor);

      });
      app_mayor.appendChild(mayor).style.cssText = "list-style:none;line-height:1.5rem;";

   });


