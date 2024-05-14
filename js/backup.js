// Codigo pantalla completa
const contenedor = document.getElementById("simulador");
const boton = document.getElementById("btn_fullscreen");

boton.addEventListener("click", () => {
  // Si el navegador está en pantalla completa, salimos de pantalla completa
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    // Si el navegador no está en pantalla completa, nos ponemos en pantalla completa
    contenedor.requestFullscreen();
  }
});

//Funciones DPS450
let estado;
let variable;
let ALT = "0";
let SPEED = "0";
let MACH = "0";
let ROC = "0";
let RATE = "0";

const pantalla_ALT = document.getElementById("pantalla_ALT");
const pantalla_CAS = document.getElementById("pantalla_CAS");
const pantalla_ROC = document.getElementById("pantalla_ROC");
const pantalla_RATE = document.getElementById("pantalla_RATE");

let active_limit = "CIVIL";
let pantalla_activa;
let id_seleccionado; //Aqui guardamos el id del limites
const btn_encender = document.getElementById("power_4");
const btn_setup = document.getElementById("setup_btn");
const opciones_menu_derecha =
  document.getElementsByClassName("opciones__dialog");
const btn_delete = document.getElementById("delete_btn");
const btn_enter = document.getElementById("enter_btn");
const btn_alt = document.getElementById("ALT");
const btn_speed = document.getElementById("SPEED");
const btn_match = document.getElementById("MATCH");
const btn_roc = document.getElementById("ROC");
const btn_rate = document.getElementById("RATE");

const nombre_variable = document.querySelector(".nombre_variable");
const valor_variable = document.querySelector(".valor_variable");
const pantalla_variable = document.querySelector(".pantalla_variable");
const unidades_variable = document.querySelector(".unidades_variable");

const testing_status = document.getElementById("testing_status");
const testing_time = document.getElementById("testing_time");
const testing_no = document.getElementById("testing_no");

const btn_f1 = document.getElementById("f1");
const btn_f2 = document.getElementById("f2");
const btn_f3 = document.getElementById("f3");

const led_rojo = document.getElementById("power_5");
const pantalla_contenido = document.querySelector(".pantalla__contenido");

const vistai_1 = document.querySelector(".infoc-1");
const vistai_2 = document.querySelector(".infoc-2");
const vistai_3 = document.querySelector(".infoc-3");

const btn_clear = document.getElementById("btn_clear");

var contenido_1 = opciones_menu_derecha[0].textContent;
var contenido_2 = opciones_menu_derecha[1].textContent;
var contenido_3 = opciones_menu_derecha[2].textContent;
var contenido_4 = opciones_menu_derecha[3].textContent;
var contenido_5 = opciones_menu_derecha[4].textContent;
var contenido_6 = opciones_menu_derecha[5].textContent;

const limites = document.getElementsByClassName("limits");

//opciones menu
const menu_inicial = ["Rate Timer", "Units", "EPR"];
const menu_setup = [
  "Display",
  "Units",
  "Limits (Civil)",
  "Altitude Correction",
  "Date Time",
  "More(1 of 2)",
];
const menu_variable = ["", "", "", "", "", ""];

const menu_limits = ["▲", "▼", "Select Limit", "View Details", "Enter PIN", ""];

const menu_testing = [
  "Start Time",
  "Cancel",
  "Set Wait [01m:00s]",
  "Set Time [01m:00s]",
  "Save Settings",
  "",
];

btn_encender.addEventListener("click", () => {
  if (estado == undefined || estado == "OFF") {
    estado = "ON";
    led_rojo.style.backgroundColor = "red";
    pantalla_activa = "home";
  } else if (estado == "ON") {
    estado = "OFF"; //Variable importante
    led_rojo.style.backgroundColor = "#680707";
    pantalla_activa = "";
  }
  pantalla_contenido.classList.toggle("pantalla_apagada");
});

btn_setup.addEventListener("click", () => {
  if (estado == "ON") {
    actualizar_menu_derecha(menu_setup);
    pantalla_activa = "leak_menu";
  }
});

btn_alt.addEventListener("click", () => {
  if (estado == "ON") {
    vistai_1.classList.add("pantalla_apagada");
    vistai_2.classList.add("pantalla_apagada");
    vistai_3.classList.remove("pantalla_apagada");
    actualizar_menu_derecha(menu_variable);
    nombre_variable.textContent = "ALT";
    valor_variable.textContent = "000";
    pantalla_variable.textContent = ALT;
    unidades_variable.textContent = "ft";
    pantalla_activa = "variable_menu";
    variable = "ALT";
  }
});

