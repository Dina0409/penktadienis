function taskai(baudos , dvitaskiai, trisakiai) {
    let suma = 0;
    suma = baudos + (dvitaskiai *2) + (trisakiai *3);
    return suma;

}
const a = 10; //baudos
const b = 15; //dvitaskiai
const c = 5; //tritaskiai

console.log(taskai (a,b.c));

console.log(`Rezultatas: ${taskai(a,b,c)}` );