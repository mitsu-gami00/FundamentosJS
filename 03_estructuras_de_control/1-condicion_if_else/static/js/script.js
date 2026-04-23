console.log("conexion esxitosa con JS")

/*
=============================
¿que es una condición en JS?
=============================
Una condición nos permite tomar decisiones en el código. separando dos caminos, el si(if) y el no(else).

Estructura básica:(Sintaxis --> Reglas del lenguaje de programación)

if (condición) {
   //código que se ejecuta si la condición es verdadera. 
}
else {
    //código que se ejecuta si la condición no se cumple
}
    */

//Ejemplo 1: Numérico
let edad = 18;
if (edad >= 18) { //condición si la edad es mayor o igual que 18
 console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;
if (temperatura > 20){//condición si
    console.log("hace calor")
} else {//condición no
    console.log("hace frío")
}

//Ejemplo 3: IF - ELSE IF - ELSE (multiples condiciones)
let nota = 5.5;
if(nota >= 6.0){//primera condición
    console.log("Exelente!");
} else if (nota >= 4.0){//segunda condición
    console.log("Aprobado")
} else {//Valor si no se cumple lo anterior
    console.log("Reprobado")
}

//Ejemplo 4: Condiciones con STRING
let nombre = "Chris"
//Comparación exacta (===)
if (nombre === "Chris"){
    console.log("Hola " + nombre)
} else {
    console.log("No te conozco perdedor")
}

/*
OPERADORES DE COMPARACIÓN

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
//Ejemplo de distinto
let num = 10;
let num2 = 5;
if(num !== num2){
    console.log('el número: ${num} es distinto que ${num2}');
} else{
    console.log("son iguales")
}