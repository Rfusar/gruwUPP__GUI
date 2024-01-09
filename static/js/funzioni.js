function stile_elemento(stile, elemento) {
    for (const key in stile) { elemento.style[key] = stile[key] }
}
function attivazioneTABELLA(elemento, card) {
    elemento.addEventListener('click', () => {
        document.querySelector('#workSpace').append(card)
    })

}

export { stile_elemento, attivazioneTABELLA }