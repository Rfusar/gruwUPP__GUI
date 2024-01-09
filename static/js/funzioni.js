function stile_elemento(stile, elemento, piuElementi = false) {
    piuElementi
        ? new Array(...elemento).forEach(e => {
            for (const key in stile) { e.style[key] = stile[key] }
        })
        : Object.keys(stile).forEach(key => elemento.style[key] = stile[key])
}

//! Da migliorare
function attivazioneTABELLA(elemento, card) {
    elemento.addEventListener('click', () => {
        document.querySelector('#workSpace').childNodes.forEach(e => e.remove())
        document.querySelector('#workSpace').append(card)
        document.querySelectorAll(".riga_").forEach((e, i) => { if (i % 2 == 0) { e.style.backgroundColor = "#145d0012" } })
    })
}

function btnTabella(prima, ora, dopo) {
    new Array(prima, dopo).forEach(e => {
        e.addEventListener('click', () => {
            if (e.textContent == ">>") { ora.textContent = Number(ora.textContent) + 1 }
            else if (e.textContent == "<<") {
                if (ora.textContent > 0) { ora.textContent = Number(ora.textContent) - 1 }
            }
        })
    })
}

export { stile_elemento, attivazioneTABELLA, btnTabella }