btn_speed.addEventListener("click", () => {
  if (estado == "ON") {
    vistai_1.classList.add("pantalla_apagada");
    vistai_2.classList.add("pantalla_apagada");
    vistai_3.classList.remove("pantalla_apagada");
    actualizar_menu_derecha(menu_variable);
    nombre_variable.textContent = "CAS";
    valor_variable.textContent = "000";
    pantalla_variable.textContent = SPEED;
    unidades_variable.textContent = "kts";
    pantalla_activa = "variable_menu";
    variable = "CAS";
  }
});

btn_match.addEventListener("click", () => {
  if (estado == "ON") {
    vistai_1.classList.add("pantalla_apagada");
    vistai_2.classList.add("pantalla_apagada");
    vistai_3.classList.remove("pantalla_apagada");
    actualizar_menu_derecha(menu_variable);
    nombre_variable.textContent = "MACH";
    valor_variable.textContent = "000";
    pantalla_variable.textContent = MACH;
    unidades_variable.textContent = "MACH";
    pantalla_activa = "variable_menu";
    variable = "MACH";
  }
});

btn_roc.addEventListener("click", () => {
  if (estado == "ON") {
    vistai_1.classList.add("pantalla_apagada");
    vistai_2.classList.add("pantalla_apagada");
    vistai_3.classList.remove("pantalla_apagada");
    actualizar_menu_derecha(menu_variable);
    nombre_variable.textContent = "ROC";
    valor_variable.textContent = "000";
    pantalla_variable.textContent = ROC;
    unidades_variable.textContent = "ft/min";
    pantalla_activa = "variable_menu";
    variable = "ROC";
  }
});

btn_rate.addEventListener("click", () => {
  if (estado == "ON") {
    vistai_1.classList.add("pantalla_apagada");
    vistai_2.classList.add("pantalla_apagada");
    vistai_3.classList.remove("pantalla_apagada");
    actualizar_menu_derecha(menu_variable);
    nombre_variable.textContent = "RtCAS";
    valor_variable.textContent = "000";
    pantalla_variable.textContent = RATE;
    unidades_variable.textContent = "kts/min";
    pantalla_activa = "variable_menu";
    variable = "RATE";
  }
});

btn_f3.addEventListener("click", () => {
  if (estado == "ON" && contenido_3 == "Limits (Civil)") {
    vistai_1.classList.add("pantalla_apagada");
    vistai_2.classList.remove("pantalla_apagada");
    vistai_3.classList.add("pantalla_apagada");
    actualizar_menu_derecha(menu_limits);
    //Funcion colocar limites
    for (i = 0; i < limites.length; i++) {
      if (limites[i].textContent == active_limit) {
        limites[i].classList.add("limite_seleccionado");
      }
    }
    pantalla_activa = "limits";
  } else if (estado == "ON" && contenido_3 == "Select Limit") {
    buscar_limite_seleccionado();
    limites[id_seleccionado].classList.add("limite_seleccionado_mod");
    limites[id_seleccionado].classList.add("limite_seleccionado");
    active_limit = limites[id_seleccionado].textContent;
  }
});

btn_f2.addEventListener("click", () => {
  if (estado == "ON" && contenido_2 == "▼") {
    buscar_limite_seleccionado();

    if (id_seleccionado != 2) {
      limites[id_seleccionado + 1].classList.add("limite_seleccionado");
    } else {
      limites[0].classList.add("limite_seleccionado");
    }
  }
});

btn_f1.addEventListener("click", () => {
  if (estado == "ON" && contenido_1 == "▲") {
    buscar_limite_seleccionado();

    if (id_seleccionado - 1 == -1) {
      limites[2].classList.add("limite_seleccionado");
    } else {
      limites[id_seleccionado - 1].classList.add("limite_seleccionado");
    }
  } else if (estado == "ON" && contenido_1 == "Rate Timer") {
    actualizar_menu_derecha(menu_testing);
  } else if (estado == "ON" && contenido_1 == "Start Time") {
    testing_status.textContent = "WAITING:";
    testing_no.textContent = "";
    contar();
  }
});

function contar() {
  // Obtén el elemento span por su ID
  var countdownElement = document.getElementById("testing_time");

  // Establece la duración de la cuenta regresiva en segundos
  var duration = 60;

  // Función para actualizar la cuenta regresiva
  function updateCountdown() {
    // Calcula los minutos y segundos restantes
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;

    // Formatea el tiempo en "MM:SS"
    var timeString = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    // Actualiza el contenido del elemento span
    countdownElement.innerHTML = timeString;

    // Disminuye el tiempo restante en 1 segundo
    duration--;

    // Si el tiempo ha llegado a cero, detén la cuenta regresiva
    if (duration < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = ""; // Puedes personalizar el mensaje cuando la cuenta regresiva finalice
      pantalla_ALT.textContent = "4987";
      pantalla_ROC.textContent = "8";
      pantalla_CAS.textContent = "275.9";
      pantalla_RATE.textContent = "12.9";
      testing_status.textContent = "TIMED RATES AVAILABLE";
    }
  }

  // Llama a la función updateCountdown cada segundo
  var countdownInterval = setInterval(updateCountdown, 1000);
}

