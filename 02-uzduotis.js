function konvertavimas(){
    sekundes = valandos *60 *60;
    return sekundes;
}
const val= 3;
const x= konvertavimas(val);
console.log(x);