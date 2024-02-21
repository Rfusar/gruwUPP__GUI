//*------------------------------------------------------------------------------------------------------------ Functions
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
    iframe.allowFullscreen = true

    new Array(h2, div2, iframe).forEach(e => divSecondario.append(e))

    document.getElementsByTagName('main')[0].append(divSecondario)
}


//*------------------------------------------------------------------------------------------------------------ DATI
Object.assign(document.body.style, {
    margin: 0,
    padding: 0,
    backgroundColor: "black",
    color: "white"
})

//*LINK
const BASE = [
    {
        ID: "#base___Teoriadi", links: {
            "-Von Neumann-": "https://it.wikipedia.org/wiki/Architettura_di_von_Neumann",
            "-Alan Turing-": "https://it.wikipedia.org/wiki/Macchina_di_Turing"
        }
    },
    {
        ID: "#base___Macchina", links: {
            "-Memoria-": "https://it.wikipedia.org/wiki/Memoria_(informatica)",
            "-Processore-": "https://it.wikipedia.org/wiki/Processore"
        }
    },
    {
        ID: "#base___OS", links: {
            "-Linux-": "https://it.wikipedia.org/wiki/Linux",
            "-Windows-": "https://it.wikipedia.org/wiki/Microsoft_Windows",
            "-Mac-": "https://it.wikipedia.org/wiki/Macintosh"
        }
    },
    {
        ID: "#base___Altro", links: {
            "-Network-": "https://it.wikipedia.org/wiki/Network"
        }
    },
    {
        ID: "#base___Unitadimisura", links: {
            "-Metro-": "https://it.wikipedia.org/wiki/Metro",
            "-Secondo-": "https://it.wikipedia.org/wiki/Secondo"
        }
    }
];
const sottotitoli_BASE = ["Teoria di", "Macchina", "OS", "Altro", "Unita di misura"]
creazioneTabella(5, 2, sottotitoli_BASE, BASE)


const LIVELLO1 = [
    {
        ID: "#livello1___Tipologiememoria", links: {
            "RAM": "https://it.wikipedia.org/wiki/RAM",
            "ROM": "https://it.wikipedia.org/wiki/Read_Only_Memory",
            "Flash": "https://it.wikipedia.org/wiki/Memoria_flash"
        }
    },
    {
        ID: "#livello1___Logicheprocessori", links: {
            "CPU": "https://it.wikipedia.org/wiki/CPU",
            "GPU": "https://it.wikipedia.org/wiki/GPU",
            "ALU": "https://it.wikipedia.org/wiki/Unit%C3%A0_aritmetica_e_logica",
            "FPU": "https://it.wikipedia.org/wiki/Unit%C3%A0_di_calcolo_in_virgola_mobile",
            "DSP": "https://it.wikipedia.org/wiki/DSP",
            "MMU": "https://it.wikipedia.org/wiki/Unit%C3%A0_di_gestione_della_memoria"
        }
    },
    {
        ID: "#livello1___Architetturaprocessori", links: {
            "ARM": "https://it.wikipedia.org/wiki/Architettura_ARM",
            "NIOS II": "https://en.wikipedia.org/wiki/Nios_II",
            "MIPS": "https://it.wikipedia.org/wiki/Architettura_MIPS"
        }
    }

]
const sottotitoli_LIVELLO1 = ["Tipologie memoria", "Logiche processori", "Architettura processori"]
creazioneTabella(3, 2, sottotitoli_LIVELLO1, LIVELLO1)


const LIVELLO2 = [
    {
        ID: "#livello2___CPU", links: {
            "Cache": "https://it.wikipedia.org/wiki/CPU_cache"
        }
    },
    {
        ID: "#livello2___SDRAM", links: {
            "DDR": "https://it.wikipedia.org/wiki/DDR_SDRAM",
            "DDR2": "https://it.wikipedia.org/wiki/DDR2",
            "DDR3": "https://it.wikipedia.org/wiki/DDR3",
            "DDR4": "https://it.wikipedia.org/wiki/DDR4",
            "DDR5": "https://it.wikipedia.org/wiki/DDR5"
        }
    },

]
const sottotitoli_LIVELLO2 = ["CPU", "SDRAM"]
creazioneTabella(2, 2, sottotitoli_LIVELLO2, LIVELLO2)



//*VIDEO
const divSecondario = document.createElement('div')
Object.entries({
    "borderRadius": "50px",
    "border": ".5px solid rgb(255, 27, 27)",
    "padding": "0 20px 20px 20px",
    "marginTop": "50px"
}).forEach(([k, v]) => { divSecondario.style[k] = v })

const DATI = [
    {
        titolo: "Programmazione in parallelo",
        segnavideo: 4,
        src: "https://www.youtube.com/embed/videoseries?si=Bb2Cfchh0LNtLG_4&amp;list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf"
    },
    {
        titolo: "Blockchain",
        segnavideo: 1,
        src: "https://www.youtube.com/embed/videoseries?si=6xXzRbW7TevlTNhr&amp;list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn"

    },
    {
        titolo: "Algoritmi",
        segnavideo: 2,
        src: "https://www.youtube.com/embed/videoseries?si=HcqiufkMezoB63JS&amp;list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY"

    }
]

DATI.forEach(e => creazioneTabellaVideo(e))