//! Tarea 1 - con declarativa o anonima

/*
Hacer una función que calcule un descuento sobre un PRECIO
*/

//let precio = parseFloat(prompt('Ingrese el precio del producto: '));

// const descuento = (precio) => precio * 0.75;

// console.log(`el precio tiene ${precio} con un descuento del 25% quedaria en: ${descuento(precio)}`);


//! Tarea 2 - con arrow
/*
Calculadora, sólo de suma, resta, multiplicacion y division
*/

//? Esta es la forma que lo resolvi yo pero sin correxión del chatgpt

/*
const calculadora = (num1, num2) =>{

    if(isNaN(num1) || isNaN(num2)){
        console.warn('Ingrese datos validos porfavor');
        
    }else{
        let apagarCalculadora = true;
        while(apagarCalculadora == true){
            let operacion = prompt('¿Que operación aritmeticas quiere realizar\n - Sumar \n - Restar \n - Multiplicar \n - Dividir').toLowerCase();
            switch (operacion) {
                case 'sumar':
                    console.log('Suma');
                    console.log(`${num1} + ${num2} = ${num1 + num2}`);
                    
                    break;
            
                case 'restar':
                    console.log('Resta');
                    console.log(`${num1} - ${num2} = ${num1 - num2}`);
                    
                    break;
            
                case 'multiplicar':
                    console.log('Multiplicar');
                    console.log(`${num1} * ${num2} = ${num1 * num2}`);
                    break;
            
                case 'dividir':
                    console.log('Division');
                    if(num2 !== 0){
                        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    
                    }else{
                        console.warn('No se puede dividir por 0');
                    }
                    break;
            
                default:
                    console.log('Ingreso mal la operación a realizar');
                    
                    break;
            }
            apagarCalculadora = confirm('Quiere Intentar de nuevo')
        }
    }

}

calculadora(2, 4)``
*/

//? chatgpt corrige mi codigo

/*
const calculadora = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        console.warn('Ingrese datos válidos, por favor');
        return; // Salir de la función si los datos no son válidos
    }

    let apagarCalculadora = true;
    while (apagarCalculadora) {
        let operacion = prompt('¿Qué operación aritmética quiere realizar?\n- Sumar\n- Restar\n- Multiplicar\n- Dividir').toLowerCase();

        switch (operacion) {
            case 'sumar':
                console.log('Suma');
                console.log(`${num1} + ${num2} = ${num1 + num2}`);
                break;

            case 'restar':
                console.log('Resta');
                console.log(`${num1} - ${num2} = ${num1 - num2}`);
                break;

            case 'multiplicar':
                console.log('Multiplicación');
                console.log(`${num1} * ${num2} = ${num1 * num2}`);
                break;

            case 'dividir':
                console.log('División');
                if (num2 !== 0) {
                    console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
                } else {
                    console.warn('No se puede dividir por 0');
                }
                break;

            default:
                console.log('Operación no válida. Intente de nuevo.');
                continue; // Evita que pregunte si desea intentar de nuevo
        }

        apagarCalculadora = confirm('¿Desea realizar otra operación?');
    }

    console.log("Gracias por usar la calculadora. ¡Hasta luego!");
};

calculadora(2, 4);
*/

//! Esta es la fomra de chatgpt sin corregir mi codigo:

// Definición de las operaciones con arrow functions
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

// Función principal de la calculadora
const calculadora = (operacion, a, b) => {
  switch (operacion) {
    case "suma":
      return suma(a, b);
    case "resta":
      return resta(a, b);
    case "multiplicacion":
      return multiplicacion(a, b);
    case "division":
      return division(a, b);
    default:
      return "Operación no válida";
  }
};

// Ejemplos de uso
console.log(calculadora("suma", 5, 3)); // 8
console.log(calculadora("resta", 10, 4)); // 6
console.log(calculadora("multiplicacion", 7, 2)); // 14
console.log(calculadora("division", 8, 2)); // 4
console.log(calculadora("division", 5, 0)); // "Error: División por cero"
console.log(calculadora("potencia", 2, 3)); // "Operación no válida"