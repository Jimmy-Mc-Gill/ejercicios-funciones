nota = prompt("¿Cuánto has sacado? ");
function Bullying(nota){
if(nota < 60){
    return "Tu eres tonto";
}else if(60<=nota && nota<=69){
    return "No está mal";
}else if(70<nota && nota<=79){
    return "Vaya payaso";
}else{
    return "Sal de tu casa macaco ";
  }
}
let clas_nota = Bullying(nota);
console.log(clas_nota);