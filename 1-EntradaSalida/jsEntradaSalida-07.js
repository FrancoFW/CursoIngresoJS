/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
/*
	Franco Gonzales	
	Ejercicio 7
*/

//Declaramos variables para guardar datos
let NumeroUno;
let NumeroDos;

/*
	Funciones de Suma, Resta, Multiplicacion y Division
	Agarra los valores asignados en las variables
	y realiza las distintas ecuaciones segun lo pedido
*/
function sumar()
{	
	NumeroUno = document.getElementById("txtIdNumeroUno").value
	NumeroDos = document.getElementById("txtIdNumeroDos").value

	alert(NumeroUno + NumeroDos)
}

function restar()
{
	NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value)
	NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value)

	alert(NumeroUno - NumeroDos)
}

function multiplicar()
{ 
	NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value)
	NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value)

	alert(NumeroUno * NumeroDos) 
}

function dividir()
{
	NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value)
	NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value)

	alert(NumeroUno / NumeroDos)
}

