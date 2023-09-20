function exercicio5() {

   let login = "leo@senai.com.br";
   let senha = "1234";

   let digitelogin = prompt("Qual seu login?")
   let senhadigitada = prompt("Qual sua senha?")

   if ( digitelogin == login ) {
       if(senhadigitada == senha) {
       alert("Bem-vindo, programador")

       } else {
        alert("Senha invalida");
       }
     } else {
        if (senhadigitada == senha){
            alert ("Login invalido")
        } else {
            alert("Login e senha invalidos!")
        }
     }
}
exercicio5()