import { arGerasSarasas, arGerasNum } from '../validacijos/validation.js';
function Summ(skaiciuSarasas) {
    //input VALIDATION
    if (!arGerasSarasas(skaiciuSarasas)) { // Tikrina ar prasmingas sarasas
        return false;
    }
    //logic
    let suma = 0;
    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];
        if (typeof skaicius !== 'number') { //TIKRINAM AR SKAICIUS
            console.log('WARNING: Skaiciu sarase rasta ne skaiciaus tipo reiksme.');
            continue;
        }
        suma += skaicius;
    }
    if (!arGerasNum(suma, 'sumos rezultatas')) {
        return false;
    }
    return suma;
}
export { Summ }