const CRITICITA = { "BASSA": 100, "MEDIA": 50, "ALTA": 25 }
const TITOLI_tabelle___medicinali = ["MATTINA", "MEZZOGIORNO", "SERA"]
const titoli_campi___medicinali = ["Nome", "Azione", "Quantita"]
const titoli_campi___scorte = ["MEDICINALE", "SCORTA", "QUANTITA"]

//func 1
function elemento(e) {
    return document.createElement(e)
}
function creazione_punti(n, dose) {
    const criticitaAlta = CRITICITA['ALTA'] * n / 100
    const criticitaMedia = CRITICITA['MEDIA'] * n / 100
    const criticitaBassa = CRITICITA['BASSA'] * n / 100
    let punti = ""
    if (dose == 2) {
        for (let i = 0; i < n / 2; i++) {
            if (i < (criticitaAlta / 2).toFixed(0)) { punti += " ••" }
            else if (i < (criticitaMedia / 2).toFixed(0)) { punti += " °°" }
            else if (i < (criticitaBassa / 2).toFixed(0)) { punti += " ºº" }
        }
    }
    else if (dose == 1) {
        for (let i = 0; i < n; i++) {
            if (i < criticitaAlta.toFixed(0)) { punti += " •" }
            else if (i < criticitaMedia.toFixed(0)) { punti += " °" }
            else if (i < criticitaBassa.toFixed(0)) { punti += " º" }
        }
    }
    return punti
}

//func2
function creazione_titoli(titolo, ID_senzaCancelletto, tipo_titolo, ID_principale) {
    const div = elemento("div")
    div.setAttribute('id', ID_senzaCancelletto)
    const h2 = elemento(tipo_titolo)
    h2.setAttribute('class', "titoli_tabelle___medicine")
    h2.textContent = titolo
    div.append(h2)
    document.querySelector(ID_principale).append(div)
}
function creazioni_titoli___tabella(titoli, ID_senzaCancelletto, ID_div, th_fontSize) {
    const table = elemento('table')
    table.setAttribute('id', ID_senzaCancelletto)
    table.style.width = "max-content"
    const tr = elemento('tr')
    for (const titolo of titoli) {
        const th = elemento('th')
        th.textContent = titolo
        th.style.fontSize = th_fontSize
        tr.append(th)
    }
    table.append(tr)
    document.querySelector(ID_div).append(table)
}
function creazione_elementi___tabella(n, orario, ID_table, valore) {
    const fase_finale = (d, i, ID_table) => {
        const tr = elemento('tr')

        const td_nome = elemento('td')
        td_nome.textContent = d[i]['MEDICINALE']
        const td_scorta = elemento('td')
        if (d[i]['SCORTA'] == 0) { td_scorta.textContent = "\u2717" }
        else { td_scorta.textContent = "\u2713" }

        const td_quantita = elemento('td')
        if (d[i]['SCORTA'] != 0) { td_quantita.textContent = d[i]['SCORTA'] }

        const tds = [td_nome, td_scorta, td_quantita]
        for (const td of tds) { tr.append(td) }
        document.querySelector(ID_table).append(tr)
    }
    //SCORTE
    if (valore || valore == false) {
        const d = PASTIGLIE()
        if (valore) {
            for (let i = 0; i < d.length / 2; i++) { fase_finale(d, i, ID_table) }
        }
        else if (valore == false) {
            for (let i = d.length / 2; i < d.length; i++) { fase_finale(d, i, ID_table) }
        }
    }
    //MEDICINE
    else if (valore == null) {
        const dati = DATI[n][orario]
        for (let i in dati) {
            const tr = elemento('tr')

            const td_nome = elemento('td')
            td_nome.textContent = dati[i]['MEDICINALE']
            td_nome.style.width = "15px"

            const td_azione = elemento('td')
            td_azione.textContent = dati[i]['AZIONE']

            const td_quantita = elemento('td')
            if (dati[i]['DOSE'] == 2) { td_quantita.textContent = creazione_punti(dati[i]['QUANTITA'], 2) }
            else { td_quantita.textContent = creazione_punti(dati[i]['QUANTITA'], 1) }

            td_quantita.style.textAlign = "justify"
            td_nome.style.fontSize = "12px"
            td_azione.style.fontSize = "12px"
            td_quantita.style.fontSize = "35px"

            const tds = [td_nome, td_azione, td_quantita]
            for (const td of tds) { tr.append(td) }
            document.querySelector(ID_table).append(tr)
        }
    }
}

//func dati
const PASTIGLIE = () => {
    const medicine = []
    for (let i = 0; i < 3; i++) { for (const med of DATI[i][TITOLI_tabelle___medicinali[i]]) { medicine.push(med) } }
    return medicine
}
const creazione_tabella = (TITOLI, titoli, ID_div_senzaCancelletto, ID_div, ID_tabella_senzaCancelletto, ID_tabella, indiceTITOLI, orario) => {
    creazione_titoli(TITOLI[indiceTITOLI], ID_div_senzaCancelletto, "h2", "#tabelle")
    creazioni_titoli___tabella(titoli, ID_tabella_senzaCancelletto, ID_div, "15px")
    creazione_elementi___tabella(indiceTITOLI, orario, ID_tabella, null)
}
const legenda = () => {
    const div = elemento('div')

    const cento = elemento('p')
    const cinquanta = elemento('p')
    const venticinque = elemento('p')
    const elementi = [cento, cinquanta, venticinque]
    const testo_elementi = ["N pastiglie \u2264 100% = º", "N pastiglie \u2264 50% = °", "N pastiglie \u2264 25% = •"]

    const h4 = elemento('h4')
    h4.setAttribute('class', "titoli_legenda")
    h4.textContent = "Legenda segno: "
    div.append(h4)

    for (let i = 0; i < 3; i++) {
        elementi[i].setAttribute('class', 'legenda')
        elementi[i].textContent = testo_elementi[i]
        div.append(elementi[i])
    }
    document.querySelector("#intestazione").append(div)
}
const scorta = () => {
    campi = [
        ["Scorte parte1", "scorte1", "scorte_tabella1", "#scorte_tabella1", "#scorte1", true],
        ["Scorte parte2", "scorte2", "scorte_tabella2", "#scorte_tabella2", "#scorte2", false]
    ]
    for (let i = 0; i < campi.length; i++) {
        creazione_titoli(campi[i][0], campi[i][1], "h4", "#scorte")
        creazioni_titoli___tabella(titoli_campi___scorte, campi[i][2], campi[i][4], "12px")
        creazione_elementi___tabella(null, null, campi[i][3], campi[i][5])
    }
}