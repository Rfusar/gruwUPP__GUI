import py7zr
import sys

argomento = sys.argv[1]
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
    if argomento == file: 
        file_archivio = path+file
        estrai_file_7zip(file_archivio, password)
        break

