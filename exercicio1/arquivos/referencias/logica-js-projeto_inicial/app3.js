
function ex1 (){
 let numero1;
 let numero2; 
 let resultado;


 numero1 = prompt("Digite um número: ");
 numero2 = prompt("Digite um número: ");
  
  numero1 = parseFloat (numero1);
  numero2 = parseFloat (numero2);

    resultado = numero1 + numero2

    alert (` O resultado da soma do ${numero1} com ${numero2} = ${resultado} `);
}

function ex2(){
 
    let nome;
    let sobrenome;

   nome = prompt("Qual seu nome?");
   sobrenome = prompt("Qual seu sobrenome?");
    
    alert(`Olá ${nome} ${sobrenome}, seja bem vindo!` );
 }
 ex1();
 ex2();



