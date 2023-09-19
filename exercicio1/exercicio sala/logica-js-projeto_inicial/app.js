
 alert("Bem vindo ao jogo da adivinhação");

 let numeroSecreto = 4;
 let chute;

 while ( chute != numeroSecreto ) {

 chute = prompt("Chute um número de 1 a 10"); 

 // Compara o chute com o numero
 if (chute == numeroSecreto) {
    alert("Voce acertou!");
 } else {
    alert("Voce erroooooooooooou!");

    if (chute > numeroSecreto){
        alert("o numero secreto é menor que " + chute);
    } else {
        alert(`o numero secreto é maior que ${chute}`);

    }
   }
 }

ex1()



























