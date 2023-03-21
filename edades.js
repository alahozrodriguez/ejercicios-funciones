function edad(a) {
    if(a<12) {
        return 'niño';
    } else {
        if(12<=a && a<=18){
            return 'adolescente';
        } else {
            if(18<a && a<=60) {
                return 'adulto';
            } else {
                return 'mayor';
            }
        }
    }
}
let rese = edad(50);
console.log('Una persona de 50 años es '+rese);
