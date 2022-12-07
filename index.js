console.log("Franco")
console.log("Leonardo")
console.log("Andrea")
console.log("Thomas")

// BUCLES
// ES UNA ESTRUCTURA QUE ME VA A PERMITIR REALIZAR UNA TAREA REPETITIVA
// va a tener una condicion ligada a sí mismo para evaluar si sigue iterando sobre un elemento

// FOR

for (let i = 0; i <= 10; ++i){
    console.log("Hola gente")

}
// 0 <= 10? true
// se ejecuta la instrucción
// SE SUMA 1 A LA VARIABLE
// i++ es igual a i = i + 1

// 1 <= 10? true
// se ejecuta la instrucción
// SE SUMA 1 A LA VARIABLE

//.
//.
//.
// 11 <= 10? FALSE --> ya no se ejecutan las sentencias del for y termina la iteración.


// while}
// también itera sobre elementos
// tiene el valor inicial fuera de un bloque, es decir tiene un scope global.

let valorInicial = 0

while (valorInicial <= 10){
    console.log(valorInicial);
    valorInicial++;
}

// do while
// siempre va a ejecutar la instruccion aunque sea una vez

let valorDoWhileInicial = 0
do{
    console.log("aunque sea una vez");
    valorDoWhileInicial++
}
while(valorDoWhileInicial <= 5)

// switch
// que evalúa casos comparando datos.
// si no usamos break, se ejecuta la sentencia posterior, sin importar que no cumpla con el caso.

const fruta = "naranja"

switch ( fruta ){
    case "banana":
        console.log("El kilo de banana está $300")
        break;
    case "naranja":
        console.log("El kilo de naranja está $100")
        break;
    default:
        console.log("Eso no es una fruta oops o no está en nuestra lista de productos")
        break;
}

// FOR que en vez de tener un valor inicial number, va a tener un string

//.length determina la longitud de una cadena

// .length devuelve un número

const nombreDelEstudiante = "Williams"

console.log(nombreDelEstudiante.length)

for(let i = 5; i <= nombreDelEstudiante.length; i++){
    console.log(i)
    console.log(nombreDelEstudiante[i])
} 


