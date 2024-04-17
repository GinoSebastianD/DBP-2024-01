function validarCampos() {
    var nombre = document.getElementById("cname").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var ocupacion = document.getElementById("ocupacion").value;
    var contacto = document.getElementById("contacto").value;
    var correo = document.getElementById("correo").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var nivel = document.getElementsByName("Nivel de Ingles")[0].value;
    var leng = document.getElementById("leng").value;
    var idioma = document.getElementById("idi").value;
    var aptitudes = document.getElementById("ap").value;
    var habilidad = document.getElementsByName("Habilidades")[0].value;
    var explab = document.getElementById("explab").value;
    var perfil = document.getElementById("perfil").value;

    if (nombre === '' || nacimiento === '' || ocupacion === '' || contacto === '' || 
    nacionalidad === '' || nivel === '' || leng === '' || idioma === '' || 
    aptitudes === '' || habilidad === '' || explab === '' || perfil === '' ||
     correo === '') {
        alert('Por favor complete todos los campos.');
        return false;
      } else {
        return true;
      }
      
}

function mostrarData() {


    if (!validarCampos()) {
        
        return;
    }

    event.preventDefault();


    const formulario = document.getElementById("formulario");
    const datos = new FormData(formulario);

    let datosllenos = "";
    for (const[key,value] of datos.entries()) {
        datosllenos += `${key}: ${value}\n\n`;
    }

    const datosDiv = document.getElementById("datosMostrados");
    formulario.style.display = "none";
    datosDiv.innerText = datosllenos;
    datosDiv.style.display = "block";
 
}