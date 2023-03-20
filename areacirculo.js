radio = prompt("Dime un radio");
function area(radio){
    var total_area = radio*radio*Math.PI
    return total_area;
};
let res_area = area(radio);
console.log("El resultado es " + res_area );