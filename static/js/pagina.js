Object.entries({
    "margin": "0px",
    "padding": "0px",
    "backgroundImage": "url('/static/img/!Fantasy.png')",
    "backgroundSize": "cover",
    "backgroundPosition": "center"
}).forEach(([k, v]) => { document.body.style[k] = v })


const paginaNovita = document.createElement("div")
const sfondo = document.createElement("div")

for (let i = 0; i < 4; i++) {
    const p = document.createElement('span')
    paginaNovita.append(p)
}
paginaNovita.style.height = "92vh"

new Array(front_end, back_end).forEach(e => {
    e.addEventListener('click', () => {
        //NOVITA
        if (front_end.getAttribute('attivo') == "false" && back_end.getAttribute('attivo') == "false") {
            const NOVITA = [
                //NODE.JS
                "https://www.youtube.com/embed/videoseries?si=wa902zgLmiRI0cvL&amp;list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
                //POWERSHELL
                "https://www.youtube.com/embed/videoseries?si=bco60U1a-vc_X09A&amp;list=PLnK11SQMNnE4vcvuAahz4KhNOS7zOfmB3",
                //PYTHON
                "https://www.youtube.com/embed/mDKM-JtUhhc?si=UlqTTsF6MxuoBoZR",
                //GO
                "https://www.youtube.com/embed/YS4e4q9oBaU?si=BKJVBN6ZwBcbZYYw",
            ]
            VIDEO(NOVITA)
        }
        //FRONT-END
        else if (front_end.getAttribute('attivo') == "true" && back_end.getAttribute('attivo') == "false") {
            const FRONTEND = [
                //BASE
                "https://www.youtube.com/embed/zJSY8tbf_ys?si=szI2DvSyWOm7YXvk",
                //Javascript
                "https://www.youtube.com/embed/vDDjtwQDw2k?si=7YmD4dmKcow1Ppz7",
                //VScode 
                "",
                //javascript ++
                "https://www.youtube.com/embed/videoseries?si=mb4tA-iD9xzy1H7R&amp;list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd"
            ]
            VIDEO(FRONTEND)
        }
        //BACK-END
        else if (front_end.getAttribute('attivo') == "false" && back_end.getAttribute('attivo') == "true") {
            const BACKEND = [
                //GOlang
                "https://www.youtube.com/embed/pKpKv9MKN-E?si=Em0XwDoOWZm2nu6z",
                //docker
                "https://www.youtube.com/embed/RqTEHSBrYFw?si=aAuqLul4BQACg0lI",
                //kubernetes
                "https://www.youtube.com/embed/d6WC5n9G_sM?si=r4onl3iEQ8wGEL73",
                //cloud run
                "https://www.youtube.com/embed/zkCNes0PHO8?si=yNE0SjD63h2rX5BC"
            ]
            VIDEO(BACKEND)
        }
    })
})

document.getElementsByTagName('main')[0].append(paginaNovita)


function VIDEO(linkArray) {
    const links = [linkArray[0], linkArray[1], linkArray[2], linkArray[3]]
    for (let i = 0; i < 4; i++) {
        const frame = document.createElement('iframe')
        frame.width = "690px"
        frame.height = "330px"
        frame.style.margin = "20px"
        frame.allowFullscreen = true
        frame.src = links[i]
        paginaNovita.replaceChild(frame, paginaNovita.children[i])
    }
}