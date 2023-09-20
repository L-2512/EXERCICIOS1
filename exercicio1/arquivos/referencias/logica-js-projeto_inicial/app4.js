function ex3(){
   let valorEmReal;
   let multiplicadorDolar = 4.93;
   let cotacao; 
  
  valorEmReal = prompt("Qual valor deseja converter?")
  cotacao = valorEmReal/multiplicadorDolar;
  cotacao = cotacao.toFixed(2)
  console.log(cotacao);
}
function ex4(){
 let num = parseInt (prompt("Digite um número: "));
 num = parseInt(num);
 let sucessor = num +1;
 let antecessor = num -1;
  alert(`O número antecessor a ${num} é ${antecessor} e o sucessor é ${sucessor}`);
}
ex4()



