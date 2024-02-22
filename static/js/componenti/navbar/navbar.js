const nav = document.createElement('nav');

const P = {
    "home": { "nome": "HOME", "url": "/" },
    "studio": {
        "studio": "STUDIO",
        "informatica": { "nome": "INFORMATICA", "url": "/studio/informatica" },
        "matematica": { "nome": "MATEMATICA", "url": "/studio/matematica" },
        "musica": { "nome": "MUSICA", "url": "/studio/musica" },
        "altreRisorse": {"nome": "ALTRE RISORSE", "url": "/studio/scuola"},
    },
    "strumenti": {
        "strumenti": "STRUMENTI",
        "compilatore": { "nome": "COMPILATORE", "url": "https://www.onlinegdb.com/online_python_compiler" },
    },

}

N_link = 4
const LINKs = []
for (let i = 0; i < N_link; i++) {
    let elemento = ""
    i != 0 ? elemento = "a" : elemento = "input"
    const LINK = document.createElement(elemento)
    switch (i) {
        case 0:
            checkLINK(LINK, null, null, LINKs, document)
            break
        case 1: checkLINK(LINK, P['studio']['studio'], null, LINKs, null); break
        case 2: checkLINK(LINK, P['strumenti']['strumenti'], null, LINKs, null); break
        case 3: checkLINK(LINK, P['home']['nome'], P['home']['url'], LINKs, null); break

        default: console.error("AIA, qualcosa è andato male")
    }
}
for (const LINK of LINKs) { nav.append(LINK) }


Object.assign(nav.style, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "8vh",
    backgroundColor: "#60d168",
    borderRadius: "0px 0px 10px 0px",
})
document.body.insertBefore(nav, document.body.firstChild)

//CREAZIONE SOTTOMENU
let check = 0
nav.childNodes.forEach(child => {
    child.classList.add('menuNavbar')
    child.addEventListener('mouseover', () => {
        if (child.getAttribute('value') == "sottomenu") {
            check += 1
            const Posizione = {}
            Posizione['top'] = nav.getBoundingClientRect().bottom
            Posizione['left'] = child.getBoundingClientRect().left
            Posizione['right'] = child.getBoundingClientRect().right

            const Links = {}
            switch (child.textContent) {
                case P['studio']['studio']:
                    Links[P['studio']['informatica']['nome']] = P['studio']['informatica']['url'],
                        Links[P['studio']['matematica']['nome']] = P['studio']['matematica']['url'],
                        Links[P['studio']['musica']['nome']] = P['studio']['musica']['url'],
                        Links[P['studio']['altreRisorse']['nome']] = P['studio']['altreRisorse']['url']
                    break
                case P['strumenti']['strumenti']:
                    Links[P['strumenti']['compilatore']['nome']] = P['strumenti']['compilatore']['url']
                    break
            }
            child.classList.add("menu")
            Sottomenu(Posizione, child.textContent, Links, document, check)
            const Posizioni_oggetti = []
            document.querySelectorAll(".menu").forEach(e => { Posizioni_oggetti.push(e.getBoundingClientRect()) })
            Posizioni_oggetti.length = 2
            document.addEventListener('mousemove', event => {
                if (Posizioni_oggetti.length == 2) {
                    let mouseX = event.clientX;
                    let mouseY = event.clientY;
                    const bottom = document.querySelector(`#${child.textContent}`).offsetHeight + nav.offsetHeight
                    const pos = [bottom, Posizioni_oggetti[0].top, Posizioni_oggetti[0].left, Posizioni_oggetti[1].right]
                    if (pos[0] > mouseY && pos[1] < mouseY && pos[2] < mouseX && pos[3] > mouseX) { }
                    else {
                        if (check == 1) {
                            const sottomenu = document.querySelector(`#${child.textContent}`)
                            //ANIMAZIONE
                            const altezzaMassima = sottomenu.offsetHeight;
                            const keyframes = [
                                { height: altezzaMassima + 'px' },
                                { height: 0 }
                            ];
                            const options = {
                                duration: 400,
                                fill: 'both'
                            };
                            sottomenu.animate(keyframes, options);
                            sottomenu.remove()
                            check = 1
                            rimuoviEventiMousemove(document)
                            Posizioni_oggetti.length = 0
                        }
                        check -= 1
                    }
                }
            })

        }
    })
});


//IMMAGINI
(() => {
    document.querySelectorAll('.menuNavbar').forEach(e => {
        if (e.textContent == "HOME") {
            const img = document.createElement('img')
            img.src = "/static/img/referente.png"
            e.textContent = ""
            e.append(img)
        }
    })
})()