function animazione___elementi_sidebar___TENDINA(elemento,
    SPEED = 0.7,
    MAX_ALTEZZA = elemento.offsetHeight,
    DELAY = 20) {
    /*
         
    */
    //*ANIMAZIONE OVERMOUSE
    const APRI = () => {
        let altezza = 0;
        const I = setInterval(() => {
            elemento.style.height = `${altezza}px`;
            altezza += SPEED;
            if (altezza >= MAX_ALTEZZA) {
                clearInterval(I);
                elemento.style.height = `${MAX_ALTEZZA}px`;
            }
        }, DELAY);
    };
    //*ANIMAZIONE MOUESOUT
    const CHIUDI = () => {
        let altezza = MAX_ALTEZZA;
        const I = setInterval(() => {
            elemento.style.height = `${altezza}px`;
            altezza -= SPEED;
            if (altezza <= 0) {
                clearInterval(I);
                elemento.style.height = "0px";
            }
        }, DELAY);
    };
    return [APRI, CHIUDI];
}




function creazioneTendina(campo, sottocampi) {
    try { document.querySelector('#TENDINA').remove() }
    catch { }

    const div = document.createElement('div')
    div.id = "TENDINA"
    div.setAttribute("schermo", false)
    Object.entries({
        display: "flex",
        borderRadius: "4px",
        backgroundColor: "white",
        flexDirection: "column",
        padding: "3px"
    }).forEach(([k, v]) => div.style[k] = v)

    for (const sottocampo of sottocampi) {
        const span = document.createElement('span')
        span.textContent = sottocampo
        span.style.margin = "10px 0px"
        div.append(span)
    }
    campo.insertAdjacentElement("afterend", div)

    //*ANIMAZIONE                   
    const [APRI, CHIUDI] = animazione___elementi_sidebar___TENDINA(div, MAX_ALTEZZA=div.offsetHeight)
    div.getAttribute("schermo")
        ? div.addEventListener('click', () => { CHIUDI(div) })
        : div.addEventListener('click', () => { APRI(div) })



}

export { creazioneTendina }