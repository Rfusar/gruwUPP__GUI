import py7zr
import sys
import subprocess


FILE = sys.argv[1]
azione = sys.argv[2]
path = "C:\\Users\\Utente\\Desktop\\info\\variabili"
files = ["\\segreto.7z", "\\.env.7z"]

def estrai_file_7zip(file_archivio, password):
    try:
        with py7zr.SevenZipFile(file_archivio, mode='r', password=password) as z:
            z.extractall(path=path)
            print("Contenuto estratto con successo.")
            return True
    except py7zr.Bad7zFile:
        print("Errore: File 7z danneggiato o password errata.")
        return False
    
    
with open(path+"\\prova.txt", "r") as f: password = f.read()
for file in files:
    fileEstratto = file[:-3]
    print(fileEstratto)
    estensione = ".txt" if fileEstratto == "\\segreto" else ""
    fileEstratto+=estensione

    print(azione)
    print(fileEstratto)

    if FILE == file:
        if azione == "open": 
            file_archivio = path+file
            estrai_file_7zip(file_archivio, password)
            break

        elif azione == "delete": 
            print("sono dentro")
            subprocess.run(f"del {path}{fileEstratto}", shell=True)
            print("Contenuto eliminato con successo.")
            break

