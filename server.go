package main

import (
	"net/http"
	
)

// * PAGINE
var (
	url = "https://webtv.camera.it/"
	

	percorso = "./static/pagineHTML"
	studio = percorso+"/studio"

	api = "./static/js"
	scuola = api+"/pagine/scuola/appunti"

    percorsi = map[string]string{
		"/": "./static/index.html",
		//& HTML
		"/studio/informatica": studio+"/informatica.html",
		"/studio/matematica": studio+"/matematica.html",
		"/studio/musica": studio+"/musica.html",
		//*GrandiScuole
		"/studio/scuola": studio+"/scuola.html",
		//*API info
		"/api.show": percorso+"/API.html",
		
		//& Altro
		//*Informatica
		"/api.corsi": api+"/corsi.json", 
		//*Scuola
		"/api.italiano": scuola+"/italiano/narrativa.txt",
		"/api.storia": scuola+"/storia/roma.txt",
		"/api.telecomunicazioni": scuola+"/telecomunicazioni/sistemi.txt",
		"/api.formule": scuola+"/formule.txt",
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


	//pagine segrete
	http.HandleFunc("/paginaSegreta1", BasicAuth(paginaSegreta1, "Accedi", UTENTE, PASSWORD))
	http.HandleFunc("/paginaSegreta2", BasicAuth(paginaSegreta2, "Accedi", UTENTE, PASSWORD))


	//pagine
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