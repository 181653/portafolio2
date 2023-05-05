function generarRFC() {
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const ano = document.getElementById("ano").value.slice(-2);
    const mes = document.getElementById("mes").value;
    const dia = document.getElementById("dia").value;

    const rfc = apellidoPaterno.slice(0,2) + apellidoMaterno.slice(0,1) + nombre.slice(0,1) + ano + mes + dia;

    document.getElementById("rfc").innerHTML = `Su RFC es: ${rfc.toUpperCase()}`;
}
