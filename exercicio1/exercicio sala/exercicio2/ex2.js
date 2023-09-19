function exercicio2 (){
 let numero1 = prompt("digite um numero");
 let numero2 = prompt("digite outro numero");

 numero1 = parseInt (numero1)
 numero2 = parseInt (numero2)
 
     if (numero1 == numero2){ 
        alert("seu numero são os mesmo seu burro!!")
     }

      else if (numero1 < numero2){
        alert("seu numero é menor");
     } else { (numero1 > numero2);
       alert("seu numero é maior");
    }     
}
function exercicio3 (){

  let resposta = prompt ("Voce é gestante?");
  if(resposta == "sim") {
    gravida = true 
    alert("Voce esta na fila preferencial");
  } else {
     gravida = false
     
   let resposta2 = prompt("Voce é pcd?");
   if (resposta2 == "sim"){
    pcd = true
    alert("Voce esta na fila preferencial");
   } else {
    pcd= false
    let resposta3 = prompt ("Qual sua idade?");
    if (resposta3 >= 65){
     alert("Voce esta na fila preferencial");
    } else { (resposta3 <=65);
     alert("Voce esta na fila comum, sua vez é 43");
  } idade = true 
   }



}

}


function exercicio4(){
    let idade = prompt ("Qual sua idade?");
    idade = parseInt(idade);
    if (idade < 16) {
      alert("Voce não pode ir para o evento");
    } else {
       if (idade < 18) {
          alert("Voce pode entrar com o responsavel");
      } else {
          alert("Voce entrara no evento");
      }      
    }
} 
exercicio3()