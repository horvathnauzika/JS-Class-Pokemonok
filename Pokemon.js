export default class Pokemon{
/** privát adattagok */
    #nev=""
    #kep=""
    #mondat=""

    constructor(nev, kep, mondat, szuloElem){
        /* ez hívódik meg a példányosításkor */
        /* beállítja az adattagokat */
        /* this mindig az aktuális osztálypéldányra fog mutatni */
        this.#nev=nev;
        this.#kep=kep;
        this.#mondat=mondat; /** privát */
        this.szuloElem=szuloElem; /** publikus */
        this.#htmlMegjelenit()
    }

    get nev(){
        return this.#nev
    }

    set mondat(szoveg){
        this.#mondat = szoveg
    }

    beszel(){
        console.log(this.#mondat)
    }

    #htmlOsszeallit(){
        let txt = `
            <div class="poki">
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt="${this.#nev} pokemon">
            </div>
        `
        return txt;
    }

    #htmlMegjelenit(){
        this.szuloElem.append(this.#htmlOsszeallit());
    }
}