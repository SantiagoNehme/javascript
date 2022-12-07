

// 2) crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "es una vocal" si letra es una vocal o "no es una vocal" si no lo es.

const letra = "A"

console.log(letra)

if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    console.log("Es una vocal")
}
else{
    console.log("No es una vocal")
}

//OTRA FORMA DE RESOLVER MÁS SENCILLO

//EXPRESIONES REGULARES
//una forma de definir caracteres con los cuales se puedan encontrar similitudes con cadena de caracteres.
//patrones que se usan para hacer coincidir combinaciones de cadenas de caracteres.
const expresionRegular = /[aeiouAEIOU]/ // --> NO ES UN STRING, ES UNA EXPRESIÓN REGULAR.

if(letra.match(expresionRegular)){
    console.log("Es una vocal")
}
else{
    console.log("No es una vocal")
}


// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o es "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

//EJEMPLIFICACION DE CASOS
// 3 // "Es impar"
// 10 // "Es par"

const numero = 150
if( numero % 2 === 0){
    console.log("Es par")
}else{
    console.log("Es impar")
}