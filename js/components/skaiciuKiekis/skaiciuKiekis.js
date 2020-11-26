import { arGerasSarasas, arGerasNum } from '../validacijos/validation.js';
function skaiciusKiekis(skaiciuSarasas) {
    if (!arGerasSarasas(skaiciuSarasas)) {
        return false;
    }
    let kiekis = 0;
    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const sarasoNum = skaiciuSarasas[i]
        if (typeof sarasoNum !== 'number') {
            continue;
        }
        kiekis++
    }

    if (!arGerasNum(kiekis, 'kiekio rezultatas')) {
        return false;
    }
    return kiekis;
}
export { skaiciusKiekis }