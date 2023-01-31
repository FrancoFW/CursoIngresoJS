/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*
	Franco Gonzales
	Ejercicio 5
*/
function mostrar()
{	
	//Variable para guardar el nombre
	let nombre;

	//Variable para guardar la edad
	let edad;

	//Tranferir un valor del documento a la variable nombre
	nombre = document.getElementById("txtIdNombre").value

	//Tranferir un valor del documento a la variable edad
	edad = document.getElementById("txtIdEdad").value
	
	//Muestra un mensaje con los datos ingresados previamente
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

