function tentativas() {
 

    let login = "leo";
    let senha = "1234";
    let tentativas = 3;
    
    

    function verificar(){
         if(tentativas > 1){
            tentativas--;
            console.log(`${tentativa} tentativa(s) restante(s)`);
         } else {
            tentativas--;
            alert("ACESSO BLOQUEADO");
         }
    }
   
    do {
       let digitelogin = prompt("Qual seu login?");
       let senhadigitada = prompt("Qual sua senha?");
 

    if ( digitelogin == login ) {
        if(senhadigitada == senha) {
        alert("Bem-vindo, programador");
         tentativas=0

        } else {
         alert("Senha invalida");
         verificar();
         
        }
      } else {
         if (senhadigitada == senha){
             alert ("Login invalido");
             verificar();
        } else if ( (digitelogin != login) || (senhadigitada != senha) ){
             alert("Login e senha invalidos!");
            verificar();
            
         }
      } 
    } while ( tentativas >= 0 );
}
tentativas()

