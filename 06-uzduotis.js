function palyginti(sk1, sk2){
    if(sk1>sk2){
        return sk1+" skaicius didesnis";
    }else if (sk1===sk2){
        return sk1+' lygus' + sk2;
    }else{
        return sk2+ " skaicius didesnis";
    }

}
const sk1 = 10;
const sk2 = 20;
console.log(palyginti(sk1, sk2));