let array = [1,2,3,4,5,6,7];
let suma = 0;
let index;
for (index = 0;index < array.length; index++) {
    console.log(`elemento #${index+1}: ${array[index]}`);
    suma += array[index];
    // suma = suma + array[index]   
}

console.log(`dividendo : ${suma}`);
console.log(`divisor: ${index}`);
console.log("el promedio es: ",suma/(index));

let list= [6, 14, 30, 31, 35, 42];
let cant=list.length;
let suma2 = 0;

for (let i=0; i<cant; i++){
    suma2 = suma2+list[i]
}

console.log(suma2/cant)

