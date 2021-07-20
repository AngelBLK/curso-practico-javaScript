//Helpers

const salariosMex = Mexico.map((persona) =>{
    return persona.salary;
});

const salariosMexSort = salariosMex.sort((salaryA, salaryB) => salaryA - salaryB);

const esPar = (numero) => {
    return (numero % 2 === 0);
}

// mediana
const medianaSalariosMex = (lista) => {

    const mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1],
        elemento2 = lista[mitadLista];
    
        return calcularPromedio([elemento1, elemento2]);
        
    }else {
        return lista[mitadLista];
    }
}

// media o promedio
const calcularPromedio = (lista) => {
    
    const sumaLista = lista.reduce((valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento);

    return sumaLista / lista.length;
    
}



const medianaGeneralMex = medianaSalariosMex(salariosMexSort);

// Mediana top 10
const spliceStart = (salariosMexSort.length * 90) / 100;
const splitCount = salariosMexSort.length - spliceStart;
const salariosMexTop10 = salariosMexSort.splice(spliceStart, splitCount);

const medianaTop10Mex = medianaSalariosMex(salariosMexTop10)

console.log({
    medianaGeneralMex,
    medianaTop10Mex
});

