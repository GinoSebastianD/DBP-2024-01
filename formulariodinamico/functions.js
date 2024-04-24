
function captura(){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var ocupacion = document.getElementById("ocupacion").value;
    var contacto = document.getElementById("contacto").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var lenguajes = document.getElementById("lenguajes").value;
    var aptitudes = document.getElementById("aptitudes").value;
    var habilidades = document.getElementById("habilidades").value;
    var perfil = document.getElementById("perfil").value;
    /*alert(nombre);*/
    console.log(nombre+'\n'+fecha+'\n'+ocupacion+'\n'+contacto+'\n'+nacionalidad+'\n'+lenguajes+'\n'+aptitudes+'\n'+habilidades+'\n'+perfil);
    
    // Unir los datos en una sola cadena de texto
    var datos = nombre + '\n' + fecha + '\n' + ocupacion + '\n' + contacto + '\n' + nacionalidad + '\n' + lenguajes + '\n' + aptitudes + '\n' + habilidades + '\n' + perfil;
    // Crear un objeto Blob con los datos en formato de texto
    var archivoBlob = new Blob([datos], {type: 'text/plain'});
    // Crear una URL de objeto temporal para descargar el archivo
    var urlDescarga = window.URL.createObjectURL(archivoBlob);
    
    // Crear un enlace de descarga y hacer clic en él
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = urlDescarga;
    enlaceDescarga.download = 'datos.txt';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    // Abrir la URL del archivo de texto en una nueva pestaña del navegador
    window.open(urlDescarga, '_blank');
    // Liberar la URL de objeto temporal
    window.URL.revokeObjectURL(urlDescarga);
}

