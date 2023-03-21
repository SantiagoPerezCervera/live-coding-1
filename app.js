function resultadoadoarregloay(string, arreglo) {
    let resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].length > string.length) {
        resultado.push(arreglo[i]);
      }
    }
    return resultado;
  }

  const myarreglo = ["HolaMundo", "Hola Mundo", "Bootcamp", "Ejemplo", "Personal"];
  const string = 'estadio';
  
  console.log(resultadoadoarregloay(string, myarreglo)); 


  //Mi compañero fue carlos zarate, me realizo la observacion del tiempo que me tardo en realizar el codigo, no pude terminarlo
  //solo hice el ejercicio 1