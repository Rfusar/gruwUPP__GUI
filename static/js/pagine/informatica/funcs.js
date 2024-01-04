function creazioneTabella(N_tabelle, N_sottocampi, sottotitoli, linksData) {
    let inizioID = null
    let title = null
    switch (linksData[0].ID) {
        case "#base___Teoriadi":
            inizioID = "base___"
            title = "BASE"
            break
        case "#livello1___Tipologiememoria":
            inizioID = "livello1___"
            title = "LIVELLO 1"
            break
        case '#livello2___CPU':
            inizioID = "livello2___"
            title = "MEMORIE"
            break
    }

    const divLink = document.createElement('div')
    divLink.style.display = "flex"
    divLink.style.justifyContent = "center"
    const div = document.createElement('div')
    const titolo = document.createElement("h2")
    titolo.textContent = title
    titolo.color = "yellow"

    const table = document.createElement('table')
    for (let i = 0; i < N_tabelle; i++) {
        const tr = document.createElement('tr')
        for (let ii = 0; ii < N_sottocampi; ii++) {
            const td = document.createElement('td')
            ii == 0
                ? td.textContent = sottotitoli[i]
                : td.setAttribute("id", inizioID + sottotitoli[i].replace(/\s/g, ''))
            td.style.border = ".5px solid white"
            tr.append(td)
        }
        table.append(tr)
    }
    new Array(titolo, table).forEach(e => div.append(e))

    divLink.append(div)
    document.getElementsByTagName('main')[0].append(divLink)


    linksData.forEach(data => {
        Object.entries(data.links).forEach(([text, url]) => {
            const a = document.createElement('a');
            a.textContent = text;
            a.href = url;
            a.target = "_blank";
            a.style.margin = "0 1rem"
            a.style.textDecoration = "none"
            a.style.color = "white"
            document.querySelector(data.ID).append(a);
        });
    });
}


function creazioneTabellaVideo(data) {
    //&#9733 -> stella piena
    //&#9734 -> stella vuota
    let difficolta = null
    switch(data.titolo){
        case "Programmazione in parallelo": difficolta = "&#9733;&#9733;&#9733;&#9733;&#9734";break
        case "Blockchain": difficolta = "&#9733;&#9733;&#9733;&#9733;&#9733";break
        case "Algoritmi": difficolta = "&#9733;&#9733;&#9733;&#9733;&#9734";break
    }

    const h2 = document.createElement('h2')
    h2.textContent = data.titolo
    const div = document.createElement('div')

    const div2 = document.createElement('div')
    const p0 = document.createElement('p')
    p0.textContent = "Segnavideo "+data.segnavideo

    const p1 = document.createElement('p')
    p1.textContent = "Difficolta: "
    const stelle = document.createElement('i')
    stelle.innerHTML = difficolta;
    p1.append(stelle)

    new Array(p0, p1).forEach(e => div2.append(e))

    //GESTIONE VIDEO
    const iframe = document.createElement('iframe')
    iframe.src = data.src
    iframe.width = "560"
    iframe.height = "315"

    new Array(h2, div2, iframe).forEach(e => divSecondario.append(e))

    document.getElementsByTagName('main')[0].append(divSecondario)
}