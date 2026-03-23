function cambiarMensaje() {
  const mensaje = document.getElementById("mensaje");

  if (mensaje.textContent === "Hola Mundo") {
    mensaje.textContent = "¡Bienvenido a JavaScript!";
  } else {
    mensaje.textContent = "Hola Mundo";
  }

  mensaje.classList.toggle("animado");
}