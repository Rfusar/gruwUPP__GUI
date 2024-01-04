const sidebar = document.createElement('div')
Object.entries({
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "height": "92vh",
    "width": "30vh",
    "backgroundColor": "#3c9dde",
    "float": "left",
    "color": "white"
}).forEach(([k, v]) => sidebar.style[k] = v)

const front_end = document.createElement('p')
const back_end = document.createElement('p')
front_end.setAttribute("attivo", "false")
back_end.setAttribute("attivo", "false")

gestioneVideo(front_end, back_end)
gestioneVideo(back_end, front_end)

front_end.textContent = "FRONT-END"
back_end.textContent = "BACK-END"
new Array(front_end, back_end).forEach(e => {
    Object.entries({
        "marginLeft": "20px",
        "fontSize": "35px",
        "cursor": "pointer",
        "width": "max-content",
        "padding": "7px",
        "borderRadius": "10px"
    }).forEach(([k, v]) => { e.style[k] = v })
})

new Array(front_end, back_end).forEach(e => sidebar.append(e))

document.getElementsByTagName('main')[0].append(sidebar)



new Array(front_end, back_end).forEach(e=>Animazione___mouseOver(e))

function Animazione___mouseOver(elemento) {
    const OPACITY_MAX = 0.23
    const SPEED = 0.03
    let opacity = null
    elemento.addEventListener('mouseover', () => {
        opacity = 0.0;
        const intervalId = setInterval(() => {
            elemento.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
            opacity += SPEED;
            if (opacity >= OPACITY_MAX) {
                clearInterval(intervalId);
                elemento.style.backgroundColor = 'rgba(255, 255, 255, '+OPACITY_MAX+')'; 
            }
        }, 30);
    });

    elemento.addEventListener('mouseleave', () => {
        opacity = OPACITY_MAX;
        const intervalId = setInterval(() => {
            elemento.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
            opacity -= SPEED;
            if (opacity <= 0.0) {
                clearInterval(intervalId);
                elemento.style.backgroundColor = 'transparent'; 
            }
        }, 30);
    });
}

function gestioneVideo(cliccato, altro) {
    cliccato.addEventListener('click', () => {
        cliccato.getAttribute('attivo') == "false"
            ? cliccato.setAttribute('attivo', "true")
            : cliccato.setAttribute('attivo', "false"); altro.setAttribute("attivo", "false")
    })
}