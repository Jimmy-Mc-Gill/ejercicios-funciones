num_art = prompt("¿Cuántos artículos has comprado?");
function descuento(num_art){
  if(num_art<=1){
      return "No se te aplicará ningún descuento";
 }else if(1<num_art && num_art<=4){
      return "Se te aplicará un descuento del 10%";
 }else if(4<num_art && num_art<=10){
      return "Se te aplicará un descuento del 20%";
 }else{
      return "Se te aplicará un descuento del 30%";
 }
}
  let desc_art=descuento(num_art);
  console.log(desc_art);
