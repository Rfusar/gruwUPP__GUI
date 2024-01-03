package main

import (
	"net/http"
)

// * PAGINE
var (
	percorso = "./static/pagineHTML"
	studio = percorso+"/studio"

    percorsi = map[string]string{
		"/": "./static/index.html",
		//studio
		"/studio/informatica": studio+"/informatica.html",
		"/studio/matematica": studio+"/matematica.html",
		"/studio/musica": studio+"/musica.html",
		//api
		"/api.corsi": "./static/js/corsi.json", 
	}
)

func main() {
	C := GestioneINIZIALE()
	risposta := C.risposta
	UTENTE := C.UTENTE
	PASSWORD := C.PASSWORD


	//*GESTIONE PAGINE E AVVIO SERVER
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/paginaSegreta1", BasicAuth(paginaSegreta1, "Accedi", UTENTE, PASSWORD))
	http.HandleFunc("/paginaSegreta2", BasicAuth(paginaSegreta2, "Accedi", UTENTE, PASSWORD))
	for path, filePath := range percorsi {
		path := path; filePath := filePath 
		http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
			pag___methodGET(path, w, r)
			http.ServeFile(w, r, filePath)
		})
	}

	//*scelta IP di esposizione
	if risposta == "y"{ avvioServer(IPlocale().String()) 
	} else if risposta == "n"{ avvioServer("127.0.0.1") }

}