/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

/*
	Ejercicio 4
	Franco Gonzales
*/

function mostrar()
{
	//Variable para guardar datos
	let nombre;

	//Pedir un dato al usuario para almacenarlo en la variable
	nombre = prompt("Inserta tu nombre");

	//Modificamos el Id.Value por el dato ingresado por el usuario
	document.getElementById("txtIdNombre").value = nombre;

}

