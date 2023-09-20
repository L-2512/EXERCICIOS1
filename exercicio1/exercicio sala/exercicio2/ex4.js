function lista04 (){
  let idade = parseInt(prompt("Qual sua idade?"))
   
    if(idade < 16){
     alert("Entrada proibida")
    } else if(idade >= 16 && idade < 18){
      alert("Entrada com responsavel")
    }  else {
     alert("Entrada liberada")
    }
}
lista04()