package main

import (
	"fmt"
	"net"
	"net/http"
	"os"
	"strings"
	"bufio"
	"log"
	"github.com/rs/cors"
)

type config struct {
	risposta string
	UTENTE string
	PASSWORD string
}
func GestioneINIZIALE() *config {
	var risposta, UTENTE, PASSWORD string
	var err error
	reader := bufio.NewReader(os.Stdin)
	//*INTRO
	for{
		fmt.Println("vuoi rendere il server dispoibile nella LAN? [Y/N]")
		risposta, err = reader.ReadString('\n')
		if err != nil {fmt.Println("Errore durante la lettura dell'input:", err); return nil} 
		risposta = strings.ToLower(strings.TrimSpace(risposta))
		if risposta == "y" || risposta == "n" || risposta == "prova" {break}
	}

	fmt.Println("inserici utente")
	UTENTE, err = reader.ReadString('\n')
	if err != nil {fmt.Println("Errore durante la lettura dell'input:", err); return nil}
	UTENTE = strings.TrimSpace(UTENTE)

	fmt.Println("inserici password")
	PASSWORD, err = reader.ReadString('\n')
	if err != nil {fmt.Println("Errore durante la lettura dell'input:", err); return nil}
	PASSWORD = strings.TrimSpace(PASSWORD)

	return &config{
		risposta: risposta,
		UTENTE: UTENTE,
		PASSWORD: PASSWORD,
	}
}




func IPlocale() net.IP {
	interfaccia := "Wi-Fi 2" // Sostituisci con il nome dell'interfaccia desiderata
	interf, err := net.InterfaceByName(interfaccia)
	if err != nil {
		fmt.Println("Errore nell'ottenere l'interfaccia di rete:", err)
		return nil
	}
	addrs, err := interf.Addrs()
	if err != nil {
		fmt.Println("Errore nell'ottenere gli indirizzi di rete dell'interfaccia:", err)
		return nil
	}
	for _, addr := range addrs {
		// Controlla se l'indirizzo è IPv4
		if ipnet, ok := addr.(*net.IPNet); ok && ipnet.IP.To4() != nil {
			return ipnet.IP
		}
	}
	return nil
}
func avvioServer(IP string){
	c := cors.Default()
	PORTA := "8080"
	handlerWithCORS := c.Handler(http.DefaultServeMux)
	fmt.Println("Server accesso su http://"+IP+":"+PORTA+"\n")
	if err := http.ListenAndServe(IP+":"+PORTA, handlerWithCORS); err != nil {
		log.Fatal(err)
	}
}





// * METODI
func pag___methodGET(nome_path string, w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != nome_path {
		http.Error(w, "404", http.StatusNotFound)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "metodo sbagliato", http.StatusNotFound)
		return
	}
}
func pag___methodPOST(nome_path string, w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != nome_path {
		http.Error(w, "404", http.StatusNotFound)
		return
	}
	if r.Method != "POST" {
		http.Error(w, "metodo sbagliato", http.StatusNotFound)
		return
	}
}





func checkCredentials(username, password , UTENTE, PASSWORD string) bool {
	expectedUsername := UTENTE
	expectedPassword := PASSWORD
	return username == expectedUsername && password == expectedPassword
}


