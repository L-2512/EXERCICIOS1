function numpares(){
 

    numeropar = prompt ("Digite um número");
    numerop = prompt ("Digite outro número");

    while (numeropar >= numerop){
      alert("Número invalido");
      numerop = prompt ("Digite outro número");
    }

    for (numeropar; numeropar <= numerop; numeropar++) {
     if(numeropar%2 == 0) {
      console.log (numeropar);
    }
    }
}
numpares()


















