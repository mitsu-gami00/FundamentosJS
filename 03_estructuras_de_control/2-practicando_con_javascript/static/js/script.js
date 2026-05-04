console.log ("conexión exitosa")

function saludoPersonalizado(){
    let Nombre = "Chris";
alert(`Bienvenido ${Nombre}`);
}

function sumaDosNumeros(){
let num1 = 10;
let num2 = 5;
alert(`El resultado de la suma entre ${num1} y ${num2} es de ${(num1 + num2)}`);
};


function restaDosNumeros(){
let num1=18;
let num2=6;
alert(`El resultado de la resta entre ${num1} y ${num2} es de ${(num1 - num2)} `);
};

function multiplicación(){
let num1=8;
let num2=3;
alert(`El resultado de la multiplicación entre ${num1} y ${num2} es de ${(num1 * num2)} `);
};

function promediodeNotas(){
let nota1=4.5;
let nota2=6.6;
let nota3=6.3;
let promedio=(nota1 + nota2 + nota3) /3 ;
alert(`Se tiene 3 notas: ${nota1} , ${nota2} y ${nota3}
EL promedio de estas es: ${promedio.toFixed(2)}`);
};

function mayordeEdad(){
let edad = 18;
if (edad >= 18)
 console.log("Eres mayor de edad");
}

function ParImpar() {
    let numero = 21;
    if (numero % 2 === 0) {
        alert("El numero es par")
    } else {
        alert("El numero es impar")
    }

}

function Aprobado() {
    let nota = 6.7;

    if (nota > 4.0) {
        alert(`La nota es: ${nota}\nEstudiante aprobado`);
    } else {
        alert(`La nota es: ${nota}\nEstudiante reprobado`);
    }
}

function descuento() {
    let precio = 20000;
    let descuento = precio * 0.1;
    let precioFinal = precio - descuento;

    alert(`Precio final con descuento: $${precioFinal}`);
}

function mayorMenor() {
    let num1 = 10;
    let num2 = 5;

    if (num1 > num2) {
        alert(`El número mayor es: ${num1}`);
    } else {
        alert(`El número mayor es: ${num2}`);
    }
}