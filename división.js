function division(a,b) {
    if(b==0) {
        return 'infinito';
    } else {
        return a/b;
    }
}
let resd = division(8,2);
console.log('El resultado de dividir 8 entre 2 es '+resd);
