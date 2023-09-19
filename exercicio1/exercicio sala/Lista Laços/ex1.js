function cronometar(){
  
 alert("Cronometro");

   let numero = prompt ("Escolha um numero de 1 a 59 para cronometar");
   while (numero >= 60 || numero <= 1) {
    numero = prompt ("Escolha um numero de 1 a 59 para cronometar")
   }
       
      for ( let i = 0; i <= numero ; i++) {
  console.log (i);
 }
 

}


