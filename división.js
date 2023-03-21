var a_1 = 9;
var a_2 = 3;
function division(a,b){
    if (b==0){

        console.log("No se puede dividir entre el número cero");
    }else{
         return a / b;
    }
}
let res_division = division(a_1,a_2);
console.log("El resultado de esa división es "+ res_division);