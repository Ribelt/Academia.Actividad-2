function prueba2(){
    document.querySelector("input[class=agregar]").addEventListener("click",function(e){
        // cancelamos el evento submit
        e.preventDefault();

        var cert=document.querySelector("input[name=cert]");
        var nombre=document.querySelector("input[name=nombre]");
        var apellido=document.querySelector("input[name=apellido]");
        var email=document.querySelector("input[name=email]");
        var tel=document.querySelector("input[name=tel]");

        if(!nombre.value)
        {
            nombre.classList.add("error");
            return;
        }
        nombre.classList.remove("error");

        if(!apellido.value)
        {
            apellido.classList.add("error");
            return;
        }
        apellido.classList.remove("error");

        if(!cert.value)
        {
            cert.classList.add("error");
            return;
        }
        cert.classList.remove("error");

        if(!email.value)
        {
            email.classList.add("error");
            return;
        }
        email.classList.remove("error");

        if(!tel.value)
        {
            tel.classList.add("error");
            return;
        }
        tel.classList.remove("error");
     

var tr=document.createElement("tr");

var tdCert=document.createElement("td");
txt=document.createTextNode(cert.value);
tdCert.appendChild(txt);
tdCert.className="cert";

var tdNombre=document.createElement("td");
var txt=document.createTextNode(nombre.value);
tdNombre.appendChild(txt);
tdNombre.className="nombre";

var tdApellido=document.createElement("td");
txt=document.createTextNode(apellido.value);
tdApellido.appendChild(txt);
tdApellido.className="apellido";

var tdEmail=document.createElement("td");
txt=document.createTextNode(email.value);
tdEmail.appendChild(txt);
tdEmail.className="email";

var tdTel=document.createElement("td");
txt=document.createTextNode(tel.value);
tdTel.appendChild(txt);
tdTel.className="tel";

var tdRemove=document.createElement("td");
var buttonRemove=document.createElement("input")
buttonRemove.type="button";
buttonRemove.value="Eliminar";
buttonRemove.onclick=function () {
    // elimina la columna
    this.parentElement.parentElement.remove();

    // Si no hay ningun alumno, escondemos la tabla
    if(document.getElementById("listado").querySelector("tbody").querySelectorAll("tr").length==0)
    {
        document.getElementById("listado").classList.add("hide");
    }
};
tdRemove.appendChild(buttonRemove);

tr.appendChild(tdCert);
tr.appendChild(tdNombre);
tr.appendChild(tdApellido);
tr.appendChild(tdEmail);
tr.appendChild(tdTel);
tr.appendChild(tdRemove);
var tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);

// eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno
document.getElementById("listado").classList.remove("hide");

//limpiamos los valores del input
apellido.value="";
nombre.value="";
cert.value="";
email.value="";
tel.value="";
nombre.focus();
});
}
