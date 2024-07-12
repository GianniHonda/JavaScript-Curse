let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // percurso para exibição no vetor*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // forma mais simples de fazer o mesmo que o de cima