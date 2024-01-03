const LAVORAZIONE = (dati) => {
    const PRESSIONE = [];
    const BATTITO = [];
    const OSSIGENAZIONE = [];
    const DATA = [];
    const lunghezza = dati.length;

    for (const arg of dati) {
        PRESSIONE.push(arg['PRESSIONE']);
        BATTITO.push(arg['BATTITO']);
        OSSIGENAZIONE.push(arg['OSSIGENAZIONE']);
        DATA.push(arg['DATA']);
    }
    return [PRESSIONE, BATTITO, OSSIGENAZIONE, DATA, lunghezza]
}


const TITOLI_TABELLA = (table) => {
    const titoli = ["Pressione(max-min)", "Battito", "Ossigenazione", "Data"];
    const tr = document.createElement('tr');
    for (let i = 0; i < 4; i++) {
        const th = document.createElement('th');
        th.textContent = titoli[i];
        tr.append(th);
    }
    table.append(tr);
}

const APPENDERE_DATI_PERSONALI = (dati_personali, display) => {
    const div = document.createElement('div');
    const nome = document.createElement('h2');
    const nascita = document.createElement('span');
    const cognome = document.createElement('span');

    nome.textContent = `${dati_personali['nome']}\t`;
    nome.style.marginTop = "2px"
    nome.style.marginBottom = "8px"
    cognome.textContent = dati_personali['cognome'];
    cognome.style.fontSize = "17px"
    nascita.textContent = dati_personali['nascita'];
    div.style.marginTop = "20px"

    nome.append(cognome)
    div.append(nascita)
    div.append(nome)
    display.append(div)
}

const APPENDENDERE_VALORI = (campi, td, tr, pressione, battito, ossigenazione, data, i) => {
    switch (campi) {
        case 0:
            td.textContent = pressione[i];
            tr.append(td);
            break;
        case 1:
            td.textContent = battito[i];
            tr.append(td);
            break;
        case 2:
            td.textContent = ossigenazione[i];
            tr.append(td);
            break;
        case 3:
            td.textContent = data[i];
            tr.append(td);
            break;
    }
}