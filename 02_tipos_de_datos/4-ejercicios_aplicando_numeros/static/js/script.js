console.log("Conexión exitosa con js...");

//🔹 Ejercicio 1: Edad proyectada
//Declara tu edad actual y calcula:
//Tu edad en 5 años
//Tu edad hace 10 años
//Muestra ambos resultados en consola.

function edadProyectada(){
    let edad = 16;
alert(`Mi edad es: ${edad}
En 5 años tendré: ${edad + 5}
Hace 10 años tenía: ${edad - 10}`);
};
//🔹 Ejercicio 2: Compra con descuento
//Un producto cuesta $25.000 y tiene un descuento del 20%.
//Calcula el precio final
// Muestra el resultado

function compraDescuento(){
let precio = 25000;
alert(`el precio es de: ${precio}
    El descuento del 20% es: $${precio * 0.2}
    Pero con el descuento es de: ${precio - (precio * 0.20)}`);
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promediodeNotas(){
let nota1=4.5;
let nota2=6.7;
let nota3=5.8;
let promedio=(nota1 + nota2 + nota3) /3 ;
alert(`Se tiene 3 notas: ${nota1} , ${nota2} y ${nota3}
EL promedio de estas es: ${promedio.toFixed(2)}
Y redondeando seria ${Math.round(promedio)}`);
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
let temperatura = 15;
let aumentada = temperatura + 3;
let disminuida= temperatura - 5;
let resultado= temperatura + 3 - 5;
alert(`La temperatura actual es: ${temperatura}
La temperatura aumentada es: ${aumentada}
La temperatura disminuida es: ${disminuida}
El resultado de la temperatura es: ${resultado}`);
};


// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo(){
let valorHora = 8000;
let cantidadHora = 45;
let sueldo = valorHora * cantidadHora
let sueldoNuevo = valorHora * (cantidadHora + 5) ;
alert(`sueldo actual: $${sueldo}
sueldo nuevo con incremento: $${sueldoNuevo}`);
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function Operaciones(){
let numero1 = 1;
let numero2 = 4;
let resultado = numero1 / numero2;
alert(`La división es: ${numero1} / ${numero2}
el resultado es: ${numero1 / numero2}
Y el modulo es: ${(numero1 / numero2) * 100}%`);
};

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparaciondenumeros() {
    let a = 12;
    let b = 10;

    alert(` a es igual a: ${a} y b es igual a: ${b}
 ¿A es mayor que B? ${a > b}\n¿Alguno es 10? ${a === 10 || b === 10}`);
};

//🔹 Ejercicio 8: Notación científica aplicada
//Declara:
//Una población usando notación científica (ej: 1e6)
//Divide esa población en 4 grupos
//Muestra el resultado
function notacioncientifica() {

    let poblacion = 1e6;
    let grupo = poblacion / 4;

    alert(`Población total: ${poblacion}\n si lo dividimos en 4 grupos cada grupo será de: ${grupo}`);
}

//🔹 Ejercicio 9: Potencia y cálculo combinado
//Calcula:
//3 elevado a 4
//Luego multiplícalo por 2
//Resta 10 al resultado final

function potenciaycalculo() {
    let numero1 = 3;
    let numero2 = 4;
    let multi = 2;
    let resta = 10;
    let resultado = (3 ** 4) * 2 - 10;

    alert(`3 elevado a 4 multiplicado por 2 menos 10? 
        3 elevado a 4? ${ numero1 ** numero2} 
        por 2? ${numero1 ** numero2 * 2}
        menos 10? ${resultado}`);
}

//🔹 Ejercicio 10: Dado aleatorio 🎲
//Simula el lanzamiento de un dado:
//Genera un número entre 1 y 6
//Muestra el resultado
//Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoaleatorio() {
    let dado = Math.floor(Math.random() * 6) + 1;

    let resultado = dado >= 4 ? "Ganaste 🎉" : "Perdiste 😢";

    alert(`Número: ${dado}\n${resultado}`);
}