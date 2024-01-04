const menu = document.querySelector('#modi')
        const MENU___Maggiore = [
            ["MODO", "ARPEGGIO", "ESTENSIONI"], //c d e f g a b
            ["IONICO", "1 3 5 7", "9 11 13"],
            ["DORICO", "1 b3 5 b7", "9 11 13"],
            ["FRIGIO", "1 b3 5 b7", "b9 11 13"],
            ["LIDIO", "1 3 5 7", "9 #11 13"],
            ["DOMINANTE", "1 3 5 b7", "9 11 13"],
            ["EOLIO", "1 b3 5 b7", "9 11 b13"],
            ["LOCRIO", "1 b3 b5 b7", "b9 11 b13"],
        ]
        const MENU___MinoreMelodica = [
            ["MODO", "ARPEGGIO", "ESTENSIONI"], //c d eb f g a b
            ["MELODICA", "1 b3 5 7", "9 11 13"],
            ["DORICO_b9", "1 b3 5 b7", "b9 11 13"],
            ["LIDIO_#5", "1 3 #5 b7", "9 #11 13"],
            ["DOMINANTE_#11", "1 3 5 b7", "9 #11 13"],
            ["DOMINANTE_b13", "1 3 5 b7", "9 11 b13"],
            ["LOCRIO_9", "1 b3 b5 b7", "9 11 b13"],
            ["ALT1", "1 b3 b5 b7", "b9 b11 b13"],
        ]
        const MENU___MinoreArmonica = [
            ["MODO", "ARPEGGIO", "ESTENSIONI"], //c d eb f g ab b
            ["ARMONICA", "1 b3 5 7", "9 11 b13"],
            ["LOCRIO_13", "1 b3 b5 b7", "b9 11 13"],
            ["IONICO_#5", "1 3 #5 7", "9 11 13"],
            ["DORICO_#11", "1 b3 5 b7", "9 #11 13"],
            ["DOMINANTE_b9b13", "1 3 5 b7", "b9 11 b13"],
            ["LOCRIO_9", "1 3 5 7", "#9 #11 13"],
            ["ALT1", "1 b3 b5 bb7", "b9 b11 b13"],
        ]

        creazioneTabella(MENU___Maggiore, "SCALA MAGGIORE")
        creazioneTabella(MENU___MinoreMelodica, "SCALA MINORE MELODICA")
        creazioneTabella(MENU___MinoreArmonica, "SCALA MINORE ARMONICA")

        function creazioneTabella(MENUscala, nomeScala) {
            const tableMaggiore = document.createElement('table')
            tableMaggiore.style.borderLeft = ".7px solid black"
            const titolo = document.createElement('h2')
            titolo.textContent = nomeScala
            tableMaggiore.append(titolo)
            for (let i = 0; i < MENUscala.length; i++) {
                const tr = document.createElement('tr')
                for (let j = 0; j < MENUscala[0].length; j++) {
                    if (i == 0) {
                        const th = document.createElement('th')
                        th.style.border = ".5px solid black"
                        th.textContent = MENUscala[i][j]
                        tr.append(th)
                    } else {
                        const td = document.createElement('td')
                        td.style.border = ".5px solid black"
                        td.textContent = MENUscala[i][j]
                        tr.append(td)
                    }

                }
                tableMaggiore.append(tr)
            }
            menu.append(tableMaggiore)
        }