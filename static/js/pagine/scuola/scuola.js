const main = document.getElementsByTagName('main')[0]
Object.assign(main.style, {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
})
const materie = [
    {
        "Storia": [
            "https://www.youtube.com/embed/QcVp3abb5CU?si=xWXSMGyTykFZIqPi",
            "https://www.youtube.com/embed/videoseries?si=P3zYJNWO-H-76qVx&amp;list=PL3tW0_opmMY29g28bgEgBSANDEFg_rRjw"

        ]
    },
    {
        "Geografia": [
            "https://www.youtube.com/embed/videoseries?si=EnuRP2ifOlber2eG&amp;list=PLsLBNKs3-0324idL6TOSvYNVRr6V7R1H7"
        ]
    },
    {
        "Italiano": [
            "https://www.youtube.com/embed/videoseries?si=aT1R69GxWWlaj3gQ&amp;list=PL8aY1TW4q-N76JJrIJreN_q36yF6WfZ6E"
        ]
    },
    {
        "Inglese": [
            //*TEMPI VERBALI
            "https://www.youtube.com/embed/i1Wfrnyld-8?si=CD8nzXuJWIkynOZz",
            "https://www.youtube.com/embed/7UByCdDk4X8?si=WBoN5g9ayrf1s-Vy",
            "https://www.youtube.com/embed/Jc-9efRvssg?si=0SgAwDSrbh2uMLfc",
            //*Verbi irregolari
            "https://www.youtube.com/embed/iZFJwXepwOc?si=3ndr67QjEE-h5QkC",
        ]
    },
    {
        "Biologia": [
            "https://www.youtube.com/embed/videoseries?si=wnBMjFVUn8LcDEIL&amp;list=PLhhJuuVH9v0v2QWRdLuc5dw-9p3HcDCmL"
        ]
    },
    {
        "Chimica": [
            "https://www.youtube.com/embed/videoseries?si=KBHlAo_2mIhI6QJx&amp;list=PL4Aufc8fZ9h8zU6xsJlucILWvSTfiau4S"
        ]
    },
    {
        "Diritto": [
            "https://www.youtube.com/embed/videoseries?si=It4mN0wq9cDna58Q&amp;list=PL49X9HJfW4kQKt0VnT9qC_NpwaJM3j3ob"
        ]
    },
    {
        "Tecnologia - disegno tecnico": [
            "https://www.youtube.com/embed/videoseries?si=LwAAOTrXWSfZeIMZ&amp;list=PLa_FM61U8MoTi3R3kf8uJUfpKqDCe7Gdv",
            "https://www.youtube.com/embed/videoseries?si=UjEga_OQR5wvmqpF&amp;list=PL2bgZ9Ap_Y3rgn1Z9c-vSqKNjhcFlRpOI"
        ],

    },
    {
        "Matematica": [
            "https://www.youtube.com/embed/videoseries?si=zY1W-ocY5vNt6YKW&amp;list=PLpkXLf6Zhdx0LEJW8B4XYJPkXK4rue3th"
        ]
    }
]

for (const materia of materie) {
    for (const [k, v] of Object.entries(materia)) {
        const containerParent = document.createElement('div')
        const containerVideo = document.createElement('div')
        Object.assign(containerVideo.style, {
            display: "flex",
            flexDirection: "row",
        })
        const Titolo = document.createElement('h1')
        //*Titolo
        Titolo.textContent = k
        for (const video of v) {
            const frame = document.createElement('iframe')
            frame.src = video
            frame.allowFullscreen = true
            frame.width = "250px"
            frame.height = "200px"
            containerVideo.append(frame)
        }
        containerParent.append(Titolo, containerVideo)
        main.append(containerParent)
    }
}