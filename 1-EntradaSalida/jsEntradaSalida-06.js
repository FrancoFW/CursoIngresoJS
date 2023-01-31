/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Variable para guardar el numero 1
	let numero1;
	
	//Variable para guardar el numero 1
	let numero2;

	//Asignamos un valor a la variable tomandolo del documento y transformandolo en un valor entero
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	//Asignamos un valor a la variable tomandolo del documento y transformandolo en un valor entero
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//Muestra el resultado de la suma de ambas variables
	alert(numero1 + numero2);
}

