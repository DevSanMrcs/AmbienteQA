/* console.log("Ingreso");
const loginButton = document.getElementById("btnLog");

loginButton.addEventListener("click", () => {
  // Prevent default form submission behavior (if applicable)

  // Log a message to the console
  console.log('HOLA');
}); */

const btnLogIn = document.getElementById('btnLog');
btnLogIn.addEventListener('click', validarRegistro);


function validarRegistro(event) {
  console.log("ingreso");
  event.preventDefault(); // Evita el envío del formulario

  const nombreUsuario = document.getElementById('nombre').value;
  const contrasena = document.getElementById('pass').value;

  // Validación de usuario y contraseña (reemplazar con tu lógica)
  if (nombreUsuario === 'bcastaneda' && contrasena === 'castaneda2024') {
    // Validación exitosa: mostrar mensaje o redirigir
    alert('¡Registro exitoso!');
    window.location.href = 'panel.html'; // Redirigir a panel.html
    // window.location.href = 'pagina-exito.html'; // Redirigir a otra página
  } else {
    // Validación fallida: mostrar mensaje de error
    alert('Usuario o contraseña incorrectos.');
  }
}
