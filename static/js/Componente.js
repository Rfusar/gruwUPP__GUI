export class Componente_GENITORE {
    constructor(elemento, ID = false) {
        this.elemento = document.createElement(elemento)
        if (ID) { this.elemento.setAttribute("id", ID) }
    }
    Style(stile) {
        Object.entries(stile)
            .forEach(([k, v]) => this.elemento.style[k] = v)
        return this
    }
    schermo(n, main = false) {
        main=="main"
            ?document.getElementsByTagName('main')[0].insertBefore(this.elemento, document.getElementsByTagName('main')[0][n])
            :document.body.insertBefore(this.elemento, document.body.children[n])
    }
}






