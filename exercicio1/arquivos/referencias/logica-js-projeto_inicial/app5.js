function ex5(){
 let largura;
 let comprimento;
 let valorM2 = 1200;
 let valorTerreno;

  largura = prompt("Informe a largura do terreno");
  comprimento = prompt("Informe o comprimento do terreno");
   
  let area = largura * comprimento;
   valorTerreno = area * valorM2;

   console.log(valorTerreno);

}


function ex6(){
 let km = prompt("Quantos km foram pecorridos?");
 let litros = prompt("Quantos litros foram gastos?");
 let resultado = (km/litros);

 alert(`SEU CARRO FAZ ${resultado} Km com L` );

}
ex6();










 