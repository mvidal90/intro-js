// Document Object Model

// console.log(document.getElementById("mainTitle"))
const title = document.getElementById("mainTitle");
console.log(title.innerHTML)

title.innerHTML = "Hola Mundo!"
title.className = title.className+" segunda-clase"
title.style = "color: green"

// EJEMPLO DE ESTRUCTURA DE ELEMENTO DE HTML
// const element = {
//     id: "string",
//     className: "css",
//     name: "name",
//     style: "string",
//     innerHTML: "Contenido de HTML",
//     innerText: "Contenido de Texto"
// }
    
const div = document.getElementById("myDiv");
console.log(div.children)