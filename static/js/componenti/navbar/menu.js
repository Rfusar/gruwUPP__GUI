function checkLINK(element, testo, path, array, document) {
    if (element.nodeName.toLowerCase() === 'a') {

        element.textContent = testo;
        //SOTTOMENU
        if (path != null || path == "/api.show") { element.setAttribute("href", path) }
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
        Object.assign(element.style, {
            border: "none",
            marginLeft: ".8rem",
            backgroundColor: "rgba(250, 250, 250, 0.7)",
            borderBottom: "2px solid blue",
            outline: "none",
            marginTop: "1rem",
            height: "25px",
            fontSize: "18px"
        })
        element.placeholder = "Cerca..."
        element.setAttribute('list', 'materie')


        //ANIMAZIONE
        const RADIUS_MAX = 28
        const SPEED = 1.8
        let radius = null
        element.addEventListener('focus', () => {
            radius = 0;
            const intervalId = setInterval(() => {
                element.style.borderRadius = `0px ${radius}px 0px 0px`;
                radius += SPEED;
                if (radius >= RADIUS_MAX) {
                    clearInterval(intervalId);
                    element.style.borderRadius = `0px ${RADIUS_MAX}px 0px 0px`;
                }
            }, 30);
        });

        element.addEventListener('blur', () => {
            radius = RADIUS_MAX;
            const intervalId = setInterval(() => {
                element.style.borderRadius = `0px ${radius}px 0px 0px`;
                radius -= SPEED;
                if (radius <= 0) {
                    clearInterval(intervalId);
                    element.style.borderRadius = '0px';
                }
            }, 30);
        });

        const DIZIONARIO = async () => { const res = await fetch("/api.corsi"); return await res.json() }

        array.push(element)

        barraDiRicerca(element, document, DIZIONARIO)

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
        }).forEach(([k, v]) => { sottomenu.style[k] = v })

        const MENU_ = ["ALTRE RISORSE", "COMPILATORE"]
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
        "keyframes": keyframes,
        "options": options
    }
}
async function barraDiRicerca(barra, document, DIZIONARIO) {
    const datalist = document.createElement('datalist')
    datalist.id = "materie"
    for (const [k, v] of Object.entries(await DIZIONARIO())) {
        const option = document.createElement('option')
        option.textContent = k
        option.value = v
        datalist.append(option)
    }
    barra.addEventListener('blur', function () {
        if (barra.value != "") { window.open(barra.value, "_blank") }
    })
    barra.addEventListener('focus', () => { barra.value = "" })
    barra.insertAdjacentElement("afterend", datalist)
}