btn_enter.addEventListener("click", () => {
  if (estado == "ON" && pantalla_activa == "variable_menu") {
    if (variable == "ALT") {
      ALT = valor_variable.textContent;
      pantalla_variable.textContent = ALT;
      vistai_1.classList.remove("pantalla_apagada");
      vistai_2.classList.add("pantalla_apagada");
      vistai_3.classList.add("pantalla_apagada");
      actualizar_menu_derecha(menu_inicial);
      // console.log(ALT);
    } else if (variable == "CAS") {
      CAS = valor_variable.textContent;
      pantalla_variable.textContent = CAS;
      vistai_1.classList.remove("pantalla_apagada");
      vistai_2.classList.add("pantalla_apagada");
      vistai_3.classList.add("pantalla_apagada");
      actualizar_menu_derecha(menu_inicial);
      // console.log(CAS);
    } else if (variable == "MACH") {
      MACH = valor_variable.textContent;
      pantalla_variable.textContent = MACH;
      vistai_1.classList.remove("pantalla_apagada");
      vistai_2.classList.add("pantalla_apagada");
      vistai_3.classList.add("pantalla_apagada");
      actualizar_menu_derecha(menu_inicial);
      // console.log(MACH);
    } else if (variable == "ROC") {
      ROC = valor_variable.textContent;
      pantalla_variable.textContent = ROC;
      vistai_1.classList.remove("pantalla_apagada");
      vistai_2.classList.add("pantalla_apagada");
      vistai_3.classList.add("pantalla_apagada");
      actualizar_menu_derecha(menu_inicial);
      // console.log(ROC);
    } else if (variable == "RATE") {
      RATE = valor_variable.textContent;
      pantalla_variable.textContent = RATE;
      vistai_1.classList.remove("pantalla_apagada");
      vistai_2.classList.add("pantalla_apagada");
      vistai_3.classList.add("pantalla_apagada");
      actualizar_menu_derecha(menu_inicial);
      // console.log(RATE);
    }

    pantalla_ALT.textContent = ALT;
    pantalla_CAS.textContent = CAS;
    pantalla_ROC.textContent = ROC;
    pantalla_RATE.textContent = RATE;
  }
});

btn_delete.addEventListener("click", () => {
  if (estado == "ON" && pantalla_activa == "variable_menu") {
    valor_variable.textContent = "000";
  }
});

btn_clear.addEventListener("click", () => {
  if (estado == "ON") {
    vistai_1.classList.remove("pantalla_apagada");
    vistai_2.classList.add("pantalla_apagada");
    vistai_3.classList.add("pantalla_apagada");
    actualizar_menu_derecha(menu_inicial);
    testing_status.textContent = "Altitude Correction ";
    testing_no.textContent = "ft";
    testing_time = "0";
  }
});

let array_btns = [
  "btn_1",
  "btn_2",
  "btn_3",
  "btn_4",
  "btn_5",
  "btn_6",
  "btn_7",
  "btn_8",
  "btn_9",
  "btn_10",
  "btn_0",
  "btn_decimal",
];

document.getElementById(array_btns[0]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "1";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "1";
  }
});

document.getElementById(array_btns[1]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "2";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "2";
  }
});

document.getElementById(array_btns[2]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "3";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "3";
  }
});

document.getElementById(array_btns[3]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "4";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "4";
  }
});

document.getElementById(array_btns[4]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "5";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "5";
  }
});

document.getElementById(array_btns[5]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "6";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "6";
  }
});

document.getElementById(array_btns[6]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "7";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "7";
  }
});

document.getElementById(array_btns[7]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "8";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "8";
  }
});

document.getElementById(array_btns[8]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "9";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "9";
  }
});

document.getElementById(array_btns[10]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "0";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + "0";
  }
});

document.getElementById(array_btns[11]).addEventListener("click", () => {
  if (
    valor_variable.textContent == "000" &&
    pantalla_activa == "variable_menu"
  ) {
    valor_variable.textContent = "0";
  } else if (pantalla_activa == "variable_menu") {
    valor_variable.textContent = valor_variable.textContent + ".";
  }
});

