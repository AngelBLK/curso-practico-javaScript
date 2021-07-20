// media o promedio
const calcularPromedio = (lista) => {
    
    const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento);

    return sumaLista / lista.length;
    
}

const esPar = (numero) => {
    if(numero % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

// mediana
const calcularMediana = (listaDesordenada) => {
    let lista = listaDesordenada.sort((a, b) => a - b);
    const mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1],
        elemento2 = lista[mitadLista];
    
        return calcularPromedio([elemento1, elemento2]);
        
    }else {
        return lista[mitadLista];
    }
}

// moda

const calcularModa = (lista) =>{
    const lista1Count = {};

    lista.map((elemento) => {
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
        }  
    });

    //Convertir el objeto a unarray y ordenarlo
    const lista1Array = Object.entries(lista1Count).sort((valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]);

    return lista1Array[lista1Array.length - 1][0];
}




const promedio = () => {
    $input = document.getElementById("inputArray"),
    array = $input.value,
    result = document.querySelector(".result");
    
    //Convierte los elementos del arreglo a numeros enteros
    let arr = JSON.parse(`[${array}]`);
    
    result.innerHTML = `El promedio es: ${calcularPromedio(arr).toFixed(2)}`;
}

const mediana = () => {
    $input = document.getElementById("inputArray"),
    array = $input.value,
    result = document.querySelector(".result");
    
    //Convierte los elementos del arreglo a numeros enteros
    let arr = JSON.parse(`[${array}]`);
    
    result.innerHTML = `La mediana es: ${calcularMediana(arr)}`;
}

const moda = () => {
    $input = document.getElementById("inputArray"),
    array = $input.value,
    result = document.querySelector(".result");
    
    //Convierte los elementos del arreglo a numeros enteros
    let arr = JSON.parse(`[${array}]`);
    
    result.innerHTML = `La moda es: ${calcularModa(arr)}`;
}