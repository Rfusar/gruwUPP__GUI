class Schermo {
    constructor(persona, ArrayObjects) {
        this.persona = persona
        this.pressione = ArrayObjects[0];
        this.battito = ArrayObjects[1];
        this.ossigenazione = ArrayObjects[2];
        this.data = ArrayObjects[3];
        this.lunghezza = ArrayObjects[4];
    }
    ATTIVA() {
        const display = document.querySelector('#table');
        const div = document.createElement('div');
        const table = document.createElement('table');

        TITOLI_TABELLA(table)
        for (let i = 0; i < this.lunghezza; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < 4; j++) {
                const td = document.createElement('td');
                APPENDENDERE_VALORI(j, td, tr, this.pressione, this.battito, this.ossigenazione, this.data, i)
            }
            table.append(tr)
        }
        APPENDERE_DATI_PERSONALI(this.persona, div)
        div.append(table)
        display.append(div)
    }
};