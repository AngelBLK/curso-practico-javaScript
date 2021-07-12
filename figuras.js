//codifo del cuadrado

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => Math.pow(lado, 2);

//codifo del Triangulo

const perimetroTrinagulo = (lados, base) => lados + lados + base;
const alturaTriangulo = (lados, base)  => Math.sqrt(((Math.pow(lados, 2))-(Math.pow((base / 2),2))));
const areaTriangulo = (lados, base) =>  (base * alturaTriangulo(lados, base)) / 2;

//codifo del Circulo

const diametro = (radio) => radio * 2; 
const perimetroCirculo = (radio) => diametro(radio) * Math.PI;
const areaCirculo = (radio) => Math.PI * Math.pow(radio, 2);

// Aquí interactuamos con el html.

// Parte del cuadrado.
const calcularPerimetroCuadrado = () => {
    const $input = document.getElementById("inputCuadrado"),
    value = $input.value,
    $resultado = document.querySelector(".container__form-cuadrado");

    $resultado.innerHTML = `<p> El perimetro del cuadrado es: ${perimetroCuadrado(value)} </p>`;
}

const calcularAreaCuadrado = () => {
    const $input = document.getElementById("inputCuadrado"),
    value = $input.value,
    $resultado = document.querySelector(".container__form-cuadrado");

    $resultado.innerHTML = `<p> El área del cuadrado es: ${areaCuadrado(value)} </p>`
}

// Parte del circulo.

const calcularPerimetroCirculo = () => {
    const $input = document.getElementById("inputCirculo"),
    value = $input.value,
    $resultado = document.querySelector(".container__form-circulo");

    $resultado.innerHTML = `<p> El perimetro del cuadrado es: ${perimetroCirculo(value).toFixed(2)} </p>`;
}

const calcularAreaCirculo = () => {
    const $input = document.getElementById("inputCirculo"),
    value = $input.value,
    $resultado = document.querySelector(".container__form-circulo");

    $resultado.innerHTML = `<p> El área del cuadrado es: ${areaCirculo(value).toFixed(2)} </p>`
}

const calcularDiametroCirculo = () => {
    const $input = document.getElementById("inputCirculo"),
    value = $input.value,
    $resultado = document.querySelector(".container__form-circulo");

    $resultado.innerHTML = `<p> El área del cuadrado es: ${diametro(value).toFixed(2)} </p>`
}

// Parte del Triangulo.

const calcularPerimetroTriangulo = () => {
    const $input = document.getElementById("inputTriangulo"),
    $base = document.getElementById("inputBase"),
    value = parseInt($input.value),
    base = parseInt($base.value),
    $resultado = document.querySelector(".container__form-triangulo");

}

const calcularAreaTriangulo = () => {
    const $input = document.getElementById("inputTriangulo"),
    $base = document.getElementById("inputBase"),
    value = parseInt($input.value),
    base = parseInt($base.value),
    $resultado = document.querySelector(".container__form-triangulo");

    $resultado.innerHTML = `<p> El área del cuadrado es: ${areaTriangulo(value, base).toFixed(2)} </p>`
}

const calcularAlturaTriangulo = () => {
    const $input = document.getElementById("inputTriangulo"),
    $base = document.getElementById("inputBase"),
    value = parseInt($input.value),
    base = parseInt($base.value),
    $resultado = document.querySelector(".container__form-triangulo");

    $resultado.innerHTML = `<p> El área del cuadrado es: ${alturaTriangulo(value, base).toFixed(2)} </p>`
}


const alturaTriangulo = (lados, base)  => Math.sqrt(((Math.pow(lados, 2))-(Math.pow((base / 2),2))));

const validarTrianguloIsosceles = (ladoA, ladoB, base) =>{

    if((ladoA === ladoB) && ladoA  !== base) return console.log(`Es un trinagulo isósceles y su altura es: ${alturaTriangulo(ladoA, base).toFixed(2)}`);

    return console.log("No es un trinagullo Isósceles");
}

validarTrianguloIsosceles(6, 6, 8);
