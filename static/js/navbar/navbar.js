import { Componente_GENITORE } from "../Componente.js"
import { Animazione___E_nav } from "./funcs.js"
import { Colori, gradezza_char } from "../stile/variabili.js"
import { stile_elemento } from "../funzioni.js"


export class Navbar extends Componente_GENITORE {
    constructor() {
        super('nav')
        this.campi = {
            home: false,
            contatti: true
        }
    }
    elementi() {
        //*RICERCA
        const search = document.createElement('input')
        search.type = "text"
        search.placeholder = "Cerca..."
        stile_elemento({
            border: "none",
            borderBottom: "3px solid red",
            height: "30px",
            outline: "none",
            borderRadius:"5px",
            width: "20rem"
        }, search)

        //*CAMPI
        const div = document.createElement("div")
        Object.entries(this.campi).forEach(([k, v]) => {
            if (v) {
                const span = document.createElement('span');
                stile_elemento({
                    color: Colori['fontColor']['campi'],
                    fontSize: gradezza_char['campi'],
                    cursor: "pointer",
                    padding: "4px",
                    marginLeft:"20px",
                    borderRadius: "3px"
                }, span)
                //@ANIMAZIONI 
                const [IN, OUT] = Animazione___E_nav(span)
                span.addEventListener('mouseover', () => { IN(span) })
                span.addEventListener('mouseout', () => { OUT(span) })
                span.classList.add("elementi_evento")

                span.textContent = k.toLocaleUpperCase();
                div.append(span);
            }
        })

        new Array(search, div).forEach(e=>this.elemento.append(e))
        return this
    }
}