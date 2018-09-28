function refrigerador(){
  let nombre = prompt("¿Como te llamas?");
  let contraRefri = prompt("¿Cual es la contraseña del refrigerador?");

  // Sintaxis Si SiNO
  if(nombre == "Edgar"){
    if (contraRefri == "8669") {
      console.log("Hola Edgar, refrigerador abierto");
    }else {
      console.log("Se te olvido la contraseña Edgarin!!!");
    }
  }else if (nombre == "Lariza") {
    if (contraRefri == "8669") {
      console.log("Hola bonita <3 u <3, refrigerador abierto");
    }else {
      console.log("Esa no es la contraseña bebé");
    }
  }else {
    console.log("bye bye bye");
  }
}

// Ingresos
function mes(){
  let ingreso1 = Number(prompt("Ingresa el ingreso1"));
  let ingreso2 = Number(prompt("Ingresa el ingreso2"));

  // Gastos
  let gasto1 = Number(prompt("Ingresa el gasto1"));
  let gasto2 = Number(prompt("Ingresa el gasto2"));
  let gasto3 = Number(prompt("Ingresa el gasto3"));

  let Resto = ingreso1 + ingreso2 - gasto1 - gasto2 - gasto3;

  console.log("Al final del mes tienes " + Resto + " pesos");
}


// Validaciones
// Nivel de videojuego
function niveldejuego(){
  let Nivel = Number(prompt("¿Que nivel eres?"));

  if (Nivel < 10) {
    alert("Eres apreniz shavo, sigue asi");
  }else if (Nivel < 20) {
    alert("Eres acrobata");
  }else {
    alert("Eres Ninja");
  }
}

// Ciclos
// Regaño
function regaño(){
  let inicio = Number(prompt("¿En que valor vas a iniciar?"));
  let final = Number(prompt("¿En que valor vas a terminar?"));

  while (inicio > final) {
    final = Number(prompt("No puedes terminar en un numero menor al que iniciaste, ¿En que valor vas a terminar?"));
  }

  if (inicio <= final) {
    for (var i = inicio; i <= final; i++) {
      console.log(i);
    }
  }
}

// Maximo valor
function valormaximo(){
  console.log(Number.MAX_SAFE_INTEGER);
}

// Funciones
function EjemploDeFuncion() {
  console.log("Prueba de funcion :D");
}
// EjemploDeFuncion(); // llamada de funcion

// Piedra Papel o Tijera
function PPT(){

  let modo = prompt("¿Quieres jugar contra la maquina?");

  if (modo == "si") {
      let Jugador1 = prompt("¿Piedra, Papel o Tijera jugador1?");
      let Aleatoreo = Math.round(Math.random()*2);
      let Maquina;

      if (Aleatoreo == 0) {
         Maquina = "piedra";
      }
      if (Aleatoreo == 1) {
         Maquina = "papel";
      }
      if (Aleatoreo == 2) {
         Maquina = "tijera";
      }

      console.log(Maquina);

      if (Jugador1 == Maquina) {
        alert("Empataron");
      }
      if (Jugador1 == "papel" && Maquina == "piedra") {
        alert("Jugador 1 GANA!!!");
      }
      if (Jugador1 == "papel" && Maquina == "tijera") {
        alert("Jugador 2 elige ");
      }
      if (Jugador1 == "piedra" && Maquina == "papel") {
        alert("Jugador 2 GANA!!!");
      }
      if (Jugador1 == "piedra" && Maquina == "tijera") {
        aalert("Jugador 1 GANA!!!");
      }
      if (Jugador1 == "tijera" && Maquina == "papel") {
        alert("Jugador 1 GANA!!!");
      }
      if (Jugador1 == "tijera" && Maquina == "piedra") {
        alert("Jugador 2 GANA!!!");
      }
  }else {

    let Jugador1 = prompt("¿Piedra, Papel o Tijera jugador1?");
    let Jugador2 = prompt("¿Piedra, Papel o Tijera jugador2?");

    if (Jugador1 == Jugador2) {
      alert("Empataron");
    }
    if (Jugador1 == "papel" && Jugador2 == "piedra") {
      alert("Jugador 1 GANA!!!");
    }
    if (Jugador1 == "papel" && Jugador2 == "tijera") {
      alert("Jugador 2 GANA!!!");
    }
    if (Jugador1 == "piedra" && Jugador2 == "papel") {
      alert("Jugador 2 GANA!!!");
    }
    if (Jugador1 == "piedra" && Jugador2 == "tijera") {
      aalert("Jugador 1 GANA!!!");
    }
    if (Jugador1 == "tijera" && Jugador2 == "papel") {
      alert("Jugador 1 GANA!!!");
    }
    if (Jugador1 == "tijera" && Jugador2 == "piedra") {
      alert("Jugador 2 GANA!!!");
    }
  }
}


// Fibonacci con 3 variables
function Fibonacci(){
  let Elemento = Number(prompt("¿Hasta que numero quieres llegar en la serie de fibonacci?"));

  let f0 = 0;
  let f1 = 1;
  let f;

  for (var n = 0; n <= Elemento; n++) {
    if (n == 0) {
      console.log("El elemto 1 de la serie es: 0");
    }
    if (n == 1) {
      console.log("El elemto 2 de la serie es: 1");
    }
    if (n > 1) {
      f = f0 + f1;
      console.log("El elemto " + n + " de la serie es: " + f);
      f0 = f1;
      f1 = f;
    }
  }
}


// Fibonacci con array
function Fibonacci2(){
  let Elemento = Number(prompt("¿Hasta que numero quieres llegar en la serie de fibonacci?"));
  let Fn = [];

  for (var n = 0; n <= Elemento; n++) {
    if (n == 0) {
      Fn[n] = 0;
    }
    if (n == 1) {
      Fn[n] = 1;
    }
    if (n > 1) {
      Fn[n] = Fn[n-1] + Fn[n-2];
    }
      console.log("El elemento " + (n+1) + " de la sucecion es: " + Fn[n]);
  }
}
