import { Componente_GENITORE } from "../Componente.js"
import { stile_elemento, btnTabella } from "../funzioni.js"
import { Colori } from "../stile/variabili.js"

/*
    &INFO: card <class="card-tabella">
    ? Forse gestire gli elementi della tabella con un array -> TABLE_ARRAY
    ! TROVARE COLORI
*/



export class workSpace extends Componente_GENITORE {
    constructor() {
        super("div", "workSpace")
        this.titoli = ["Aziende", "Utenti", "Documenti", "Tickets"]
        this.CARDS = this.TABELLA()
    }
    TABELLA() {
        //!Prova
        const column = 7, row = 10
        const CARDS = []
        //?const TABLE_ARRAY = []

        //*CARDS
        for (const nomeTitolo of this.titoli) {
            const card = document.createElement('div')
            stile_elemento({
                backgroundColor: Colori['elementi']['tabella'],
                padding: "10px",
                width: "90%",
                height: "85%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative"
            }, card)
            card.setAttribute("id", nomeTitolo)
            card.setAttribute('class', "card-tabella")

            //*TITOLO
            const titolo = document.createElement("h2")
            titolo.textContent = nomeTitolo

            //*TABLE
            const table = document.createElement("table")
            stile_elemento({
                width: "100%",
                height: "75%",
                overflow: "hidden"
            }, table)

            const stile_td_tr = {
                paddingLeft: "5px",
            }
            let count = 0
            for (let i = 0; i < row; i++) {
                const tr = document.createElement("tr")
                tr.classList.add("riga_")
                stile_elemento(stile_td_tr, tr)
                for (let ii = 0; ii < column; ii++) {
                    //*Tbody
                    if (count == 0) {
                        const tbody = document.createElement('tbody')
                        for (let iii = 0; iii < column; iii++) {
                            const td = document.createElement("td")
                            td.textContent = "campo"
                            tbody.append(td)
                        }
                        table.append(tbody)
                    }
                    //*tfoot
                    if (count == 0) {
                        const tfoot = document.createElement('tfoot')
                        const td = document.createElement('td')
                        td.textContent = "grande"
                        tfoot.append(td)
                        table.append(tfoot)
                    }
                    count = 1
                    const td = document.createElement('td')
                    td.textContent = `riga ${i}`
                    stile_elemento(stile_td_tr, td)
                    tr.append(td)
                }
                table.append(tr)
                //TABLE_ARRAY.push(tr)
            }


            //*Gestione Pagine (BTNs)
            const divBtns = document.createElement('div')
            stile_elemento({
                position: "absolute",
                bottom: "40px",
                right: "60px"
            }, divBtns)

            //!cerca colore
            const stile_btn = {
                padding: "7px",
                border: ".5px solid gray",
                cursor: "pointer"

            }
            const btnSuccessivo = document.createElement('button')
            btnSuccessivo.textContent = ">>"

            const btnAttuale = document.createElement('span')
            btnAttuale.textContent = "1"
            btnAttuale.style.backgroundColor = Colori['sidebar']
            btnAttuale.style.color = Colori['elementi']['tabella']

            const btnPrecedente = document.createElement('button')
            btnPrecedente.textContent = "<<"

            stile_elemento(stile_btn, [btnPrecedente, btnAttuale, btnSuccessivo], true)
            btnTabella(btnPrecedente, btnAttuale, btnSuccessivo)

            divBtns.append(btnPrecedente, btnAttuale, btnSuccessivo);
            card.append(titolo, table, divBtns);

            CARDS.push(card)
        }
        return CARDS
    }
    getCARDS() { return this.CARDS }

}

