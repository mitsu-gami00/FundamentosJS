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
let nota2=6.7;
let nota3=5.8;
let promedio=(nota1 + nota2 + nota3) /3 ;
alert(`Se tiene 3 notas: ${nota1} , ${nota2} y ${nota3}
EL promedio de estas es: ${promedio.toFixed(2)}
Y redondeando seria ${Math.round(promedio)}`);
};

function mayordeEdad(){
let edad = 18;
if (edad >= 18)
 console.log("Eres mayor de edad");
}
