//& DATI
const materie_con_redirect = {
    "analisi grammaticale": "https://youtube.com/playlist?list=PLdIQC7oepumhoYpBBYm2hQMywZYj4Iu8M&si=iOBSPci-i9hZxE1c",
    "analisi logica": "https://youtube.com/playlist?list=PLdIQC7oepumiphdQH4iYNqTQlHRwUiYk2&si=Fs8acdGcL6nkGv0I",
    "analisi del periodo": "https://youtube.com/playlist?list=PLdIQC7oepumjZ5_wDdCVlOR63YwnWjPlq&si=177w72RHggri4OcQ",
    "medioevo": "https://youtube.com/playlist?list=PLPomx3BVUwcX5bi57wx_4gStaOjqw2hnq&si=U5VmJHBzZAQ495VS",
    "APPUNTI": "http://127.0.0.1:8080/api.show"
}


const materie_card =
{
    "Storia": [
        "https://www.youtube.com/embed/QcVp3abb5CU?si=xWXSMGyTykFZIqPi",
        "https://www.youtube.com/embed/videoseries?si=P3zYJNWO-H-76qVx&amp;list=PL3tW0_opmMY29g28bgEgBSANDEFg_rRjw",
        "https://www.youtube.com/embed/d3oSdC6OCMo?si=QvjtrnPNzoHFxc5x"
    ],
    "Geografia": [
        "https://www.youtube.com/embed/videoseries?si=EnuRP2ifOlber2eG&amp;list=PLsLBNKs3-0324idL6TOSvYNVRr6V7R1H7"
    ],
    "Italiano": [
        "https://www.youtube.com/embed/videoseries?si=aT1R69GxWWlaj3gQ&amp;list=PL8aY1TW4q-N76JJrIJreN_q36yF6WfZ6E"
    ],
    "Inglese": [
        //*TEMPI VERBALI
        "https://www.youtube.com/embed/i1Wfrnyld-8?si=CD8nzXuJWIkynOZz",
        "https://www.youtube.com/embed/7UByCdDk4X8?si=WBoN5g9ayrf1s-Vy",
        "https://www.youtube.com/embed/Jc-9efRvssg?si=0SgAwDSrbh2uMLfc",
        //*Verbi irregolari
        "https://www.youtube.com/embed/iZFJwXepwOc?si=3ndr67QjEE-h5QkC",
    ],
    "Biologia": [
        "https://www.youtube.com/embed/videoseries?si=wnBMjFVUn8LcDEIL&amp;list=PLhhJuuVH9v0v2QWRdLuc5dw-9p3HcDCmL"
    ],
    "Chimica": [
        "https://www.youtube.com/embed/videoseries?si=KBHlAo_2mIhI6QJx&amp;list=PL4Aufc8fZ9h8zU6xsJlucILWvSTfiau4S"
    ],
    "Diritto": [
        "https://www.youtube.com/embed/videoseries?si=It4mN0wq9cDna58Q&amp;list=PL49X9HJfW4kQKt0VnT9qC_NpwaJM3j3ob"
    ],
    "Tecnologia - disegno tecnico": [
        "https://www.youtube.com/embed/videoseries?si=LwAAOTrXWSfZeIMZ&amp;list=PLa_FM61U8MoTi3R3kf8uJUfpKqDCe7Gdv",
        "https://www.youtube.com/embed/videoseries?si=UjEga_OQR5wvmqpF&amp;list=PL2bgZ9Ap_Y3rgn1Z9c-vSqKNjhcFlRpOI"
    ],
    "Matematica": [
        "https://www.youtube.com/embed/videoseries?si=zY1W-ocY5vNt6YKW&amp;list=PLpkXLf6Zhdx0LEJW8B4XYJPkXK4rue3th"
    ]
}


//& link con redirect
const links_con_redirect= document.getElementsByTagName('div')[0]
Object.assign(links_con_redirect.style, {
    display: "flex",
    flexDirection: "column"
})
for(const [k, v] of Object.entries(materie_con_redirect)){
    const a = document.createElement('a')
    a.textContent = k
    a.href = v
    a.target = "_blank"
    links_con_redirect.append(a)
}

//& PROCESSI
const main_card = document.getElementsByTagName('main')[0]
Object.assign(main_card.style, {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "30px"
})
const main_cardAperta = document.getElementsByTagName('main')[1]
main_cardAperta.style.display = "none"


for (const card of Object.keys(materie_card)) {
    const div = document.createElement('div')
    div.classList.add('card')
    Object.assign(div.style, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "2px 4px 10px gray",
        cursor: "pointer"
    })
    div.setAttribute("attivo", false)
    //*evento mouseover
    div.addEventListener('mouseover', () => {
        div.style.position = "relative"
        div.style.top = "10px"
    })
    div.addEventListener('mouseout', () => {
        div.style.position = "relative"
        div.style.top = "0"
    })

    const h1 = document.createElement('h1')
    h1.textContent = card
    div.append(h1)
    main_card.append(div)

}
//* apertura card
document.querySelectorAll('.card').forEach(e => {
    e.addEventListener('click', () => {
        main_card.style.display = "none"
        Object.assign(main_cardAperta.style, {
            marginTop: "30px",
            display: "block",
        })
        const btn = document.createElement('button')
        btn.id = "btn"
        btn.textContent = "Torna indietro"
        Object.assign(btn.style, {
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "50px"
        })
        btn.addEventListener('click', () => {
            while (main_cardAperta.firstChild) { main_cardAperta.removeChild(main_cardAperta.firstChild)}
            main_card.style.display = "grid"
            main_cardAperta.style.display = "none"

        })
        main_cardAperta.append(btn)
        switch (e.textContent) {
            case "Storia": a_schermo(materie_card[e.textContent]); break
            case "Geografia": a_schermo(materie_card[e.textContent]); break
            case "Italiano": a_schermo(materie_card[e.textContent]); break
            case "Inglese": a_schermo(materie_card[e.textContent]); break
            case "Biologia": a_schermo(materie_card[e.textContent]); break
            case "Chimica": a_schermo(materie_card[e.textContent]); break
            case "Diritto": a_schermo(materie_card[e.textContent]); break
            case "Tecnologia - disegno tecnico": a_schermo(materie_card[e.textContent]); break
            case "Matematica": a_schermo(materie_card[e.textContent]); break
        }
    })
})




function a_schermo(video) {
    for (const v of video) {
        const frame = document.createElement('iframe')
        frame.src = v
        frame.allowFullscreen = true
        frame.width = "250px"
        frame.height = "200px"
        frame.style.marginRight = "20px"
        main_cardAperta.append(frame)
    }
}


