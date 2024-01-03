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

        element.style.border = "none"
        element.style.marginLeft = ".8rem"
        element.style.backgroundColor = "rgba(250, 250, 250, 0.7)"
        element.style.borderBottom = "2px solid blue"
        element.style.outline = "none"
        element.style.marginTop = "1rem"
        element.style.height = "25px"
        element.style.fontSize = "18px"
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

        const STYLE_sottomenu = sottomenu.style
        STYLE_sottomenu.display = "flex"
        STYLE_sottomenu.flexDirection = "column"
        STYLE_sottomenu.position = "absolute"
        STYLE_sottomenu.top = `${Posizione['top'].toFixed(2)}px`
        //STYLE_sottomenu.bottom = `${Posizione['bottom'].toFixed(2)}px`
        STYLE_sottomenu.right = `${Posizione['right'].toFixed(2)}px`
        STYLE_sottomenu.left = `${Posizione['left'].toFixed(2)}px`
        STYLE_sottomenu.width = "max-content"
        STYLE_sottomenu.height = "max-content"
        STYLE_sottomenu.borderRadius = "3px"
        STYLE_sottomenu.backgroundColor = "#ffffff"
        STYLE_sottomenu.overflow = "hidden"

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
        const altezzaMassima = sottomenu.offsetHeight;
        const keyframes = [
            { height: "0px" },
            { height: altezzaMassima + 'px' }
        ];
        const options = {
            duration: 400,
            fill: 'both'
        };
        sottomenu.animate(keyframes, options);
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
    const Ds = div.style
    Ds.display = "flex"
    Ds.flexDirection = "column"
    Ds.width = "max-content"
    Ds.backgroundColor = "white"
    Ds.color = "black"
    Ds.overflow = "hidden"

    async function DIZIONARIO() {
        const res = await fetch("/api.corsi")
        return await res.json()
    }
    barra.addEventListener('input', async (event) => {
        const RICERCA = await (async () => {
            const ricerca = []
            let input = event.target.value
            const dizionario = await DIZIONARIO()
            for (const [k, v] of Object.entries(dizionario)) {
                if (k.includes(input) && input != "") { ricerca.push({ "key": k, "value": v }) }
                else if (input == "") { ricerca.length = 0 }
            }
            return ricerca
        })()
        const LINKs = await (async () => {
            const links = []
            for (const [k, v] of Object.entries(RICERCA)) {
                const a = document.createElement('a')
                a.textContent = v.key
                a.classList = "item-link-JSON"
                a.target = "_blank"
                a.style.color = "black"
                a.style.textDecoration = "none"
                a.href = v.value
                links.push(a)
            }
            return links
        })()
        LINKs.forEach((e, i) => {
            i < div.children.length
                ? div.replaceChild(e, div.children[i])
                : div.appendChild(e)
        })
        Ds.position = "absolute"
        const SEARCH = document.body.childNodes[0].childNodes[0]
        Ds.left = `${SEARCH.getBoundingClientRect().left}px`
        Ds.right = `${SEARCH.getBoundingClientRect().right}px`
        Ds.top = `${SEARCH.getBoundingClientRect().bottom}px`

        document.body.append(div)

        event.target.value.length != 0
            ? Animazione(div, true)
            : Animazione(div, false);


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
    div.animate(keyframes, options);
}