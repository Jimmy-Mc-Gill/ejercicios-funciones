numero = prompt("Dime un número ");

function ParImpar(numero){
  if((numero % 2)==0){
     return "El número es par";
  }else{
     return "El número es impar";
  }
}
let sol_par = ParImpar(numero);
console.log(sol_par);