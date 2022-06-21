function datos() {
  fetch("http://www.raydelto.org/agenda.php")
    .then(function (captura) {
      return captura.json();
    })
    .then(function (captura) {
      var Nombre = document.getElementById("nombre");
      var Apellido = document.getElementById("apellido");
      var Telefono = document.getElementById("telefono");
      Nombre.innerHTML = captura[0].nombre;
      Apellido.innerHTML = captura[0].apellido;
      Telefono.innerHTML = captura[0].telefono;
    });
}
