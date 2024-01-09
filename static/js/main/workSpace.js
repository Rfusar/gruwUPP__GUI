import { Componente_GENITORE } from "../Componente.js"

export class workSpace extends Componente_GENITORE {
    constructor() {
        super("div", "workSpace")
        this.titoli = ["Aziende", "Utenti", "Documenti", "Tickets"]
        this.CARDS = this.TABELLA()
    }
    TABELLA() {
        //*PROVA
        const column = 5, row = 2
        const CARDS = []
        for (const nomeTitolo of this.titoli) {
            const card = document.createElement('div')
            card.setAttribute("schermo", false)
            card.setAttribute("id", nomeTitolo)

            const table = document.createElement("table")

            const titolo = document.createElement("h2")
            titolo.textContent = nomeTitolo

            for (let i = 0; i < row; i++) {
                const tr = document.createElement("tr")
                for (let ii = 0; ii < column; ii++) {
                    const td = document.createElement('td')
                    td.textContent = `riga ${i}`
                    tr.append(td)
                }
                table.append(tr)
            }
            new Array(titolo, table).forEach(e => card.append(e))
            CARDS.push(card)
        }
        window.addEventListener('change', () => {
            for (const card of CARDS) {
                if (card.getAttribute("schermo")) {
                    this.elemento.append(card)
                }
            }
        })
        return CARDS
    }

    getCARDS() { return this.CARDS }

}

