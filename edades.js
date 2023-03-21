edad = prompt("Dime tu edad ");
function etapaVida(edad){
if(edad < 13){
    return "Tu eres un niño";
}else if(13<=edad && edad<=18){
    return "Tu eres un adolescente";
}else if(18<edad && edad<=64){
    return "Tu eres un adulto";
}else{
    return "Tu tienes un pie en la tumba";
  }
}
let clas_edad = etapaVida(edad);
console.log(clas_edad);