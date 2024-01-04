function checkLINK(element, testo, path, array, document) {
    if (element.nodeName.toLowerCase() === 'a') {

        element.textContent = testo;
        //SOTTOMENU
        if (path != null) { element.setAttribute("href", path) }
        else {
            element.setAttribute("value", "sottomenu")
            element.style.cursor = "default"
        }
        const STYLE_element = element.style
        STYLE_element.color = "white"
        STYLE_element.textDecoration = "none"
        STYLE_element.marginTop = "23px"
        STYLE_element.fontSize = "30px"

        element.addEventListener('mouseover', () => { STYLE_element.color = "red" })
        element.addEventListener('mouseout', () => { STYLE_element.color = "white" })

        array.push(element)
    }
    //*FUTURO SEARCH-INPUT 
    else if (element.nodeName.toLowerCase() === 'input') {
        Object.entries({
            "border": "none",
            "marginLeft": ".8rem",
            "backgroundColor": "rgba(250, 250, 250, 0.7)",
            "borderBottom": "2px solid blue",
            "outline": "none",
            "marginTop": "1rem",
            "height": "25px",
            "fontSize": "18px"
        }).forEach(([k, v]) => { element.style[k] = v })
        element.placeholder = "Cerca..."

        array.push(element)

        barraDiRicerca(element, document)

    }

}
function Sottomenu(Posizione, id, links, document, check) {
    if (check == 1) {
        const sottomenu = document.createElement('div')
        sottomenu.setAttribute('id', id)
        sottomenu.setAttribute("class", "menu")
        sottomenu.classList.add("sottomenuAnimazione")
        Object.entries({
            "display": "flex",
            "flexDirection": "column",
            "position": "absolute",
            "top": `${Posizione['top'].toFixed(2)}px`,
            "right": `${Posizione['right'].toFixed(2)}px`,
            "left": `${Posizione['left'].toFixed(2)}px`,
            "width": "max-content",
            "height": "max-content",
            "borderRadius": "3px",
            "backgroundColor": "#ffffff",
            "overflow": "hidden"
        }).forEach(([k, v])=>{ sottomenu.style[k] = v})

        const MENU_ = ["SALUTE", "PASTIGLIE", "MAILGUN", "ZOHO", "COMPILATORE"]
        for (const [nomeLink, Path] of Object.entries(links)) {
            const LINK = document.createElement('a')
            LINK.textContent = nomeLink
            for (const apriAltraPagina of MENU_) {
                if (nomeLink == apriAltraPagina) { LINK.setAttribute("target", "_blank") }
            }
            LINK.href = Path
            const STYLE_link = LINK.style
            STYLE_link.padding = "15px 10px 10px 5px"
            STYLE_link.textDecoration = "none"
            STYLE_link.color = "black"

            sottomenu.append(LINK)
        }
        document.body.appendChild(sottomenu)

        sottomenu.animate(Animazione(sottomenu, true)["keyframes"], Animazione(sottomenu, true)["options"]);
    }
}


function rimuoviEventiMousemove(document) {
    try {
        const eventiRegistrati = getEventListeners(document);

        if (eventiRegistrati.mousemove) {
            eventiRegistrati.mousemove.forEach((evento) => {
                document.removeEventListener('mousemove', evento.listener);

            });
        }
    } catch { }
}


function barraDiRicerca(barra, document) {
    const div = document.createElement('div')

    async function DIZIONARIO() { const res = await fetch("/api.corsi"); return await res.json() }

    barra.addEventListener('input', async (event) => {
        Object.entries(await DIZIONARIO())
            .map(([k, v]) => {
                k.includes(event.target.value) && event.target.value != ""
                    ? obj = { "key": k, "value": v }
                    : obj = null;
                return obj
            })
            .filter(e => e != null)
            .map(e => {
                const a = document.createElement('a')
                a.textContent = e['key']
                a.href = e['value']
                a.target = "_blank"
                a.style.color = "black"
                a.style.textDecoration = "none"
                a.style.margin = "2px"
                return a
            })
            .forEach((e, i) => {
                i < div.children.length
                    ? div.replaceChild(e, div.children[i])
                    : div.append(e)
            })
        const SEARCH = document.body.childNodes[0].childNodes[0]
        const Style_DIV = {
            "display": "flex",
            "flexDirection": "column",
            "position": "absolute",
            "left": `${SEARCH.getBoundingClientRect().left}px`,
            "right": `${SEARCH.getBoundingClientRect().right}px`,
            "top": `${SEARCH.getBoundingClientRect().bottom + 5}px`,
            "width": "max-content",
            "backgroundColor": "white",
            "color": "black",
            "overflow": "hidden",
            "borderRadius": "0px 0px 5px 5px"
        }
        Object.entries(Style_DIV).forEach(([k, v]) => { div.style[k] = v })

        document.body.append(div)

        event.target.value.length != 0
            ? div.animate(Animazione(div, true)["keyframes"], Animazione(div, true)["options"])
            : div.animate(Animazione(div, false)["keyframes"], Animazione(div, false)["options"])      
    })
}
function Animazione(div, valore) {
    div.getAnimations().forEach(e => e.cancel());
    const altezzaMassima = div.offsetHeight;
    let keyframes = null
    if (valore) {
        keyframes = [
            { height: '0px' },
            { height: altezzaMassima + 'px' }
        ]
    }
    else {
        keyframes = [
            { height: altezzaMassima + 'px' },
            { height: '0px' }
        ];
    }
    const options = {
        duration: 400,
        fill: 'both',
    };
    return {
        "keyframes":keyframes, 
        "options": options
    }
}