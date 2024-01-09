import { Componente_GENITORE } from "../../Componente.js"
import { Colori, gradezza_char } from "../../stile/variabili.js"
import { Animazione___E_nav } from "../../navbar/funcs.js"

import { creazioneTendina } from "./funcs.js"

import { stile_elemento, attivazioneTABELLA } from "../../funzioni.js"

//*per gestire tabelle
import { workSpace } from "../workSpace.js"
const CARDS = (new workSpace).getCARDS()


export class Sidebar extends Componente_GENITORE {
    constructor() {
        super("div", "sidebar")
        //*Set elementi sidebar
        this.CAMPI = {
            MyCompany: ["Azienda", "Colleghi", "Documenti"],

            //Aziende: true,
            //Utenti: true,
            //Documenti: true,
            //Ticktes: true,

            Partner: false,
            Logout: true
        }
        this.elementi()
    }
    elementi() {

        //& TITOLO SIDEBAR
        const nomeAzienda = document.createElement("div")
        stile_elemento({
            margin: "0px",
            borderBottom: "3px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px 0px 10px 0px",
            cursor: "default"
        }, nomeAzienda)

        const titolo = document.createElement("span")
        titolo.textContent = "myAzienda"
        stile_elemento({
            fontSize: gradezza_char['titoli'],
            color: Colori['fontColor']['titoli'],
            margin: "2.8rem"
        }, titolo)

        nomeAzienda.append(titolo)



        //& CAMPI SIDEBAR
        const div = document.createElement("div")
        stile_elemento({
            margin: "opx",
            padding: "0px 10px",
            display: "flex",
            flexDirection: "column"
        }, div)

        Object.entries(this.CAMPI).forEach(([k, v]) => {
            if (v) {
                const img = document.createElement('img')
                img.alt = " "

                const campo = document.createElement('span')
                stile_elemento({
                    color: Colori['fontColor']['base'],
                    fontSize: gradezza_char['campi'],
                    pointerEvents: "none"
                }, campo)
                campo.textContent = k

                const elemento = document.createElement('span')
                stile_elemento({
                    margin: "1.3rem 0rem",
                    cursor: "pointer",
                    padding: ".6rem",
                    borderRadius: "3px"
                }, elemento)
                elemento.classList.add("elementi_evento")

                new Array(img, campo).forEach(e => elemento.append(e))


                //*menu a tendina
                if (Array.isArray(v)) {
                    elemento.addEventListener('click', () => {
                        creazioneTendina(elemento, v)
                    })
                }

                //*ANIMAZIONE MOUSEOVER 
                const [IN, OUT] = Animazione___E_nav(elemento)
                elemento.addEventListener('mouseover', () => { IN(elemento) })
                elemento.addEventListener('mouseout', () => { OUT(img) })

                //*GESTIONE TABELLE
                for (const titoloTabella of CARDS) {
                    campo.textContent == titoloTabella.getAttribute('id')
                        ? attivazioneTABELLA(elemento, titoloTabella)
                        : null
                }
                div.append(elemento)
            }
        })


        //*SCHERMO
        new Array(nomeAzienda, div).forEach(e => this.elemento.append(e))
        return this
    }
}







