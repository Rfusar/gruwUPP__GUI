const sidebar = document.createElement('div')
const STYLE_sidebar = sidebar.style
STYLE_sidebar.display = "flex"
STYLE_sidebar.flexDirection = "column"
STYLE_sidebar.justifyContent = "space-around"
STYLE_sidebar.height = "92vh"
STYLE_sidebar.width = "30vh"
STYLE_sidebar.backgroundColor = "#3c9dde"
STYLE_sidebar.float = "left"
STYLE_sidebar.color = "white"

const front_end = document.createElement('p')
const back_end = document.createElement('p')
front_end.setAttribute("attivo", "false")
back_end.setAttribute("attivo", "false")

gestioneVideo(front_end, back_end)
gestioneVideo(back_end, front_end)

front_end.textContent = "FRONT-END"
back_end.textContent = "BACK-END"
new Array(front_end, back_end).forEach(e => {
    e.style.marginLeft = "20px"
    e.style.fontSize = "35px"
    e.style.cursor = "pointer"
});
sidebar.append(front_end)
sidebar.append(back_end)


document.getElementsByTagName('main')[0].append(sidebar)


function gestioneVideo(cliccato, altro){
    cliccato.addEventListener('click', () => {
        cliccato.getAttribute('attivo') == "false"
            ? cliccato.setAttribute('attivo', "true")
            : cliccato.setAttribute('attivo', "false"); altro.setAttribute("attivo", "false")
    })
}