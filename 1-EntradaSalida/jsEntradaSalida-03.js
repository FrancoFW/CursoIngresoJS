/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/*
	Ejercicio 3
	Franco Gonzales
*/

function mostrar()
{
	//Variable para guardar datos
	var nombreIngresado; 

	//Asignar el valor colocado en el documento a la variable
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//Muestra el valor de la variable
	alert(nombreIngresado);

}