function actualizar_menu_derecha(menu) {
  for (i = 0; i < menu.length; i++) {
    opciones_menu_derecha[i].textContent = menu[i];
  }

  contenido_1 = opciones_menu_derecha[0].textContent;
  contenido_2 = opciones_menu_derecha[1].textContent;
  contenido_3 = opciones_menu_derecha[2].textContent;
  contenido_4 = opciones_menu_derecha[3].textContent;
  contenido_5 = opciones_menu_derecha[4].textContent;
  contenido_6 = opciones_menu_derecha[5].textContent;
}

function buscar_limite_seleccionado() {
  //Funcion mover limite
  let limite_selec = document.querySelector(".limite_seleccionado");
  if (limite_selec.textContent == "CIVIL") {
    id_seleccionado = 2;
  } else if (limite_selec.textContent == "STANDARD") {
    id_seleccionado = 1;
  } else if (limite_selec.textContent == "MAX") {
    id_seleccionado = 0;
  }
  for (i = 0; i < limites.length; i++) {
    limites[i].classList.remove("limite_seleccionado");
    limites[i].classList.remove("limite_seleccionado_mod");
  }
}

// Codigo cuerdas
// Obtener el elemento canvas y su contexto
var canvas = document.getElementById("canvas_1");
var ctx = canvas.getContext("2d");
var objetos = [];
var objetoActual = null;
var inicioX = 0;
var inicioY = 0;

function actualizar_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var a = 0; a < objetos.length; a++) {
    ctx.fillStyle = objetos[a].color;
    ctx.fillRect(
      objetos[a].x,
      objetos[a].y,
      objetos[a].width,
      objetos[a].height
    );
  }
}

//Agregamos los objetos

window.onload = function () {
  objetos.push({
    x: 0,
    y: 0,
    width: 100,
    height: 200,
    color: "#f00",
  });

  objetos.push({
    x: 300,
    y: 150,
    width: 50,
    height: 100,
    color: "#00f",
  });

  actualizar_canvas();

  canvas.onmousedown = function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    for (var o = 0; o < objetos.length; o++) {
      if (objetos[o].x < x 
        && objetos[o].width + objetos[o].x > x
        && objetos[o].y < y
        && objetos[o].height + objetos[o].y > y) {
        objetoActual = objetos[o];
        inicioY = y - objetos[o].y;
        inicioX = x - objetos[o].x;
        break;
      }
    }
  };

  canvas.onmousemove = function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    if (objetoActual != null) {
      objetoActual.x = x - inicioX;
      objetoActual.y = y - inicioY;
      actualizar_canvas();
    }
  };

  canvas.onmouseup = function (event) {
    objetoActual = null;
  };
};

// // Definir las coordenadas de los dos puntos
/* // var x1 = 780; // Centro
/* // var y1 = 260; // Centro
// var x2 = 1080; // Esquina inferior derecha
// var y2 = 200; // Esquina inferior derecha

// // Dibujar los dos puntos como círculos rellenos
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(x1, y1, 20, 0, 2 * Math.PI); // Primer punto
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.arc(x2, y2, 5, 0, 2 * Math.PI); // Segundo punto
// ctx.fill();
// ctx.closePath();

// // Definir dos variables para indicar si se ha hecho clic en el primer o el segundo punto
// var clicked1 = false;
// var clicked2 = false;

// // Añadir un evento de clic al canvas
// canvas.addEventListener("click", function (event) {
//   // Obtener las coordenadas del clic dentro del canvas
//   var rect = canvas.getBoundingClientRect();
//   var x = event.clientX - rect.left;
//   var y = event.clientY - rect.top;

//   // Comprobar si el clic está dentro del primer punto
//   var distance1 = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
//   if (distance1 <= 10) {
//     // Cambiar el valor de la variable clicked1 a true
//     clicked1 = true;
//   }

//   // Comprobar si el clic está dentro del segundo punto
//   var distance2 = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
//   if (distance2 <= 5) {
//     // Cambiar el valor de la variable clicked2 a true
//     clicked2 = true;
//   }
// });

//Añadir un evento de movimiento del ratón al canvas
 canvas.addEventListener("mousemove", function (event) {
  Si se ha hecho clic en el primer punto y no en el segundo
   if (clicked1 && !clicked2) {
    // Obtener las coordenadas del ratón dentro del canvas
     var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
   var y = event.clientY - rect.top;

    Borrar el canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Dibujar los dos puntos de nuevo
     ctx.fillStyle = "red";
    ctx.beginPath();
   ctx.arc(x1, y1, 20, 0, 2 * Math.PI); // Primer punto
   ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x2, y2, 5, 0, 2 * Math.PI); // Segundo punto
    ctx.fill();
    ctx.closePath();

  Dibujar una línea desde el primer punto hasta el ratón
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Primer punto
  ctx.lineTo(x, y); // Ratón
  ctx.stroke();
  ctx.closePath();
 }
});
