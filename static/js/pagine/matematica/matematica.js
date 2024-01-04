//*CORSI NETTUNO
const divNettuno = document.createElement('div')
divNettuno.style.display = "flex"
divNettuno.style.border = ".5px solid black"
divNettuno.style.justifyContent = "space-around"

const titoloNettuno = document.createElement('h1')
titoloNettuno.textContent = "Corsi nettuno"
const ul = document.createElement('ul')

Object.entries({
    "Matematica superiori": "https://youtube.com/playlist?list=PLlp5giICUffDXnZ7tW3kszKR42gxcfkRD&si=ZH6GBNbBNRG--UBj",
    "Matematica università": "https://youtube.com/playlist?list=PLlp5giICUffAuLMYSBenYTGU7SLzGVbUK&si=83O4VW_AQ-SgBrWB",
    "Logica matematica": "https://youtube.com/playlist?list=PLlp5giICUffDf9QDPr8E0MhEm0Hf4duwO&si=NyTQVtN-zAmI_Rbw",
    "Matematica concetti": "https://www.youtube.com/@EliaBombardelli"
}).forEach(([k, v]) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = k
    a.href = v
    a.target = "_blank"
    li.append(a)
    ul.append(li)
})
new Array(titoloNettuno, ul).forEach(e => divNettuno.append(e))
document.getElementsByTagName('main')[0].append(divNettuno)



//*ANALISI MATEMATICA 1
const divUNICAS = document.createElement('div')
const h1 = document.createElement('h1')

const div0 = document.createElement('div')

const div1 = document.createElement('div')
const p0 = document.createElement('p')
p0.textContent = "segnavideo 4c"
const p1 = document.createElement('p')
p1.textContent = "Diffoclta IMPOSSIBILE"
new Array(p0, p1).forEach(e => div1.append(e))

const iframe = document.createElement('iframe')
iframe.src = "https://www.youtube.com/embed/videoseries?si=ku5Kn5sGGsfVq-Av&amp;list=PLUL1bzfXcbX14C_LblfpQx_VHMHzO1nL6"
iframe.allowfullscreen = true
iframe.width = "560px"
iframe.height = "315px"

new Array(div1, iframe).forEach(e => div0.append(e))
document.getElementsByTagName('main')[0].append(div0)

const links = Object.entries({
    "Altri corsi UNICAS": "https://www.youtube.com/@UnicasIngegneriavideo/playlists"
}).map(([k, v]) => {
    const a = document.createElement('a');
    a.textContent = k;
    a.href = v;
    a.target = "_blank";
    return a;
});

document.getElementsByTagName('main')[0].append(...links);
