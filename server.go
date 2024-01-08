package main

import (
	"fmt"
	"net"
	"log"
	"os"
	"net/http"
	"bufio"
	"strings"
)


func main(){
	var locale string
	var err error
	reader := bufio.NewReader(os.Stdin)
	for{
		fmt.Println("locale?")
		locale, err = reader.ReadString('\n')
        if err != nil {fmt.Println("ERRORE")}
		locale = strings.ToLower(strings.TrimSpace(locale))
		if(locale == "y" || locale == "n"){break}
	}

	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
		http.ServeFile(w, r, "./prova.html")
	})

	if locale == "n" {avvioServer(IPlocale().String())
	} else if locale == "y" {avvioServer("127.0.0.1")} 

}







func IPlocale() net.IP {  
	interf, err := net.InterfaceByName("Wi-Fi 2")
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
	PORTA := "8080"
	fmt.Println("Server accesso su http://"+IP+":"+PORTA+"\n")
	if err := http.ListenAndServe(IP+":"+PORTA, nil); err != nil {
		log.Fatal(err)
	}
}