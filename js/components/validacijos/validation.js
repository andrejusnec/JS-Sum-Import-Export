function arGerasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.log("ERROR: Duotas ne sarasas!");
        return false;
    }
    if (sarasas.length === 0) {
        console.log("ERROR: Sarasas tuscias!");
        return false;
    }
    return true;
}
function arGerasNum(numberis, tikrinamoObjektoPav) {
    if(typeof tikrinamoObjektoPav !== 'string') {
        console.log("HEY! Duok normalu tikrinamo objekto pavadinima!")
        tikrinamoObjektoPav = 'reiksme/objektas';
    }
    if (typeof numberis !== 'number') {
        console.log(`ERROR: Gautas ${tikrinamoObjektoPav} nera skaiciaus tipo!`);
        return false;
    }
    if (!isFinite(numberis)) { //isFinite priciumpa begalybes ir NaN
        console.log(`ERROR: Gautas ${tikrinamoObjektoPav} nera tikras skaicius!`);
        return false;
    }
    return true;

}
export { arGerasSarasas, arGerasNum }