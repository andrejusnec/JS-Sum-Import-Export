import { Summ } from '../sumavimas/sumavimas.js';
import { skaiciusKiekis } from '../skaiciuKiekis/skaiciuKiekis.js';
import { arGerasSarasas, arGerasNum } from '../validacijos/validation.js';
//input validation 
function vidurkis(skaiciuSarasas) {
    //input validation
    if (!arGerasSarasas(skaiciuSarasas)) {
        return false;
    }
    //LOGIC
    const suma = Summ(skaiciuSarasas)
    const kiekis = skaiciusKiekis(skaiciuSarasas);
    //OUTPUT VALIDATION
    const vid = suma / kiekis
    if (!arGerasNum(vid, 'vidurkio rezultatas')) {
        return false;
    }

    return vid;
}
export { vidurkis }