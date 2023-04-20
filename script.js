/* ┼┼┼ Solictiud de empleo ┼┼┼
    
Se le solicita al aspirante la construccion de un formulario con las siguientes caracteristicas

1. Nombre y apellidos
2. Aspiracion salarial
3. Correo electronico
4. Genero
5. Cargo a ocupar(entre los cargos disponibles van a tener: desarrollador, gerente de proyecto, lider administrativo, conductor, 
y otro en caso dado que se selecciona la opcion otro este debe de habilitar un nuveo campo que le permita al usuario escribir el cargo)
al dar click en boton guardar este debe de almacenar en un objeto tipo Json dentro de un lista [{}, {}] y deberá vaciar el formulario 
para un nuevo registro

Restricciones: Todo los campos deben de ser obligatorios, si el género es masculino el botón para subir la información debe de ser de color
azul si es femenino debe ser de color rosa.
*/

function cambiarColor() {
	let hombre = document.querySelector("#hombre").checked;
	let mujer = document.querySelector("#mujer").checked;
	console.log(hombre);
	if (hombre) {
		document.querySelector("#enviar").classList.remove("btn-default");
		document.querySelector("#enviar").classList.remove("btn-mujer");
		document.querySelector("#enviar").classList.add("btn-hombre");
	} else if (mujer) {
		document.querySelector("#enviar").classList.remove("btn-default");
		document.querySelector("#enviar").classList.remove("btn-hombre");
		document.querySelector("#enviar").classList.add("btn-mujer");
	}
}

function mostrarInput() {
	let opcion = document.querySelector("#cargo").value;
	if (opcion == "4") {
		document.querySelector("#customCargo").style.display = "block";
	} else {
		document.querySelector("#customCargo").style.display = "none";
	}
}

function registro(event) {
	let nombreApellido = document.querySelector("#nombreApellido").value;
	let aspiracionSalarial = document.querySelector("#aspiracionSalarial").value;
	let email = document.querySelector("#email").value;
	let hombre = document.querySelector("#hombre").checked;
	let mujer = document.querySelector("#mujer").checked;
	let cargo = document.querySelector("#cargo").value;
	let otro = document.querySelector("#customCargo").textContent;

	let aspirante = [];
	let bd = { nombreApellido: nombreApellido, 
        aspiracionSalarial: aspiracionSalarial, 
        email: email };

	if (hombre == true && cargo != "4" ) {
        hombre = "hombre";
		bd = {nombreApellido, aspiracionSalarial, email, hombre, cargo};
        

	} else if (mujer == true && cargo != "4") {
		mujer = "mujer";
		bd = {nombreApellido, aspiracionSalarial, email, mujer, cargo};
	} 

    console.log(bd)
    console.log(cargo + otro)

	// if ((otro = "Otro")) bd.push(otro);
}
