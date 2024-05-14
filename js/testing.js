// // Definir las coordenadas de los dos puntos
// var x1 = 780; // Centro
// var y1 = 260; // Centro
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

// // Añadir un evento de movimiento del ratón al canvas
// canvas.addEventListener("mousemove", function (event) {
//   // Si se ha hecho clic en el primer punto y no en el segundo
//   if (clicked1 && !clicked2) {
//     // Obtener las coordenadas del ratón dentro del canvas
//     var rect = canvas.getBoundingClientRect();
//     var x = event.clientX - rect.left;
//     var y = event.clientY - rect.top;

//     // Borrar el canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Dibujar los dos puntos de nuevo
//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(x1, y1, 20, 0, 2 * Math.PI); // Primer punto
//     ctx.fill();
//     ctx.closePath();
//     ctx.beginPath();
//     ctx.arc(x2, y2, 5, 0, 2 * Math.PI); // Segundo punto
//     ctx.fill();
//     ctx.closePath();

//     // Dibujar una línea desde el primer punto hasta el ratón
//     ctx.strokeStyle = "blue";
//     ctx.beginPath();
//     ctx.moveTo(x1, y1); // Primer punto
//     ctx.lineTo(x, y); // Ratón
//     ctx.stroke();
//     ctx.closePath();
//   }
// });

// function actualizar_tamano_canvas() {
//   var contenedor_dos = document.querySelector(".simulador");

//   // Obtener las dimensiones del contenedor
//   var contenedorAncho = contenedor_dos.clientWidth;
//   var contenedorAlto = contenedor_dos.clientHeight;

//   // Establecer el tamaño del canvas para que coincida con el tamaño del contenedor
//   canvas.width = contenedorAncho;
//   canvas.height = contenedorAlto;
// }