package main

import (
	"net/http"
	//"fmt"
	//"golang.org/x/net/html"
	
)

// * PAGINE
var (
	url = "https://webtv.camera.it/"
	

	percorso = "./static/pagineHTML"
	studio = percorso+"/studio"

    percorsi = map[string]string{
		"/": "./static/index.html",
		//studio
		"/studio/informatica": studio+"/informatica.html",
		"/studio/matematica": studio+"/matematica.html",
		"/studio/musica": studio+"/musica.html",
		"/studio/scuola": studio+"/scuola.html",
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


	//pagine segrete
	http.HandleFunc("/paginaSegreta1", BasicAuth(paginaSegreta1, "Accedi", UTENTE, PASSWORD))
	http.HandleFunc("/paginaSegreta2", BasicAuth(paginaSegreta2, "Accedi", UTENTE, PASSWORD))

	//pagine esterne
	/*resp, err := http.Get(url)
	if err != nil {
		fmt.Println("Errore durante la richiesta:", err)
		return
	}
	defer resp.Body.Close()

	// Analizza il corpo della risposta HTML
	doc, err := html.Parse(resp.Body)
	if err != nil {
		fmt.Println("Errore durante l'analisi dell'HTML:", err)
		return
	}

	// Esempio di come puoi esplorare l'albero HTML
	traverseHTML(doc, 0)*/

	//pagine interne
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