export function Animazione___E_nav(elemento,
    SPEED = 0.05,
    MAX_OPACITY = 0.3,
    COLOR = `rgba(255, 255, 255,`,
    DELAY = 20) {
    /*
        & animazione per elemento semplice con scritta, esempio
        & un link, oppure ... 
    */
    //*ANIMAZIONE OVERMOUSE
    const IN = () => {
        let opacity = 0;
        const I = setInterval(() => {
            elemento.style.backgroundColor = `${COLOR} ${opacity})`;
            opacity += SPEED;
            if (opacity >= MAX_OPACITY) {
                clearInterval(I);
                elemento.style.backgroundColor = `rgba(255, 255, 255, ${MAX_OPACITY})`;
            }
        }, DELAY);
    };
    //*ANIMAZIONE MOUESOUT
    const OUT = () => {
        let opacity = MAX_OPACITY;
        const I = setInterval(() => {
            elemento.style.backgroundColor = `${COLOR} ${opacity})`;
            opacity -= SPEED;
            if (opacity <= 0) {
                clearInterval(I);
                elemento.style.backgroundColor = "rgba(255, 255, 255, 0)";
            }
        }, DELAY);
    };
    return [IN, OUT];
}